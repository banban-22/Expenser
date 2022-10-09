import {
  signInWithGooglePopup,
  createUserDoc,
} from '../../utils/firebase/firebase';
import SignupForm from '../../components/signup-form/signup-form';
import '../../index.css';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDoc(user);
  };

  return (
    <>
      <div className="flex flex-row justify-around border-solid border-black py-10 px-8 w-8/12 h-4/6 mx-auto my-8 shadow-2xl z-2 rounded-3xl">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold">Already have your account?</h1>
          <h2 className="text-lg mt-8">Sign In</h2>
          <p>with your Google Account</p>
          <button className="sign-up-btn" onClick={logGoogleUser}>
            Sign in
          </button>
        </div>
        <SignupForm />
      </div>
    </>
  );
};

export default SignIn;
