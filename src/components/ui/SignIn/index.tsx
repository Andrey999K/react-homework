import React, { FormEvent, useRef, useState } from "react";
import { FormProps } from "../../../types";
import TextField from "../../common/TextField";
import { useForm } from "../../../hooks/useForm";

const initialState = {
  email: "",
  password: ""
};

const SignIn = ({ onSubmit }: FormProps) => {
  const { formElement, handlerChange, handlerSubmit } = useForm(initialState, onSubmit);

  return (
    <form ref={formElement} onSubmit={handlerSubmit} onChange={handlerChange} className="form">
      <TextField type="email" name="email" placeholder="email" label="Email" />
      <TextField type="password" name="password" placeholder="password" label="Password" />
      <button>Войти</button>
    </form>
  );
};

export default SignIn;
