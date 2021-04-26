const apiKey = process.env.API_KEY
const secret = process.env.SECRET

module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    // use for secrets
    API_KEY: apiKey,
    SECRET: secret
  }
}
