var cors = require('cors')
var fs = require('fs');
var csvWriter = require('csv-write-stream')

const bodyParser = require('body-parser')
const express = require('express')
const app = express()


app.use(cors())

app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

app.post('/formular', function (req, res)
  // Status email
  {
    if ("email" in req.body) {
      if (!checkEmail(req.body.email)) {
        res.status(400).send("Email ist nicht gültig");
        return;
      }
    } else {
      res.sendStatus(400);
      res.send("Email wurde nicht bereitgestellt");
      console.log("Email wurde nicht bereitgestellt");
      return;
    }

    // Status name
    if ("name" in req.body) {
      if (!checkName(req.body.name)) {
        res.status(400).send("Name ist nicht gültig");
        return;
      }
    } else {
      res.sendStatus(400);
      res.send("Name wurde nicht bereitgestellt");
      console.log("Name wurde nicht bereitgestellt");
      return;

    }
    // Status phone

    if ("phone" in req.body) {
      if (!checkPhone(req.body.phone)) {
        res.status(400).send("Phone ist nicht gültig");
        return;
      }
    } else {
      res.sendStatus(400);
      res.send("Phone wurde nicht bereitgestellt");
      console.log("Phone wurde nicht bereitgestellt");
      return;

    }


    // Status radio
    {
      if ("art" in req.body) {
        if (!checkArt(req.body.art)) {
          res.status(400).send("Art ist nicht gültig");
          return;
        }
      } else {
        res.status(400).send("Art wurde nicht bereitgestellt");
        console.log("Art wurde nicht bereitgestellt");
        return;

      }
    }


    // Status Informationen

    if ("informationen" in req.body) {
      if (!checkInformationen(req.body.informationen)) {
        res.status(400).send("Die Information ist nicht gültig");
        return;
      }
    } else {
      res.status(400).send("Informationen wurde nicht bereitgestellt");
      console.log(" Informationen ist nicht gültig");
      return;

    }

    var writer = csvWriter({
      sendHeaders: false
    })
    writer.pipe(fs.createWriteStream('out.csv', {
      flags: 'a'
    }))
    writer.write({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      radio: req.body.art,
      informationen: req.body.informationen
    })
    writer.end()

    res.send('Formular abgesendet!')
  })



















function checkArt(input) {
  if (input != `hochzeit` && input != 'porträt' && input != 'sonstiges') {
    console.log("Bitt wählen sie eine Option an.");
    return false;


  } else {
    console.log(input, `Art ist korrekt`);
    return true
  }
}



function checkInformationen(input) {
  if (input.value > 150) {
    alert("Es sind maximal 150 Zeichen erlaubt.");
    return false;
  }
  console.log(input,

    `Die Information ist korrekt`);
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
    console.log("Phone wurde nicht eingegeben")
    return false;
  }
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  if (re.test(input.trim())) {
    console.log(input,
      `Funktioniert`);
    return true
  } else {
    console.error(input, "Die Eingabe funktioniert nicht");
    return false;
  }
}

app.listen(3000)