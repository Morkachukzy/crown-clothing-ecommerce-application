import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, createUserWithEmailAndPassword,GoogleAuthProvider} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAWALHZEIdvHM4Xh6aIe8BGUqDiFUXWcKo",
    authDomain: "crown-ecommerce-app-2c2dc.firebaseapp.com",
    projectId: "crown-ecommerce-app-2c2dc",
    storageBucket: "crown-ecommerce-app-2c2dc.appspot.com",
    messagingSenderId: "644582748836",
    appId: "1:644582748836:web:fc6dd1c24a9ba8ce01ac31"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserProfileDocument = async (userAuth, additionalInfo = {}) => {
    if (!userAuth) return;

    const userDocRef = await doc(db, "users", userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {displayName, email, createdAt, ...additionalInfo});
        } catch (error) {
            console.error(`Error creating user: ${error.message}`);
        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) {
        throw new Error('Please provide an email and password');
    }

    return await createUserWithEmailAndPassword(auth, email, password);
}