import { Html } from "next/document";
import { ButtonHTMLAttributes } from "react";

import * as S from "./styles";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export function Button({ title, ...rest }: IButtonProps) {
  return <S.Button {...rest}>{title}</S.Button>;
}
