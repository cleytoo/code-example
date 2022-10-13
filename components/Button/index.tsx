import { ButtonHTMLAttributes, ReactNode } from "react";
import { Loader } from "components/Loader";
import * as S from "./styles";

type VariantsButton = "primary" | "neutral" | "confirm";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: VariantsButton;
  children: ReactNode;
  small?: boolean;
  isLoading?: boolean;
};

export function Button({ children, isLoading, ...rest }: ButtonProps) {
  return (
    <S.Wrapper {...rest} isLoading={isLoading}>
      {isLoading ? <Loader /> : <span>{children}</span>}
    </S.Wrapper>
  );
}
