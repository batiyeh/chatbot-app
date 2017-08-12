import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import API from '../Services/Api'

getInitialData = async() => {
  const api = API.create()
  const messages = await api.getMessages()
  // const messages = require('../Fixtures/messages.json')
}

// messageData = require('../Fixtures/messages.json')
messageData = {}

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  userMessage: ['message']
})

export const MessageTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  messageList: messageData
})

/* ------------- Reducers ------------- */

export const userMessage = (state, { message }) => {
  return state.merge({ messageList: message })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.USER_MESSAGE]: userMessage
})
