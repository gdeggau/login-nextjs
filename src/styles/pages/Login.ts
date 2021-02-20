import styled from 'styled-components'

import img from '../../../public/background_img.png'

const BREAK_POINT = '680px'

interface InputProps {
  error: string
  theme: { colors }
}

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;

  @media (max-width: ${BREAK_POINT}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const ContainerImg = styled.div`
  background-size: cover;
  background-position: center;
  background-image: url(${img});
  max-width: 55vw;
  width: 100%;

  &:after,
  &:before {
    content: '';
    display: block;
    position: relative;
    margin: auto;
  }

  &:before {
    height: 100%;
    background: linear-gradient(180deg, #130525 0%, rgba(105, 57, 153, 0) 100%);
    transform: rotate(-180deg);
  }

  @media (max-width: ${BREAK_POINT}) {
    display: none;
  }
`
export const ContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 45vw;

  @media (max-width: ${BREAK_POINT}) {
    max-width: 90vw;
  }
`

export const ContainerIntern = styled.div`
  justify-content: center;
  align-items: center;
  flex-direction: column;

  max-width: 256px;
`

export const Header = styled.div`
  h1 {
    font-size: 40px;
    font-weight: 400;
    color: ${props => props.theme.colors.primary};
  }

  p {
    font-weight: 600;
    margin: 15px 0 35px 0;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    font-size: 10px;

    padding: 8px 0 8px 8px;
  }

  button {
    padding: 15px 0;
    margin: 10px 0 25px 0;

    font-size: 14px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.white};

    background: linear-gradient(
      267.79deg,
      ${({ theme }) => `${theme.colors.primary} 0%`},
      ${({ theme }) => `${theme.colors.secondary} 99.18%`}
    );
    box-shadow: 0px 10px 25px ${({ theme }) => theme.colors.lightPink};
    border-radius: 8px;
    border: none;

    transition: opacity 0.3s;

    &:hover,
    &:focus {
      opacity: 0.9;
    }
  }
`

export const Input = styled.input<InputProps>`
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

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 14px;

    a {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`
export const Error = styled.label`
  color: ${({ theme }) => theme.colors.error};
  font-size: 10px;

  padding: 8px 0 0 8px;
`
