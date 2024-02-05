import React, { FormEvent, useState } from "react";
import { OnSubmit } from "../../../../types";

interface SignInProps {
  onSubmit: OnSubmit;
}

const SignIn = ({ onSubmit }: SignInProps) => {
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
      <input type="email" name="email" required />
      <input type="password" name="password" required />
      <button>Войти</button>
    </form>
  );
};

export default SignIn;