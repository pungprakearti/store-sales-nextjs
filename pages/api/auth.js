import getConfig from 'next/config'

const { serverRuntimeConfig } = getConfig()
const { API_KEY, SECRET } = serverRuntimeConfig

const auth = (req, res) => {
  res.status(200).json({ message: 'auth'})
}

export default auth
