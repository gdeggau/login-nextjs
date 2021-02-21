/* eslint-disable standard/no-callback-literal */
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { render, fireEvent } from '@testing-library/react'

import { signInRequest } from '../../store/modules/auth/actions'
import IndexLogin from '../../pages/index'
import themeMock from '../../styles/theme'

const renderComponent = () =>
  render(
    <ThemeProvider theme={themeMock}>
      <IndexLogin />
    </ThemeProvider>
  )

jest.mock('react-redux')

describe('Login page', () => {
  it('should be able to do login', () => {
    useSelector.mockImplementation(cb =>
      cb({
        auth: {
          loading: false,
          signed: false
        }
      })
    )

    const { getByTestId } = renderComponent()
    const dispatch = jest.fn()

    useDispatch.mockReturnValue(dispatch)

    fireEvent.change(getByTestId('email'), {
      target: { value: 'admin@email.com' }
    })
    fireEvent.change(getByTestId('password'), {
      target: { value: '123' }
    })
    fireEvent.submit(getByTestId('login-form'))

    expect(dispatch).toHaveBeenCalledWith(
      signInRequest('admin@email.com', '123')
    )
  })

  it('should NOT be able to do login due invalid e-mail', () => {
    useSelector.mockImplementation(cb =>
      cb({
        auth: {
          loading: false,
          signed: false
        }
      })
    )

    const { getByTestId } = renderComponent()
    const dispatch = jest.fn()

    useDispatch.mockReturnValue(dispatch)

    fireEvent.change(getByTestId('password'), {
      target: { value: '123' }
    })
    fireEvent.submit(getByTestId('login-form'))

    expect(dispatch).not.toHaveBeenCalledWith(
      signInRequest('admin@email.com', '123')
    )
  })

  it('should NOT be able to do login due invalid password', () => {
    useSelector.mockImplementation(cb =>
      cb({
        auth: {
          loading: false,
          signed: false
        }
      })
    )

    const { getByTestId } = renderComponent()
    const dispatch = jest.fn()

    useDispatch.mockReturnValue(dispatch)

    fireEvent.change(getByTestId('email'), {
      target: { value: 'admin@email.com' }
    })
    fireEvent.submit(getByTestId('login-form'))

    expect(dispatch).not.toHaveBeenCalledWith(
      signInRequest('admin@email.com', '123')
    )
  })
})

export {}
