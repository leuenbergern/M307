const bodyParser = require('body-parser')
const express = require('express')
const app = express()

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
     {
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
    } {
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
    }

      // Status radio
     {
      if ("radio" in req.body) {
        if (!checkRadio(req.body.radio)) {
          res.status(400).send("radio not valid");
          return;
        }
      } else {
        res.sendStatus(400);
        res.send("radio not provided");
        console.log("radio not provided");
        return;

      }}


      // Status Informationen
     {
      if ("informationen" in req.body) {
        if (!checkInformationen(req.body.informationen)) {
          res.status(400).send("informationen not valid");
          return;
        }
      } else {
        res.sendStatus(400);
        res.send("informationen not provided");
        console.log("informationen not provided");
        return;

      }






    function checkName(input) {
      if (name.value.length < 3) { 
        alert("Bitte geben Sie Ihren Vor- und Nachnamen ein.");
        return false;

          `Die Name eingabe ist korrekt`);
        return true
      } else {
        console.error(input, 'Geben sie eine richtige Name ein');
        return false

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
      }
      else {
      console.error(input, "Funktioniert nicht");
      return false;
      }
    }
  }





  function checkRadio(input) {
    if (document.getElementById('radio').checked) {   
      var selectedValue = document.getElementById('radio').value;  
      alert("Wählen Sie bitte die Art der Fotos aus.");
      return false;
    }
    console.log(input,

      `Die Radio ist korrekt`);
    return true
  }



  function checkInformationen(input) {
    if (informationen.value.length > 150) { 
      alert("Es sind maximal 150 Zeichen erlaubt.");
       return false;
    }
    console.log(input,

      `Die Informationen ist korrekt`);
    return true
  }
  

  
app.listen(3000)