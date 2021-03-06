import * as React from "react";
import "./Text.css";
export type textColorType = "white" | "gray" | "lightgray" | "black" | "orange";
export type textWeightType = "normal" | "bold";
export type textSizeType = "small" | "small-medium" | "medium";

export interface InputTextProps {
  label: string;
  fontSize?: string;
  color?: textColorType;
  className?: string;
  weight?: textWeightType;
  style?: {};
}
const Text = ({
  label,
  className,
  fontSize,
  color,
  weight,
  style,
}: InputTextProps) => {
  var textSize = `text-wrapper--text-${fontSize ? fontSize : "15px"}`;
  var textColor = `text-wrapper--text-${color ? color : "white"}`;
  var textWeight = `text-wrapper--text-${weight ? weight : "normal"}`;
  return (
    <div
      style={style}
      className={`text-wrapper ${textSize} ${textColor} ${textWeight} ${className}`}
    >
      {label}
    </div>
  );
};

export default Text;
