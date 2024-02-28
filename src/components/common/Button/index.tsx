import React, { ButtonHTMLAttributes } from "react";

interface ButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | Array<React.ReactNode>;
  className?: string;
}

const Button = ({ children, className, ...attr }: ButtonInterface) => {
  const classes = "p-4 rounded bg-orange-400 " + (className || "");
  return (
    <button className={classes} {...attr}>
      {children}
    </button>
  );
};

export default Button;
