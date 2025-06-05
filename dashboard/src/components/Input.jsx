const Input = ({
  label,
  name,
  type = "text",
  placeholder = "",
  value,
  onChange,
  onBlur,
  error,
  touched,
  ...rest
}) => {
  return (
    <div className="mb-4 w-full">
      {label && (
        <label htmlFor={name} className="block mb-1 font-medium text-white">
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`w-full px-4 py-2 border rounded-md focus:outline-none text-black focus:ring-2 focus:ring-black ${
          error && touched ? "border-red-500" : "border-gray-300"
        }`}
        {...rest}
      />
      {error && touched && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
