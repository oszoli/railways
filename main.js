import {
  createToplist,
  initGrid,
  levelFinished,
  selectLevel,
  tryReadInput,
  updateTile,
} from "./helper.js";

//Divs
const menuDiv = document.querySelector("#menu");
const gameDiv = document.querySelector("#game");
const descDiv = document.querySelector("#desc");
const topListDiv = document.querySelector("#toplist");
const endScreenDiv = document.querySelector("#endScreen");

//Menu
const nameText = document.querySelector("#name");
let difficulty = document.querySelector('input[name="difficulty"]:checked');

//Game
const gName = document.querySelector("#gName");
const gTime = document.querySelector("#gTime");
const gTable = document.querySelector("#gTable");
const state = {
  size: 0,
  elapsedTime: 0,
};
let level;

//Toplist
const tTable = document.querySelector("#tTable");
let toplist = [];

//Endscreen
const score = document.querySelector("#score");
const congrats = document.querySelector("#congrats");

//Timer:
setInterval(() => {
  const num = Math.floor(state.elapsedTime / 60);
  const mod = Math.floor(state.elapsedTime % 60);

  gTime.innerHTML =
    "Time: " + `${num < 10 ? `0${num}` : num} : ${mod < 10 ? `0${mod}` : mod}`;

  state.elapsedTime++;
}, 1000);

//LoadToplist
if (localStorage.getItem("toplist")) {
  toplist = JSON.parse(localStorage.getItem("toplist"));
  createToplist(tTable, toplist);
}

//Functions:
//Show/Close
export const showDescription = function () {
  menuDiv.hidden = true;
  descDiv.hidden = false;
  topListDiv.hidden = true;
};
export const closeDescription = function () {
  descDiv.hidden = true;
  menuDiv.hidden = false;
  topListDiv.hidden = false;
};
export const closeGame = function () {
  gameDiv.hidden = true;
  endScreenDiv.hidden = false;
  congrats.innerHTML = "Congrats: " + toplist[toplist.length - 1].name;
  score.innerHTML =
    "Your time: " +
    toplist[toplist.length - 1].time +
    " Diff: " +
    toplist[toplist.length - 1].diff;
};
export const closeEndSc = function () {
  endScreenDiv.hidden = true;
  menuDiv.hidden = false;
  topListDiv.hidden = false;
  createToplist(tTable, toplist);
};

//Start Game
export const startGame = function () {
  if (!tryReadInput(nameText, difficulty, state)) {
    return;
  }

  difficulty = document.querySelector('input[name="difficulty"]:checked');
  state.size = difficulty.value === "easy" ? 5 : 7;
  gName.innerText = "Name: " + nameText.value;
  state.elapsedTime = 0;
  gTime.innerHTML = "Time: 00 : 00";
  let randomN = Math.floor(Math.random() * 5) + 1;

  level = selectLevel(state.size, randomN);

  initGrid(state.size, gTable, level);

  topListDiv.hidden = true;
  menuDiv.hidden = true;
  gameDiv.hidden = false;
};

export const clickedTile = function (e) {
  if (e.target.matches("td")) {
    const row = e.target.closest("tr").rowIndex;
    const col = e.target.closest("td").cellIndex;

    let tileID = level[row][col];
    let cell = e.target;

    tileID = updateTile(tileID, cell);

    level[row][col] = tileID;

    if (levelFinished(level, state.size)) {
      const newToplistl = {
        name: nameText.value,
        time: state.elapsedTime,
        diff: difficulty.value,
      };

      toplist.push(newToplistl);

      localStorage.removeItem("toplist");
      localStorage.setItem("toplist", JSON.stringify(toplist));

      closeGame();
    }
  }
};
