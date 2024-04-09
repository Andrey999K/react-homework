import React, { ButtonHTMLAttributes } from "react";

interface ButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, ...attrs }: ButtonInterface) => {
  return <button {...attrs}>{children}</button>;
};

export default Button;
