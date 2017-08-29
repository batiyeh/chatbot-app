import apisauce from 'apisauce'

const create = (baseURL = 'http://localhost:5000/chatbot-api/response') => {
  const api = apisauce.create({
    baseURL
  })

  const getBotResponse = (message) => api.get('')

  return {
    getBotResponse
  }
}

export default {
  create
}
