import axios from 'axios'
const baseUrl = 'https://localhost:3001'

const getNotes = () => {
  const request = axios.get(`${baseUrl}/notes`)
  return request.then(response => response.data)
}

const sendNote = (content) => {
  const request = axios.post(`${baseUrl}/notes`, { content })
  return request.then(response => response.data)
}

export default { getNotes, sendNote }