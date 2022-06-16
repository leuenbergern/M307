function validate() {
  const name = document.getElementById('name');
  if (name.minlength = "4") {
    alert("Bitte geben sie mindestens 4 Zeichen ein")
  }
}




function validate() {
  const telefon = document.getElementById('telefon');
  if (telefon.value !== "123") {
    alert("Sie haben eine ungültige Telefonnummer eingegeben")
  }
  
}



function validate() {
  const email = document.getElementById('email');
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
  {
    return (true)
  }
    alert("Sie haben eine ungültige Email-Adresse eingegeben")
    return (false)
  }


  function validate() {
    const informationen = document.getElementById('informationen');
    if (informationen.maxlength = "100") {
      alert("Bitte geben sie maximal 100 Zeichen ein")
    }
  }


const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
  //https://www.w3schools.com/jsref/event_preventdefault.asp
  e.preventDefault();
  //First validate form
  validate();
});



