import React from "react";
import { InputProps } from "../../../types";
import "./TextField.scss";

const TextField = ({
  name,
  type,
  placeholder,
  label,
  description,
  radius,
  styles,
  rightIcon,
  leftIcon,
  required = true
}: InputProps) => {
  console.log(styles ? styles : radius ? { borderRadius: `${radius}px` } : {});
  return (
    <label className="label">
      {!!label && <span className="label__text">{label}</span>}
      {!!label && <span className="label__description">{description ? description : `Input ${label}`}</span>}
      <div className="input-wrapper" style={styles ? styles : radius ? { borderRadius: `${radius}px` } : {}}>
        {!!rightIcon && <span>{rightIcon}</span>}
        <input
          className="input"
          type={type}
          name={name}
          placeholder={placeholder}
          autoComplete="off"
          required={required}
        />
        {!!leftIcon && <span className="input__left-icon">{leftIcon}</span>}
      </div>
    </label>
  );
};

export default TextField;
