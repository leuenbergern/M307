function validate() {
  const name = document.getElementById('name');
  const telefon = document.getElementById('telefon');
  const email = document.getElementById('email');
  const radio = document.getElementById('radio');
  const informationen = document.getElementById('informationen');
  console.log(informationen.value.length, name.value.length);

  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{2})[-. ]?([0-9]{2})$/; 

  if (name.value.length < 3) { 
   	 alert("Bitte geben Sie Ihren Vor- und Nachnamen ein.");
   	 return false;
  }
  
  if (!telefon.value.match(phoneno)) { 
      alert("Bitte geben Sie eine gültige Telefonnummer ein.");
      return false;
  }
  
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
      alert("Bitte geben Sie eine gültige E-Mail ein.")
      return false;
  }

  if (document.getElementById('radio').checked) {   
    var selectedValue = document.getElementById('radio').value;  
    alert("Wählen Sie bitte die Art der Fotos aus.");
    return false;
  }

  if (informationen.value.length > 150) { 
    alert("Es sind maximal 150 Zeichen erlaubt.");
   	return false;
  }


}  

const form = document.getElementById('form');

form.addEventListener('submit', function (e) {
  //https://www.w3schools.com/jsref/event_preventdefault.asp
  e.preventDefault();
  // //First validate form
  validate();
});  

