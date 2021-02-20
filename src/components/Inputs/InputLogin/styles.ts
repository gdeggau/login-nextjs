import styled from 'styled-components'

interface InputProps {
  error: string
  theme: { colors }
}

export const Container = styled.div`
  display: flex;
`

export const InputBase = styled.input<InputProps>`
  width: 100%;
  padding: 15px 15px;

  color: ${({ theme }) => theme.colors.text};
  background-color: transparent;
  font-size: 10px;

  border: 1px solid
    ${({ theme, error }) => (error ? theme.colors.error : theme.colors.text)};
  border-radius: 8px;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.secondary};
  }
`

export const ClearField = styled.button`
  margin-left: -25px;
  border: none;
  background: transparent;

  color: ${({ theme }) => theme.colors.error};
`
