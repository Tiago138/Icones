let clas = "account-logout"
function displayCard() {
  var divs = document.querySelectorAll('#icone');
  for (var i = 0; i < divs.length; i++) {
    divs[i].classList.add(clas);
  }
  unhide()
}

function unhide() {
  var divs = document.querySelectorAll('.hiden');
  for (var i = 0; i < divs.length; i++) {
    divs[i].classList.remove('hiden');
  }
}

function hide() {
  var divs = document.querySelector('.overlay');
    divs.classList.add('hiden');
  var divs2 = document.querySelector('#conjunto-el');
    divs2.classList.add('hiden');
  var divs = document.querySelectorAll('#icone');
  for (var i = 0; i < divs.length; i++) {
    divs[i].classList.remove(clas);
  }
}

function icone1() {
  clas = "account-login"
}
function icone2() {
  clas = "account-logout"
}
function icone3() {
  clas = "action-redo"
}
function icone4() {
  clas = "action-undo"
}
function icone5() {
  clas = "align-center"
}
function icone6() {
  clas = "align-left"
}
function icone7() {
  clas = "align-right"
}
function icone8() {
  clas = "aperture"
}
function icone9() {
  clas = "arrow-bottom"
}
function icone10() {
  clas = "arrow-circle-bottom"
}
function icone11() {
  clas = "arrow-circle-left"
}
function icone12() {
  clas = "arrow-circle-right"
}
