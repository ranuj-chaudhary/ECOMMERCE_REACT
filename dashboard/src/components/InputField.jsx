import React from 'react';

const InputField = ({
  label,
  type,
  id,
  value,
  onChange,
  name,
  placeholder,
  className,
  wrapperClass,
  onClick,
}) => {
  return (
    <div className={`flex flex-col gap-1 w-full ${wrapperClass}`}>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className={`${className}`}
      />
    </div>
  );
};

export default InputField;
