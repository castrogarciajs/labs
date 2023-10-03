import { ButtonProps } from './interfaces/dev';
import { STYLED_CSS } from "./interfaces/const";

export function Button({ children, shadow, rounded,...atributtes }: ButtonProps): JSX.Element {

  const styled = {
    boxShadow: shadow ? STYLED_CSS.shadow : 'none',
    borderRadius: rounded ? "1rem" : "none",
  }

  return (
    <button type='button' {...atributtes} style={styled}>
      {children}
    </button>
  );
}
