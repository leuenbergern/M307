function validate() {
  const telefon = document.getElementById('telefon');
  const email = document.getElementById('email');
  const informationen = document.getElementById('informationen');
  const name = document.getElementById('name');
  const radio = document.getElementById('radio');

  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  if (!telefon.inputtxt.value.match(phoneno)) {
      alert("Sie haben eine ungültige Telefonnummer eingegeben");
      return false;
  }

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
      alert("Sie haben eine ungültige Email-Adresse eingegeben")
      return (false)
  }

  if (informationen.length > 100) {
    alert("Geben sie maximal 100 Zeichen ein")
  }

  if (name.minlength = 4) {
    alert("Bitte geben sie mindestens 4 Zeichen ein")
  }

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