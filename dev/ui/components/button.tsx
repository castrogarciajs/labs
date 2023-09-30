import { ButtonProps } from './interfaces/dev';

export function Button({ children, ...atributtes }: ButtonProps): JSX.Element {
  return (
    <button type="button" {...atributtes}>
      {children}
    </button>
  );
}
