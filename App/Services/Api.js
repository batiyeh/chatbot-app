import apisauce from 'apisauce'

const create = (baseURL = 'https://facebook.github.io/react-native/movies.json') => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json'
    },
    timeout: 5000
  })

  const getBotResponse = (message) => api.get('')
  //      .then((response) => response.data)
  //      .then((responseJson) => {
  //        botResponse = responseJson.movies[0].title
  //        return botResponse
  //      })
  //      .catch((err) => {
  //        console.log(err)
  //      })

  //   return botResponse
  // }

  return {
    getBotResponse
  }
}

export default {
  create
}
