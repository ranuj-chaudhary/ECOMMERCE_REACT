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
    <div className="flex flex-col gap-1 w-full">
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="p-2 w-full text-purple-900 rounded-md border-none placeholder:text-gray-500 focus:outline-2 focus:outline-purple-900"
      />
    </div>
  );
};

export default InputField;
