import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import API from '../Services/Api'

getBotResponse = () => {
  // const api = API.create()
  // const response = await api.getBotResponse()
  //
  // return response
  return "This is a bot's response"
}

// messageData = require('../Fixtures/messages.json')
messageData = []

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  sendMessage: ['message'],
  botResponse: ['message']
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

export const botResponse = (state, action) => {
  const { message } = action
  var responseObj = Immutable({
    message: getBotResponse(message),
    user: false
  })

  return state.merge({
    messageList: state.messageList.concat(responseObj)
  })
}

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SEND_MESSAGE]: sendMessage,
  [Types.BOT_RESPONSE]: botResponse
})
