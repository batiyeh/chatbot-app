import apisauce from 'apisauce'

const create = (baseURL = 'http://10.0.2.2:5000/chatbot/api/') => {
  const api = apisauce.create({
    baseURL
  })

  const getBotResponse = (message) => api.post('bot', {message: message})

  return {
    getBotResponse
  }
}

export default {
  create
}
