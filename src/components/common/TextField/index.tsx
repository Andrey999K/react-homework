import React from "react";
import { InputProps } from "../../../../types";
import "./TextField.scss";

const TextField = ({ name, type, placeholder, label, description, required = true }: InputProps) => {
  return (
    <label className="label">
      {label && <span className="label__text">{label}</span>}
      {label && <span className="label__description">{description ? description : `Input ${label}`}</span>}
      <input
        className="input"
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete="off"
        required={required}
      />
    </label>
  );
};

export default TextField;