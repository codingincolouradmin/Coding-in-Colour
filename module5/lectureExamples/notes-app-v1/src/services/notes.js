import axios from 'axios'
const baseUrl = 'https://6599d426652b843dea532d31.mockapi.io'

const getNotes = () => {
  const request = axios.get(`${baseUrl}/notes`)
  return request.then(response => response.data)
}

const sendNote = (content) => {
  const request = axios.post(`${baseUrl}/notes`, { content })
  return request.then(response => response.data)
}

export default { getNotes, sendNote }