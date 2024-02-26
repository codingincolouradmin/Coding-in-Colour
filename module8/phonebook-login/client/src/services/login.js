import axios from 'axios'
const baseURL = '/api/login'

const loginUser = (user) => {
  const request = axios.post(baseURL, user)
  return request.then(response => response.data)
}

export default { loginUser }