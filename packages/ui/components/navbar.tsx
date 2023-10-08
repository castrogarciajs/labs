import { NavbarProps } from './interfaces/dev';

export function Navbar({ children, ...atributes }: NavbarProps) {
  return <nav {...atributes}>{children}</nav>;
}
