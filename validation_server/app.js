const bodyParser = require('body-parser')
const express = require('express')
const app = express()
var cors = require('cors')

app.use(cors())

app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

app.post('/formular', function (req, res)
  // Status email
  {
    if ("email" in req.body) {
      if (!checkEmail(req.body.email)) {
        res.status(400).send("Geben sie eine korrekte Email ein");
        return;
      }
    } else {
      res.sendStatus(400);
      res.send("Es wurde keine Email eingegeben");
      console.log("Es wurde keine Email eingegeben");
      return;
    }

    // Status name
    if ("name" in req.body) {
      if (!checkName(req.body.name)) {
        res.status(400).send("name not valid");
        return;
      }
    } else {
      res.sendStatus(400);
      res.send("name not provided");
      console.log("name not provided");
      return;

    }
    // Status phone

    if ("phone" in req.body) {
      if (!checkPhone(req.body.phone)) {
        res.status(400).send("phone not valid");
        return;
      }
    } else {
      res.sendStatus(400);
      res.send("phone not provided");
      console.log("phone not provided");
      return;

    }


    // Status radio
    {
      if ("art" in req.body) {
        if (!checkArt(req.body.art)) {
          res.status(400).send("art not valid");
          return;
        }
      } else {
        res.status(400).send("art not provided");
        console.log("art not provided");
        return;

      }
    }


    // Status Informationen

    if ("informationen" in req.body) {
      if (!checkInformationen(req.body.informationen)) {
        res.status(400).send("informationen not valid");
        return;
      }
    } else {
      res.status(400).send("information not provided");
      console.log("information not provided");
      return;

    }
    res.send('Formular abgesendet!')
  })







  var fs = require('fs');
  var csvWriter = require('csv-write-stream')
  
  var writer = csvWriter()
  writer.pipe(fs.createWriteStream('out.csv'))
  writer.write({hello: "world", foo: "bar", baz: "taco"})
  writer.end()









function checkArt(input) {
  if (input!= `hochzeit` && input!='porträt' && input!='sonstiges') {
    console.log("Bitt wählen sie Hochzeit an.");
    return false;


  } else {
    console.log(input, `Art ist korrekt`);
    return true}
}



function checkInformationen(input) {
  if (input.value > 150) {
    alert("Es sind maximal 150 Zeichen erlaubt.");
    return false;
  }
  console.log(input,

    `Die Informationen ist korrekt`);
  return true
}


function checkName(input) {
  if (input.length < 3) {
    console.log("Bitte geben Sie Ihren Vor- und Nachnamen ein.");
    return false;


  } else {
    console.log(input, `Der Name ist korrekt`);
    return true

  }


}


function checkEmail(input) {
  if (input.length == 0) {
    console.log("Es wurde keine Email eingegeben")
    return false;
  }
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.trim())) {
    console.log(input,

      `Die Email eingabe ist korrekt`);
    return true
  } else {
    console.error(input, 'Geben sie eine richtige Email Adresse ein');
    return false

  }


}

function checkPhone(input) {
  if (input.length == 0) {
    console.log("Phone nicht eingegeben")
    return false;
  }
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  if (re.test(input.trim())) {
    console.log(input,
      `Funktioniert`);
    return true
  } else {
    console.error(input, "Funktioniert nicht");
    return false;
  }
}

app.listen(3000)