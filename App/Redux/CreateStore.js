import { createStore, applyMiddleware, compose } from 'redux'
import Config from '../Config/DebugConfig'

// creates the store
export default (rootReducer) => {
  /* ------------- Redux Configuration ------------- */
  const store = createStore(rootReducer)

  return store
}
