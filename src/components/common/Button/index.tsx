import React, { ButtonHTMLAttributes } from "react";

interface ButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | Array<React.ReactNode>;
}

const Button = ({ children, ...attr }: ButtonInterface) => {
  return <button {...attr}>{children}</button>;
};

export default Button;
