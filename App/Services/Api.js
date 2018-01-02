import apisauce from 'apisauce'

const create = (baseURL = 'http://10.0.2.2:8000') => {
  const api = apisauce.create({
    baseURL
  })

  const getBotResponse = (message) => api.post('/api/botResponse/', {message: message})

  return {
    getBotResponse
  }
}

export default {
  create
}
