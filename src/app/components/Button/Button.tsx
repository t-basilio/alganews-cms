import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import * as B from "./Button.styles";

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  option: "danger" | "text" | "primary";
  label: string | React.ReactNode;
}

export default function Button({
  label,
  option,
  ...props
}: ButtonProps) {
  return (
    <B.Wrapper option={option} {...props}>
      {label}
    </B.Wrapper>
  );
}
