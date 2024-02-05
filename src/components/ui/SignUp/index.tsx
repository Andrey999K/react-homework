import React, { FormEvent, useState } from "react";
import { FormProps } from "../../../../types";
import TextField from "../../common/TextField";

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
      <TextField type="text" name="name" placeholder="name" label="Name" />
      <TextField type="text" name="nickname" placeholder="nickname" label="Nickname" />
      <TextField type="text" name="email" placeholder="email" label="Email" />
      <TextField type="text" name="sex" placeholder="sex" label="Sex" />
      <TextField type="password" name="password" placeholder="password" label="Password" />
      <TextField type="password" name="repeatPassword" placeholder="password" label="Repeat Password" description="Repeat Password"/>
      <button>Зарегистрироваться</button>
    </form>
  );
};

export default SignUp;