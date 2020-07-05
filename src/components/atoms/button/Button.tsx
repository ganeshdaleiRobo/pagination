import * as React from "react";
import "./button.css";
export type textColorType = "white" | "gray" | "lightgray" | "black" | "orange";
export type textWeightType = "normal" | "bold";
export type textSizeType = "small" | "small-medium" | "medium";

export interface ButtonProps {
  label: string;
  fontSize?: string;
  color?: textColorType;
  className?: string;
  weight?: textWeightType;
  style?: {};
}
const Button = ({
  label,
  fontSize,
  color,
  className,
  weight,
  style,
}: ButtonProps) => {
  let textSize = `button-wrapper--button-${fontSize ? fontSize : "15px"}`;
  let textColor = `button-wrapper--button-${color ? color : "white"}`;
  let textWeight = `button-wrapper--button-${weight ? weight : "normal"}`;
  return (
    <button
      style={style}
      className={`button-wrapper ${textSize} ${textColor} ${textWeight} ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
