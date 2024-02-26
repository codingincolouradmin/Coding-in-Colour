/**
 * get URL according to .env
 */
const getURL = () => {
  switch (process.env.NODE_ENV) {
    case 'basic':
      return process.env.BASIC_URI
    case 'user':
      return process.env.USER_URI
    case 'adv':
      return process.env.ADV_URI
    default:
      break
  }
}

module.exports = { getURL }