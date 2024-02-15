import axios from 'axios'
const baseURL = '/api/phonebook'

const getEntries = () => {
  const request = axios.get(baseURL)
  return request.then(response => response.data)
}

const createEntry = (newEntry) => {
  const request = axios.post(baseURL, newEntry)
  return request.then(response => response.data)
}

const updateEntry = (id) => {
  const request = axios.put(`${baseURL}/${id}`)
  return request.then(response => response.data)
}

const deleteEntry = (id) => {
  const request = axios.delete(`${baseURL}/${id}`)
  return request.then(response => response.data)
}

export default { getEntries, createEntry, updateEntry, deleteEntry }