import { all, spawn, call } from 'redux-saga/effects'
import { watchProductsSaga } from './products'

export function* rootSaga () {
  const sagas = [watchProductsSaga]

  yield all(sagas.map(saga =>
    spawn(function* () {
      while (true) {
        try {
          yield call(saga)
          break
        } catch (e) {
          console.log(e)
        }
      }
    }))
  )
}