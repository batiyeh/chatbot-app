import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import API from '../Services/Api'

// getResponse = async(message) => {
//   const api = API.create()
//   const response = await api.getBotResponse(message)
//   const botMessage = response.data.title

//   return botMessage
// }

messageData = []

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  sendMessage: ['message'],
  sendBotResponse: ['message']
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

export const sendBotResponse = (state, action) => {
  const { message } = action
  var messageObj = Immutable({
    message: message,
    user: false
  })

  return state.merge({
    messageList: state.messageList.concat(messageObj)
  })
}

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SEND_MESSAGE]: sendMessage,
  [Types.SEND_BOT_RESPONSE]: sendBotResponse
})
