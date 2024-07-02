import React from "react";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color?: "primary" | "secondary";
}
declare const Button: React.FC<ButtonProps>;
export default Button;
