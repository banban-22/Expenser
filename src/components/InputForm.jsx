const InputForm = ({ label, ...otherProps }) => {
  return (
    <div>
      {label && <label className="flex text-lg mt-8">{label}</label>}

      <input
        className="flex border-blue border-solid border-b-2 p-2 mt-4 justify-left w-full focus:outline-0"
        {...otherProps}
      />
    </div>
  );
};

export default InputForm;
