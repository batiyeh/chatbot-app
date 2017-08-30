import { createReducer, createActions } from 'reduxsauce'
import { REHYDRATE } from 'redux-persist/constants'
import Immutable from 'seamless-immutable'
import API from '../Services/Api'

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

// export const deleteAll = (state, action) => {

// }

export const rehydrateData = (state, action) => {
  const messages = action.payload.messages.messageList

  return state.merge({
    messageList: messages
  })
}

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SEND_MESSAGE]: sendMessage,
  [Types.SEND_BOT_RESPONSE]: sendBotResponse,
  [REHYDRATE]: rehydrateData
})
