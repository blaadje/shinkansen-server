const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8080

io.on('connection', function(socket) {
  console.log('a user connected')
})

app.use(bodyParser.json())
app.post('/foo', (req, res) => {
  console.log(req.body)
  res.status(200).send('Hello World!')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
