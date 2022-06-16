function validate() {
  const name = document.getElementById('name');
  if (name.minlength = "4") {
    alert("Bitte geben sie mindestens 4 Zeichen ein")
  }
}


/*
function validate() {
  const telefon = document.getElementById('telefon');
  if (telefon.value !== "123") {
    alert("Sie haben eine ungültige Telefonnummer eingegeben")
  }
  
}
*/

function phonenumber(inputtxt) {
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (inputtxt.value.match(phoneno)) {
      return true;
    } else {
      alert("Sie haben eine ungültige Telefonnummer eingegeben");
      return false;
    }
  }


  function validate() {
    const telefon = document.getElementById('telefon');
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (telefon.inputtxt.value.match(phoneno)) {
        return true;
      } else {
        alert("Sie haben eine ungültige Telefonnummer eingegeben");
        return false;
      }
  }

  function validate() {
    const email = document.getElementById('email');
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
      return (true)
    }
    alert("Sie haben eine ungültige Email-Adresse eingegeben")
    return (false)
  }


  function validate() {
    const informationen = document.getElementById('informationen');
    if (informationen.maxlength = "100") {
      alert("Geben sie maximal 100 Zeichen ein")
    }
  }


  function validate() {
    const radio = document.getElementById('radio');
    if(document.getElementById('radio').checked) {   
      var selectedValue = document.getElementById('radio').value;  
      alert("Wählen sie eine Option aus");    
  }  
    }  


  const form = document.getElementById('form');

  form.addEventListener('submit', function (e) {
    //https://www.w3schools.com/jsref/event_preventdefault.asp
    e.preventDefault();
    //First validate form
    validate();
  });