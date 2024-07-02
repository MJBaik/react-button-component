import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color?: "primary" | "secondary";
}
declare const Button: React.FC<ButtonProps>;

export { Button };
