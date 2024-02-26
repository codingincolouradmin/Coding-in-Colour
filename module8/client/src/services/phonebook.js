import axios from 'axios'
const baseURL = '/api/phonebook'

const getContacts = () => {
  const request = axios.get(baseURL)
  return request.then(response => response.data)
}

const createContact = (newEntry) => {
  const request = axios.post(baseURL, newEntry)
  return request.then(response => response.data)
}

const updateContact = (id) => {
  const request = axios.put(`${baseURL}/${id}`)
  return request.then(response => response.data)
}

const deleteContact = (id) => {
  const request = axios.delete(`${baseURL}/${id}`)
  return request.then(response => response.data)
}

export default { getContacts, createContact, updateContact, deleteContact }