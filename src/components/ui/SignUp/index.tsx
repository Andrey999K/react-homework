import React, { FormEvent, useState } from "react";
import { FormProps } from "../../../../types";
import TextField from "../../common/TextField";
import { useForm } from "../../../hooks/useForm";

const initialState = {
  name: "",
  nickname: "",
  email: "",
  sex: "",
  password: "",
  repeatPassword: ""
};

const SignUp = ({ onSubmit }: FormProps) => {
  const { formElement, handlerChange, handlerSubmit } = useForm(initialState, onSubmit);

  return (
    <form ref={formElement} onSubmit={handlerSubmit} onChange={handlerChange} className="form">
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