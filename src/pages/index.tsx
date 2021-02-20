import React, { useState, useEffect } from 'react'
import Head from 'next/head'

import { useDispatch, useSelector } from 'react-redux'
import { signInRequest } from '../store/modules/auth/actions'

import {
  Wrapper,
  ContainerWrapper,
  ContainerIntern,
  ContainerImg,
  Header,
  Form,
  Input,
  Footer,
  Error
} from '../styles/pages/Login'

import emailIsValid from '../utils/emailIsValid'

const Home: React.FC = () => {
  const dispatch = useDispatch()
  const { loading, signed } = useSelector(state => state.auth)

  const INITIAL_VALUES = {
    email: '',
    password: ''
  }
  const [login, setLogin] = useState(INITIAL_VALUES)
  const [errors, setErrors] = useState(INITIAL_VALUES)

  const clearField = () => {
    if (signed) setLogin(INITIAL_VALUES)
  }

  useEffect(() => clearField(), [signed])

  const onChange = e => {
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' })
    setLogin({ ...login, [e.target.name]: e.target.value })
  }

  const errorsInFields = () => {
    const { email, password } = login
    let errorsDetected = { ...errors }

    if (!emailIsValid(email)) {
      errorsDetected = {
        ...errorsDetected,
        email: 'Digite um e-mail válido;'
      }
    }

    if (!password) {
      errorsDetected = {
        ...errorsDetected,
        password: 'Necessário informar uma senha;'
      }
    }

    if (errorsDetected.email || errorsDetected.password) {
      setErrors(errorsDetected)
      return true
    }
    setErrors(INITIAL_VALUES)
    return false
  }

  const handleSubmit = e => {
    e.preventDefault()
    const { email, password } = login
    if (!errorsInFields()) {
      dispatch(signInRequest(email, password))
      clearField()
    }
  }

  return (
    <Wrapper>
      <Head>
        <title>Login</title>
      </Head>
      <ContainerImg />
      <ContainerWrapper>
        <ContainerIntern>
          <Header>
            <h1>Olá, seja bem-vindo!</h1>
            <p>Para acessar a plataforma, faça seu login.</p>
          </Header>
          <Form onSubmit={handleSubmit}>
            <label>E-MAIL</label>
            <Input
              name="email"
              value={login.email}
              error={errors.email}
              type="search"
              onChange={onChange}
            />
            <Error>{errors?.email}</Error>

            <label>SENHA</label>
            <Input
              name="password"
              value={login.password}
              error={errors.password}
              type="password"
              onChange={onChange}
            />
            <Error>{errors?.password}</Error>

            <button type="submit">
              {loading ? 'CARREGANDO...' : 'ENTRAR'}
            </button>
          </Form>
          <Footer>
            <p>Esqueceu seu login ou senha?</p>
            <p>
              Clique <a href="">aqui</a>
            </p>
          </Footer>
        </ContainerIntern>
      </ContainerWrapper>
    </Wrapper>
  )
}

export default Home
