import {
  closeDescription,
  showDescription,
  startGame,
  clickedTile,
  closeEndSc,
} from "./main.js";

function init() {
  document.querySelector("#start").addEventListener("click", startGame);
  document
    .querySelector("#description")
    .addEventListener("click", showDescription);
  document
    .querySelector("#closeDesc")
    .addEventListener("click", closeDescription);
  document.querySelector("table").addEventListener("click", clickedTile);
  document.querySelector("#closeEndSc").addEventListener("click", closeEndSc);
}

init();
