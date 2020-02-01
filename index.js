const express = require('express')
const app = express()
const port = 8080

app.post('/foo', (req, res) => {
  console.log(req)
  res.status(200).send('Hello World!')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))