//Get the button
var mybutton = document.getElementById("TopBtn");

// When the user scrolls down 10px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


function maxLengthCheck(object) {
  if (object.value.length > object.maxLength) {
    object.value = object.value.slice(0, object.maxLength);
  }
}

function onlyNumber(event) {
  event = event || window.event;
  var keyID = (event.which) ? event.which : event.keyCode;
  if ((keyID >= 48 && keyID <= 57) || (keyID >= 96 && keyID <= 105) || keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39)
    return;
  else
    return false;
}

function removeChar(event) {
  event = event || window.event;
  var keyID = (event.which) ? event.which : event.keyCode;
  if (keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39)
    return;
  else
    event.target.value = event.target.value.replace(/[^0-9]/g, "");
}

function Form_Reset(id) {
  document.getElementById(id).reset();
}
