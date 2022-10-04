import {
  signInWithGooglePopup,
  createUserDoc,
} from '../../utils/firebase/firebase';
import SignupForm from '../../components/signup-form/signup-form';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDoc(user);
  };

  return (
    <>
      <div className="flex flex-row justify-around border-solid border-black p-10 w-full h-5/6 mx-auto mt-8 shadow-2xl">
        <div className="flex flex-col">
          <h1 className="text-lg font-bold">Sign In</h1>
          <p>with your Google Account</p>
          <button
            className="flex flex-col text-center mx-auto px-10 mt-10 border-2 border-solid border-black p-6 rounded-full"
            onClick={logGoogleUser}
          >
            Sign in
          </button>
        </div>
        <SignupForm />
      </div>
    </>
  );
};

export default SignIn;
