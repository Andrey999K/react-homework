import React from "react";
import { InputProps } from "../../../../types";
import "./TextField.scss";

const TextField = ({ name, type, placeholder, label, description, radius, styles, required = true }: InputProps) => {
  console.log(styles ? styles : radius ? { borderRadius: `${radius}px` } : {});
  return (
    <label className="label">
      {label && <span className="label__text">{label}</span>}
      {label && <span className="label__description">{description ? description : `Input ${label}`}</span>}
      <input
        className="input"
        type={type}
        name={name}
        style={styles ? styles : radius ? { borderRadius: `${radius}px` } : {}}
        placeholder={placeholder}
        autoComplete="off"
        required={required}
      />
    </label>
  );
};

export default TextField;