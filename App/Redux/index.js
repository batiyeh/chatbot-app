import { combineReducers } from 'redux'
import configureStore from './CreateStore'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    nav: require('./NavigationRedux').reducer,
    messages: require('./MessageRedux').reducer
  })

  return configureStore(rootReducer)
}
