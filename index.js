/** @format */

const menuEl = document.getElementById("menu-el");
let menuItem = [];
let menuHexa = [];
let clas = "";

fetch("./icones.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    renderMenu(data);
  });

function renderMenu(data) {
  let menu = "";
  for (i = 0; i < data.length; i++) {
    menu += `<li class="icon-el ${data[i].col1}" onclick="icone${i}(); displayCard()">
      ${data[i].col1} <br> ${data[i].col2}
    </li>`;
  }
  menuEl.innerHTML = menu;
}

function displayCard() {
  var divs = document.querySelectorAll("#icone");
  for (var i = 0; i < divs.length; i++) {
    divs[i].classList.add(clas);
  }
  unhide();
}

function unhide() {
  var divs = document.querySelectorAll(".hiden-el");
  for (var i = 0; i < divs.length; i++) {
    divs[i].classList.remove("hiden-el");
  }
}

function hide() {
  var divs = document.querySelector(".overlay-el");
  divs.classList.add("hiden-el");
  var divs2 = document.querySelector("#conjunto-el");
  divs2.classList.add("hiden-el");
  var divs = document.querySelectorAll("#icone");
  for (var i = 0; i < divs.length; i++) {
    divs[i].classList.remove(clas);
  }
}

function icone0() {
  clas = "account-login";
}
function icone1() {
  clas = "account-logout";
}
function icone2() {
  clas = "action-redo";
}
function icone3() {
  clas = "action-undo";
}
function icone4() {
  clas = "align-center";
}
function icone5() {
  clas = "align-left";
}
function icone6() {
  clas = "align-right";
}
function icone7() {
  clas = "aperture";
}
function icone8() {
  clas = "arrow-bottom";
}
function icone9() {
  clas = "arrow-circle-bottom";
}
function icone10() {
  clas = "arrow-circle-left";
}
function icone11() {
  clas = "arrow-circle-right";
}
