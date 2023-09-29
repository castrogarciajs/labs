import { FooterProps } from "./interfaces/dev";

export function Footer({ children, ...atributtes }: FooterProps) {
  return <footer {...atributtes}>{children}</footer>;
}
