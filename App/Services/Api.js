import apisauce from 'apisauce'

const create = (baseURL = 'http://127.0.0.1:5000/api/') => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache'
    },
    timeout: 10000
  })

  const getMessages = () => api.get('messages')
  // const getRate = () => api.get('rate_limit')
  // const getUser = (username) => api.get('search/users', {q: username})


  return {
    getMessages
  }
}

export default {
  create
}
