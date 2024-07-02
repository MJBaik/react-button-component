import React from "react";
import { Wrapper } from "./styled";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ color, children, ...props }) => {
  const buttonColor = () => {
    switch (color) {
      case "primary":
        return {
          backgroundColor: "#3354f7",
          borderColor: "#3354f7",
          color: "#FFF",
        };
      case "secondary":
        return {
          backgroundColor: "#FFF",
          borderColor: "#3354f7",
          color: "#3354f7",
        };
      default:
        return {
          backgroundColor: "#3354f7",
          borderColor: "#3354f7",
          color: "#FFF",
        };
    }
  };

  return (
    <Wrapper
      data-testid="button-container"
      style={{ ...buttonColor(), ...props.style }}
      {...props}
    >
      {children}
    </Wrapper>
  );
};

export default Button;
