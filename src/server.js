const express = require('express'),
      path    = require('path'),
      logger  = require('./logger')
const app = express()

const PORT = process.env.PORT || 3000
const PUBLIC_PATH = path.resolve(__dirname, 'public')

app.use('/public', express.static(PUBLIC_PATH))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(PORT, () => {
  logger.log('info', 'listening on port ', PORT)
})
