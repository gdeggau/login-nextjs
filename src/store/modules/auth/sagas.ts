import { takeLatest, call, put, all } from 'redux-saga/effects'
import { signInSuccess, signFailure, signOut } from './actions'

import mockApi from '../../../services/mockApi'

import { toast } from 'react-toastify'
import { AnyAction } from 'redux'

export function* signIn({ payload }: AnyAction) {
  try {
    const { email, password } = payload

    const response = yield call(mockApi.post, 'login', {
      email,
      password
    })

    const { token, user } = response.data

    toast.success('Login realizado com sucesso')
    yield put(signInSuccess(token, user))
  } catch (err) {
    toast.error('Erro ao realizar o login!')
    yield put(signFailure())
  }
}

export function* clearStorage({ payload }: AnyAction) {
  if (!payload) return

  yield put(signOut())
}

export default all([
  takeLatest('persist/REHYDRATE', clearStorage),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn)
])
