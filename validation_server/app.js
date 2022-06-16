const express = require('express')
let bodyParser = require("body-parser");
const app = express() 
app.use(bodyParser.json());
// support encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/formular', (req, res) => {
  console.log (req.body)
  res.send('Hallo ' + req.body.telefon)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})