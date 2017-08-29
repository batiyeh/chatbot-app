import { createStore, applyMiddleware, compose } from 'redux'
import { autoRehydrate } from 'redux-persist'
import ReduxPersist from '../Config/ReduxPersist'
import RehydrationServices from '../Services/RehydrationServices'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import Config from '../Config/DebugConfig'

export default (rootReducer) => {
  const middleware = []
  const enhancers = []

  /* ------------- Assemble Middleware ------------- */
  middleware.push(thunk)
  middleware.push(logger)

  enhancers.push(applyMiddleware(...middleware))

  /* ------------- AutoRehydrate Enhancer ------------- */

  if (ReduxPersist.active) {
    enhancers.push(autoRehydrate())
  }

  /* ------------- Create Store ------------- */
  const store = createStore(rootReducer, compose(...enhancers))

  if (ReduxPersist.active) {
    RehydrationServices.updateReducers(store)
  }

  return store
}
