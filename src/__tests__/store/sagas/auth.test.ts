import { runSaga } from 'redux-saga'
import MockAdapter from 'axios-mock-adapter'
import mockApi from '../../../services/mockApi'

import {
  signInSuccess,
  signInRequest,
  signFailure
} from '../../../store/modules/auth/actions'
import { signIn } from '../../../store/modules/auth/sagas'

const apiMocked = new MockAdapter(mockApi)

describe('Auth saga', () => {
  it('should be able to do login', async () => {
    const dispatch = jest.fn()
    apiMocked.onPost('login').reply(200, {
      user: {
        id: 'NaN',
        email: 'admin@email.com',
        password: 'password'
      },
      token: 'JWTTOKENGENERATED'
    })
    await runSaga(
      { dispatch },
      signIn,
      signInRequest('admin@email.com', '123')
    ).toPromise()

    expect(dispatch).toHaveBeenLastCalledWith(
      signInSuccess('JWTTOKENGENERATED', {
        id: 'NaN',
        email: 'admin@email.com',
        password: 'password'
      })
    )
  })

  it('should fail when api return error', async () => {
    const dispatch = jest.fn()
    apiMocked.onPost('login').reply(500)
    await runSaga(
      { dispatch },
      signIn,
      signInRequest('admin@email.com', '123')
    ).toPromise()

    expect(dispatch).toHaveBeenLastCalledWith(signFailure())
  })
})
