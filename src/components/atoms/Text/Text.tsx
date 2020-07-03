import * as React from "react";
import "./Text.scss";
export type textColorType = "white" | "gray" | "lightgray";
export type textWeightType = "normal" | "bold";
export interface TextProps {
  label: string;
  fontSize?: string;
  color?: textColorType;
  className?: string;
  weight?: textWeightType;
  style?: {};
}
const Text = ({label,className,fontSize,color,weight,style,}: TextProps) => {
  let textSize = `text-wrapper--text-${fontSize ? fontSize : "15px"}`;
  let textColor = `text-wrapper--text-${color ? color : "white"}`;
  let textWeight = `text-wrapper--text-${weight ? weight : "normal"}`;

  return (
    <div
      style={style} className={`text-wrapper ${textSize} ${textColor} ${textWeight} ${className}`}>
      {label}
    </div>
  );
};

export default Text;
