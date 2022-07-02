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

  if (getArt() != `hochzeit` && getArt() != 'porträt' && getArt() != 'sonstiges') {
    alert("Wählen Sie bitte die Art der Fotos aus.");
    return false;
  }

  if (informationen.value.length > 150) {
    alert("Es sind maximal 150 Zeichen erlaubt.");
    return false;
  }

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  var urlencoded = new URLSearchParams();
  urlencoded.append("email", email.value);
  urlencoded.append("name", name.value);
  urlencoded.append("phone", telefon.value);
  urlencoded.append("art", getArt());
  urlencoded.append("informationen", informationen.value);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };

  fetch("http://127.0.0.1:3000/formular", requestOptions)
    .then(response => response.text())
    .then(result => alert(result))
    .catch(error => alert(error));
}

const form = document.getElementById('form');

form.addEventListener('submit', function (e) {
  //https://www.w3schools.com/jsref/event_preventdefault.asp
  e.preventDefault();
  // //First validate form
  validate();
});


function getArt() {
  var ele = document.getElementsByName('art');

  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked)
      return ele[i].value;
  }
}