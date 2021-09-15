/** @format */

const menuEl = document.getElementById("menu-el");
const style = document.getElementsByTagName("style")[0];
const character = String.fromCharCode(92);

let clas = "";
let functions = {};

fetch("./icones.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    renderMenu(data);
    creatfunctions(data);
    RenderIcone(data);
  });

function renderMenu(data) {
  let menu = "";
  for (let i = 0; i < data.length; i++) {
    menu += `<li class="icon-el ${data[i].col1}" onclick="functions.icone${i}(); displayCard()">
      ${data[i].col1} <br> ${data[i].col2}
    </li>`;
  }
  menuEl.innerHTML = menu;
}

function RenderIcone(data) {
  iconeDOM = "";
  for (let i = 0; i < data.length; i++) {
    iconeDOM += `.${data[i].col1}::before {
      content: "${character}${data[i].col2}";
    }`;
  }
  style.innerHTML += iconeDOM;
}

function displayCard() {
  let divs = document.querySelectorAll("#icone");
  for (let i = 0; i < divs.length; i++) {
    divs[i].classList.add(clas);
  }
  unhide();
}

function unhide() {
  let divs = document.querySelectorAll(".hiden-el");
  for (let i = 0; i < divs.length; i++) {
    divs[i].classList.remove("hiden-el");
  }
}

function hide() {
  const overlayEl = document.getElementById("overlay-el");
  overlayEl.classList.add("hiden-el");
  const conjuntoEl = document.getElementById("conjunto-el");
  conjuntoEl.classList.add("hiden-el");
  const iconeEl = document.querySelectorAll("#icone");
  for (let i = 0; i < iconeEl.length; i++) {
    iconeEl[i].classList.remove(clas);
  }
}

function creatfunctions(data) {
  for (let i = 0; i < data.length; i++) {
    let var1 = "icone" + i;
    functions[var1] = function () {
      clas = data[i].col1;
    };
  }
}
