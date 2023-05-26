import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ children, type }) => {
  return (
    <button
      type={type}
      className="uppercase rounded-md bg-primary_orange px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      {children}
    </button>
  );
};

export default Button;
