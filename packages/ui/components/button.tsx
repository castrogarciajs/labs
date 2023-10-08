import { ButtonProps } from './interfaces/dev'

export function Button({ children, shadow, rounded, ...atributtes }: ButtonProps): JSX.Element {
  const styled = {
    boxShadow: shadow ? "shadow" : "none",
    borderRadius: rounded ? "rounded" : 'none',
  }

  return (
    <button type='button' {...atributtes} style={styled}>
      {children}
    </button>
  )
}
