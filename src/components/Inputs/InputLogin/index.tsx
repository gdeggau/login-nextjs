import React from 'react'

import { InputBase, ClearField, Container } from './styles'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error: string
  clearFieldOnError?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Input: React.FC<InputProps> = ({
  name,
  value,
  onChange,
  clearFieldOnError,
  error,
  ...props
}) => {
  return (
    <Container>
      <InputBase
        name={name}
        value={value}
        error={error}
        onChange={onChange}
        {...props}
      />
      {error && clearFieldOnError && (
        <ClearField type="button" onClick={clearFieldOnError}>
          X
        </ClearField>
      )}
    </Container>
  )
}

export default Input
