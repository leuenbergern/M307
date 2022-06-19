const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

app.get('validation', function (req, res)




  {
    if ("email" in req.body) {
      checkemail(req.body.phone);
    } else {
      console.log("email not provided")
    }


    res.send("");
  })

// Check email is valid
function checkEmail(input) {
  if (input.length == 0) {
    console.log("Email not provided")
    return false;
  }
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.trim())) {
    console.log(input,

      `Is valid!`);
    return true
  } else {
    console.error(input, 'Email is not valid');
    return false

  }

}








app.listen(3000)

/*
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
*/