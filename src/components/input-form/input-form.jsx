const InputForm = ({ label, ...otherProps }) => {
  return (
    <div>
      <label className="flex text-lg mt-8">{label}</label>
      <input
        className="flex border-black border-solid border-b-2 ml-4 p-2 mt-4 justify-left w-full focus:outline-0"
        {...otherProps}
      />
    </div>
  );
};

export default InputForm;
