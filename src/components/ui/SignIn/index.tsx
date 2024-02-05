import React, { FormEvent, useState } from "react";
import { FormProps } from "../../../../types";
import TextField from "../../common/TextField";

const SignIn = ({ onSubmit }: FormProps) => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handlerChange = ({ target }: FormEvent<HTMLFormElement>) => {
    const { name, value } = target as HTMLInputElement;
    setForm(prevState => ({ ...prevState, [name]: value }));
  };

  const handlerSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handlerSubmit} onChange={handlerChange} className="form">
      <TextField type="email" name="email" placeholder="email" label="Email" />
      <TextField type="password" name="password" placeholder="password" label="Password" />
      <button>Войти</button>
    </form>
  );
};

export default SignIn;