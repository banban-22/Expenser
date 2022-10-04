import { useState } from 'react';
import InputForm from '../input-form/input-form';
import { createAuthEpass, createUserDoc } from '../../utils/firebase/firebase';

const defaultForm = {
  displayName: '',
  email: '',
  password: '',
  confirmedPassword: '',
};

const SignupForm = () => {
  const [formFields, setFormFields] = useState(defaultForm);
  const { displayName, email, password, confirmedPassword } = formFields;

  const resetFormContent = () => {
    setFormFields(defaultForm);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmedPassword) {
      alert('password does not match');
      return;
    }

    try {
      const { user } = await createAuthEpass(email, password);

      await createUserDoc(user, { displayName });
      resetFormContent();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create a user since the email is already used');
      } else {
        console.log('error occured', error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">Don't have an account?</h1>
      <h2 className="text-lg">Sign Up</h2>
      <p> with your email and password</p>

      <form className="flex flex-col text-left" onSubmit={handleSubmit}>
        <InputForm
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <InputForm
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <InputForm
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <InputForm
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmedPassword"
          value={confirmedPassword}
        />

        <button
          type="submit"
          className="mt-10 border-solid border-black border-2 rounded-full hover:bg-black hover:text-white"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
