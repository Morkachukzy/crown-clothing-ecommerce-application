import {signInWithGooglePopup, signInWithGoogleRedirect, createUserProfileDocument} from "../../utils/firebase/firebase.utils";
import {SignUpForm} from "../../components/sign-up-form/sign-up-form.component";


export const SignIn = () => {

  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef =  await createUserProfileDocument(user)
  }

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <button onClick={logGoogleUser}>Sign In With Google</button>
      <SignUpForm />
    </div>
  );
}