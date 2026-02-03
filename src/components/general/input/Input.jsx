import React from "react";

const Input = ({ label, name, type, value, placeholder, onchange }) => {
  return (
    <div>
      <label className="block capitalize text-lg mb-2">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onchange(e)}
        className="h-10 w-full rounded-md bg-transparent px-4 py-1 ring-1 ring-black focus:ring-blue-600"
      />
    </div>
  );
};

export default Input;
