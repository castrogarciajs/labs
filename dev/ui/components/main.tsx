import { MainProps } from './interfaces/dev';

export function Main({ children, ...atributtes }: MainProps) {
  return <main {...atributtes}>{children}</main>;
}
