import { createStore, applyMiddleware, compose } from 'redux'
import { autoRehydrate } from 'redux-persist'
import ReduxPersist from '../Config/ReduxPersist'
import RehydrationServices from '../Services/RehydrationServices'
import logger from 'redux-logger'
import Config from '../Config/DebugConfig'

// creates the store
export default (rootReducer) => {
  /* ------------- Redux Configuration ------------- */
  const middleware = []
  const enhancers = []

  // Debugger Middleware
  middleware.push(logger)

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware))

  /* ------------- AutoRehydrate Enhancer ------------- */

  if (ReduxPersist.active) {
    enhancers.push(autoRehydrate())
  }

  const store = createStore(rootReducer, compose(...enhancers))

  if (ReduxPersist.active) {
    RehydrationServices.updateReducers(store)
  }

  return store
}
