import React from "react";

export interface DataItem {
  id: number;
  title: string;
}

export type OnSubmit = (form: { [field: string]: string }) => void;

export interface FormProps {
  onSubmit: OnSubmit;
}

export interface InputProps {
  name: string;
  type:
    | "text"
    | "password"
    | "email"
    | "number"
    | "date"
    | "checkbox"
    | "radio"
    | "file";
  placeholder?: string;
  label?: string;
  description?: string;
  radius?: number;
  styles?: React.CSSProperties;
  rightIcon?: string;
  leftIcon?: string;
  required?: boolean;
}

export type FormState<T = string> = {
  [field: string]: T;
};

export type ObjectDefault = {
  [id: string]: any;
};

export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  created: string;
};

export type DateTime = Date | number | bigint;

export type SortedDirection = "ASC" | "DESC";

export type Callback = () => void;

export type User = {
  email: string;
  password?: string;
};

export type Episode = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  created: string;
};

export type ListItemData = {
  id: number;
  image?: string;
  name: string;
  created: string;
  url: string;
};
