import { useState } from 'react';
import InputForm from '../input-form/input-form';
import { createAuthEpass, createUserDoc } from '../../utils/firebase/firebase';

const defaultFormFields = {
  name: '',
  email: '',
  password: '',
  confirmedPassword: '',
};

const SignupForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, email, password, confirmedPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmedPassword) {
      alert('passwords do not match');
      return;
    }

    try {
      const { user } = await createAuthEpass(email, password);

      await createUserDoc(user, { name });
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create a user since the email is already in used');
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
      <h1 className="text-lg font-bold">Sign Up</h1>
      <p> with your email and password</p>

      <form className="flex flex-col text-left" onSubmit={handleSubmit}>
        <InputForm
          label="Name"
          type="text"
          required
          onChange={handleChange}
          name="name"
          value={name}
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
