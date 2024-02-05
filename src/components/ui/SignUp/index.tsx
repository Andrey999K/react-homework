import React, { FormEvent, useState } from "react";
import { FormProps } from "../../../../types";

const SignUp = ({ onSubmit }: FormProps) => {
  const [form, setForm] = useState({
    name: "",
    nickname: "",
    email: "",
    sex: "",
    password: "",
    repeatPassword: ""
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
      <input type="name" name="name" required />
      <input type="nickname" name="nickname" required />
      <input type="email" name="email" required />
      <input type="sex" name="sex" required />
      <input type="password" name="password" required />
      <input type="password" name="repeatPassword" required />
      <button>Войти</button>
    </form>
  );
};

export default SignUp;