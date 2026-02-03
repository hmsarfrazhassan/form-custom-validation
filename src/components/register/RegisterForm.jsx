import React, { useState } from "react";
import Input from "../general/input/Input";

const RegisterForm = () => {
  const [fields, setFields] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setFields({
      ...fields,
      [name]: value,
    });
    console.log(fields);
  };
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto h-screen flex justify-center items-center">
      <div className="border-2 border-black p-2 rounded-md w-full flex flex-col gap-2">
        <div className="text-center text-4xl">Register</div>
        <Input
          name={"email"}
          type={"email"}
          placeholder={"Email"}
          label={"Email"}
          value={fields.email}
          onchange={handleChange}
        />

        <Input
          name={"password"}
          type={"password"}
          placeholder={"password"}
          label={"password"}
          value={fields.password}
          onchange={handleChange}
        />

        <button>Submit</button>
      </div>
    </div>
  );
};

export default RegisterForm;
