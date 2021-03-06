import { createReducer, createActions } from 'reduxsauce'
import { REHYDRATE } from 'redux-persist/constants'
import Immutable from 'seamless-immutable'
import API from '../Services/Api'

messageData = []

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  sendMessage: ['message'],
  sendBotResponse: ['message'],
  toggleBleuMode: ['bleu'],
  deleteAll: null
})

export const MessageTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  messageList: messageData,
  bleuToggle: true
})

/* ------------- Reducers ------------- */
export const sendMessage = (state, action) => {
  const { message } = action
  var messageObj = Immutable({
    message: message,
    user: true,
  })

  return state.merge({
    messageList: state.messageList.concat(messageObj)
  })
}

export const sendBotResponse = (state, action) => {
  const { message } = action
  var messageObj = Immutable({
    message: message,
    user: false,
  })

  return state.merge({
    messageList: state.messageList.concat(messageObj)
  })
}

export const deleteAll = (state, action) => {
  return state.merge({
    messageList: []
  })
}

export const toggleBleuMode = (state, action) => {
  const { bleu } = action
  if (bleu === true){
    return state.merge({
      bleuToggle: false
    })
  }

  else{
    return state.merge({
      bleuToggle: true
    })
  }
}

export const rehydrateData = (state, action) => {
  if (Object.keys(action.payload).length != 0){
    var messages = action.payload.messages.messageList
    
    return state.merge({
      messageList: []
    })
  }

  else{
    return INITIAL_STATE
  }

}

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SEND_MESSAGE]: sendMessage,
  [Types.SEND_BOT_RESPONSE]: sendBotResponse,
  [Types.DELETE_ALL]: deleteAll,
  [Types.TOGGLE_BLEU_MODE]: toggleBleuMode,
  [REHYDRATE]: rehydrateData
})
