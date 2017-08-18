import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import API from '../Services/Api'

getInitialData = async() => {
  const api = API.create()
  const messages = await api.getMessages()
  // const messages = require('../Fixtures/messages.json')
}

// messageData = require('../Fixtures/messages.json')
messageData = []

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  sendMessage: ['message']
})

export const MessageTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  messageList: messageData
})

/* ------------- Reducers ------------- */
export const sendMessage = (state, action) => {
  const { message } = action
  var messageObj = Immutable({
    message: message,
    user: true
  })

  return state.merge({
    messageList: state.messageList.concat(messageObj)
  })
}

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SEND_MESSAGE]: sendMessage
})
