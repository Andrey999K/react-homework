import React from "react";

export interface DataItem {
  id: number,
  title: string
}

export type OnSubmit = (form: { [field: string]: string }) => void;


export interface FormProps {
  onSubmit: OnSubmit;
}

export interface InputProps {
  name: string;
  type: "text" | "password" | "email" | "number" | "date" | "checkbox" | "radio" | "file";
  placeholder?: string;
  label?: string;
  description?: string;
  radius?: number;
  styles?: React.CSSProperties;
  required?: boolean;
}

export type FormState = {
  [field: string]: string
}