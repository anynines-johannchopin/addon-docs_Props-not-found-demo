import React from 'react'
import styled from 'styled-components'

export interface ButtonProps {
  type: ButtonType
  className?: string
  onClick?: () => void
}

export type ButtonType = 'primary' | 'dark' | 'darker' | 'default' | 'submit'

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  const { children, onClick, type, className = '' } = props

  return (
    <StyledButton
      className={className}
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={(): void => { return (onClick && onClick()) }}
    >
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  color: red;
`
StyledButton.displayName = 'StyledButton'

export default Button