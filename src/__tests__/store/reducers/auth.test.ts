import reducer, { INITIAL_STATE } from '../../../store/modules/auth/reducer'
import * as Auth from '../../../store/modules/auth/actions'

describe('Auth reducer', () => {
  it('@auth/SIGN_IN_REQUEST', () => {
    const state = reducer(
      INITIAL_STATE,
      Auth.signInRequest('admin@email.com', '123')
    )
    expect(state).toStrictEqual({
      loading: true,
      token: null,
      signed: false,
      user: {}
    })
  })

  it('@auth/SIGN_IN_SUCCESS', () => {
    const state = reducer(
      INITIAL_STATE,
      Auth.signInSuccess('FAKEJWTTOKEN', {
        id: 'NaN',
        email: 'admin@email.com',
        password: '123'
      })
    )
    expect(state).toStrictEqual({
      token: 'FAKEJWTTOKEN',
      signed: true,
      loading: false,
      user: {
        id: 'NaN',
        email: 'admin@email.com',
        password: '123'
      }
    })
  })

  it('@auth/SIGN_FAILURE', () => {
    const state = reducer(INITIAL_STATE, Auth.signFailure())
    expect(state).toStrictEqual(INITIAL_STATE)
  })

  it('@auth/SIGN_OUT', () => {
    const state = reducer(INITIAL_STATE, Auth.signOut())
    expect(state).toStrictEqual(INITIAL_STATE)
  })
})
