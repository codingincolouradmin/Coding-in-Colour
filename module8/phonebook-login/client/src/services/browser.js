/**
 * Local storage helper functions
 */

const storeUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user))
}

const getUser = () => {
  return JSON.parse(localStorage.getItem("user"))
}

const removeUser = () => {
  localStorage.removeItem("user")
}

export default { storeUser, getUser, removeUser }