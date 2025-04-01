import React from 'react';

const InputField = ({
  label,
  type,
  id,
  value,
  onChange,
  name,
  placeholder,
}) => {
  return (
    <div className="flex flex-col gap-1 mb-4">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="p-2 placeholder:text-gray-500 rounded-md text-purple-900 border-none focus:outline-2 focus:outline-purple-900"
      />
    </div>
  );
};

export default InputField;
