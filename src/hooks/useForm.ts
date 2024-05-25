import { FormEvent, useRef, useState } from "react";
import { FormState, OnSubmit } from "../types";

export function useForm(initialState: FormState, onSubmit?: OnSubmit) {
  const [form, setForm] = useState(initialState);
  const formElement = useRef<HTMLFormElement | null>(null);

  const handlerChange = ({ target }: FormEvent<HTMLFormElement>) => {
    const { name, value } = target as HTMLInputElement;
    setForm(prevState => ({ ...prevState, [name]: value }));
  };

  const handlerSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(form);
    }
    formElement.current?.reset();
    setForm(initialState);
  };
  return { form, setForm, formElement, handlerChange, handlerSubmit };
}
