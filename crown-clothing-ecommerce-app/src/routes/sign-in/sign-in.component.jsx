import {signInWithGooglePopup, createUserProfileDocument} from "../../utils/firebase/firebase.utils";

export const SignIn = () => {

  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef =  await createUserProfileDocument(user)
  }

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign In With Google</button>
    </div>
  );
}