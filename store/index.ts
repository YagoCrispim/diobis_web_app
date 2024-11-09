import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import Reducers from './ducks/rootReducers'
import Thunk from 'redux-thunk'
import { JobsStateDto } from '../common/interfaces/store/_Jobs/interfaces'

let store: any

function initStore(initialStore: JobsStateDto) {
  return createStore(
    Reducers,
    initialStore,
    composeWithDevTools(applyMiddleware(Thunk))
  )
}

export const initializeStore = (preLoaded: any) => {
  let initialStore = store ?? initStore(preLoaded)

  if (preLoaded && store) {
    initialStore = initStore({
      ...store.getState(),
      ...preLoaded,
    })
    store = undefined
  }

  if (typeof window === 'undefined') return initialStore
  if (!store) store = initialStore

  return store
}

export function useStore(initialState: JobsStateDto) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
