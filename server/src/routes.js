const authentication = require('./controllers/authentication')

module.exports = (app) => {
  app.get('/status', (req, res) => {
    res.send({
      message: 'hello world'
    })
  })

  app.post('/register', authentication.register)
}
