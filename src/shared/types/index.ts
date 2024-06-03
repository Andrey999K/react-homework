import React from "react";
import { TableProps } from "antd";

export type OnSubmit = (form: { [field: string]: string }) => void;

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

export type Location = {
  created: string;
  dimension: string;
  id: number;
  name: string;
  residents: string[];
  type: string;
  url: string;
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

export type OnChangeTable<T> = NonNullable<TableProps<T>["onChange"]>;
