import { HeaderProps } from './interfaces/dev'

export function Header({ children, ...atributtes }: HeaderProps) {
  return <header {...atributtes}>{children}</header>
}
