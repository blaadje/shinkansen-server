const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 5000
const server = require('http').Server(app)
const io = require('socket.io')(server)

server.listen(port)

io.on('connection', function(socket) {
  console.log('a user connected')
})

app.use(bodyParser.json())

app.get('/test', ({ body }, res) => {
  res.send('test')
})

app.post('/', ({ body }, res) => {
  Object.keys(body).forEach(key => {
    console.info(`Event {${key}} from github received`)
  })
  io.emit('event', { body })
  res.status(200).send()
})
