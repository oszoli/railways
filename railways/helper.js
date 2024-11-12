const levele1 = [
  ["p", "ldm", "p", "p", "o"],
  ["p", "p", "p", "vb", "o"],
  ["vb", "p", "lum", "p", "p"],
  ["p", "p", "p", "o", "p"],
  ["p", "p", "rum", "p", "p"],
];
const levele2 = [
  ["o", "p", "hb", "p", "p"],
  ["p", "lum", "p", "p", "lum"],
  ["vb", "o", "rum", "p", "p"],
  ["p", "p", "p", "o", "p"],
  ["p", "p", "p", "p", "p"],
];
const levele3 = [
  ["p", "p", "hb", "p", "p"],
  ["p", "p", "p", "p", "vb"],
  ["p", "lum", "vb", "p", "p"],
  ["p", "o", "p", "p", "p"],
  ["p", "hb", "p", "p", "lum"],
];
const levele4 = [
  ["p", "p", "p", "hb", "p"],
  ["p", "p", "p", "p", "p"],
  ["vb", "p", "ldm", "p", "ldm"],
  ["p", "p", "p", "p", "p"],
  ["p", "p", "o", "rum", "p"],
];
const levele5 = [
  ["p", "p", "hb", "p", "p"],
  ["p", "rdm", "p", "p", "p"],
  ["vb", "p", "p", "rum", "p"],
  ["p", "p", "vb", "o", "p"],
  ["p", "lum", "p", "p", "p"],
];

const levelh1 = [
  ["p", "ldm", "o", "o", "p", "hb", "p"],
  ["vb", "p", "p", "p", "p", "p", "p"],
  ["p", "p", "vb", "p", "p", "p", "p"],
  ["p", "p", "p", "rum", "p", "p", "p"],
  ["rum", "p", "ldm", "p", "hb", "p", "o"],
  ["p", "p", "p", "p", "p", "p", "p"],
  ["p", "p", "p", "hb", "p", "p", "p"],
];
const levelh2 = [
  ["p", "p", "o", "p", "p", "p", "p"],
  ["vb", "p", "hb", "p", "p", "lum", "p"],
  ["p", "p", "hb", "p", "p", "p", "vb"],
  ["rdm", "p", "p", "p", "p", "p", "p"],
  ["p", "o", "p", "ldm", "p", "p", "p"],
  ["p", "rdm", "p", "p", "p", "p", "p"],
  ["p", "p", "o", "p", "p", "p", "p"],
];
const levelh3 = [
  ["p", "p", "hb", "p", "p", "p", "p"],
  ["p", "p", "p", "p", "p", "p", "vb"],
  ["o", "p", "rum", "p", "p", "p", "p"],
  ["p", "p", "p", "p", "p", "p", "p"],
  ["p", "o", "rum", "p", "hb", "p", "p"],
  ["vb", "p", "p", "p", "p", "ldm", "p"],
  ["p", "p", "o", "rum", "p", "p", "p"],
];
const levelh4 = [
  ["p", "p", "p", "p", "p", "p", "p"],
  ["p", "p", "p", "vb", "p", "lum", "p"],
  ["p", "p", "rum", "p", "p", "p", "p"],
  ["p", "hb", "p", "o", "p", "hb", "p"],
  ["p", "p", "lum", "p", "ldm", "p", "p"],
  ["vb", "p", "p", "p", "p", "rum", "p"],
  ["p", "p", "p", "p", "p", "p", "p"],
];
const levelh5 = [
  ["p", "p", "p", "p", "p", "p", "p"],
  ["p", "p", "p", "p", "p", "rdm", "p"],
  ["p", "hb", "hb", "p", "ldm", "p", "p"],
  ["p", "p", "p", "p", "p", "p", "p"],
  ["p", "p", "rdm", "p", "o", "p", "p"],
  ["p", "lum", "p", "vb", "p", "p", "p"],
  ["p", "p", "p", "p", "p", "p", "p"],
];

export const tryReadInput = function (nameText) {
  if (nameText.value === "") {
    return false;
  }

  return true;
};

export const initGrid = function (size, table, level) {
  table.innerHTML = "";
  for (let i = 0; i < size; i++) {
    const row = table.insertRow();
    for (let j = 0; j < size; j++) {
      const newCell = row.insertCell();
      let tile = level[i][j];
      updateBg(tile, newCell);
    }
  }
};

export const updateTile = function (tile, cell) {
  // o- oazis, p- plain,
  // vb- vertical bridge, hb - horizontal bridge
  // vbr- vertical bridge rail, hbr - horizontal bridge rail
  // vr - vertical rail, hr - horizontal rail,
  // ldr - left-down rail, rdr- right down rail, lur- left-up rail, rur- right-up rail
  // ldm - left-down mountain, rdm - right down mountain, lum - left-up mountain, rum - right-up mountain
  // ldmr - left-down mountain rail, rdmr - right-down mountain rail, lumr - left-up mountain rail, rumr- right-up mountain rail

  switch (tile) {
    //oasis
    case "o":
      tile = tile;
      break;

    //bridge
    case "vb":
      tile = "vbr";

      break;
    case "vbr":
      tile = "vb";
      break;

    case "hb":
      tile = "hbr";
      break;
    case "hbr":
      tile = "hb";
      break;

    //mountains
    case "ldm":
      tile = "ldmr";
      break;
    case "ldmr":
      tile = "ldm";
      break;

    case "rdm":
      tile = "rdmr";
      break;
    case "rdmr":
      tile = "rdm";
      break;

    case "lum":
      tile = "lumr";
      break;
    case "lumr":
      tile = "lum";
      break;

    case "rum":
      tile = "rumr";
      break;
    case "rumr":
      tile = "rum";
      break;

    //plain
    case "p":
      tile = "vr";
      break;
    case "vr":
      tile = "hr";
      break;
    case "hr":
      tile = "ldr";
      break;

    case "ldr":
      tile = "rdr";
      break;
    case "rdr":
      tile = "rur";
      break;
    case "rur":
      tile = "lur";
      break;
    case "lur":
      tile = "p";
      break;
    default:
      return tile;
  }
  updateBg(tile, cell);
  return tile;
};

export const updateBg = function (tile, cell) {
  switch (tile) {
    //oasis
    case "o":
      cell.style.backgroundImage = "url('./tiles/o.png')";
      break;

    //bridge
    case "vb":
      cell.style.backgroundImage = "url('./tiles/vb.png')";

      break;
    case "vbr":
      cell.style.backgroundImage = "url('./tiles/vbr.png')";
      break;

    case "hb":
      cell.style.backgroundImage = "url('./tiles/hb.png')";
      break;
    case "hbr":
      cell.style.backgroundImage = "url('./tiles/hbr.png')";
      break;

    //mountains
    case "ldm":
      cell.style.backgroundImage = "url('./tiles/ldm.png')";
      break;
    case "ldmr":
      cell.style.backgroundImage = "url('./tiles/ldmr.png')";
      break;

    case "rdm":
      cell.style.backgroundImage = "url('./tiles/rdm.png')";
      break;
    case "rdmr":
      cell.style.backgroundImage = "url('./tiles/rdmr.png')";
      break;

    case "lum":
      cell.style.backgroundImage = "url('./tiles/lum.png')";
      break;
    case "lumr":
      cell.style.backgroundImage = "url('./tiles/lumr.png')";
      break;

    case "rum":
      cell.style.backgroundImage = "url('./tiles/rum.png')";
      break;
    case "rumr":
      cell.style.backgroundImage = "url('./tiles/rumr.png')";
      break;

    //plain
    case "p":
      cell.style.backgroundImage = "url('./tiles/p.png')";
      break;
    case "vr":
      cell.style.backgroundImage = "url('./tiles/vr.png')";
      break;
    case "hr":
      cell.style.backgroundImage = "url('./tiles/hr.png')";
      break;

    case "ldr":
      cell.style.backgroundImage = "url('./tiles/ldr.png')";
      break;
    case "rdr":
      cell.style.backgroundImage = "url('./tiles/rdr.png')";
      break;
    case "rur":
      cell.style.backgroundImage = "url('./tiles/rur.png')";
      break;
    case "lur":
      cell.style.backgroundImage = "url('./tiles/lur.png')";
      break;
    default:
  }
};

export const selectLevel = function (size, randomN) {
  if (size === 5) {
    switch (randomN) {
      case 1:
        return levele1.map((row) => row.slice());
        break;
      case 2:
        return levele2.map((row) => row.slice());
        break;
      case 3:
        return levele3.map((row) => row.slice());
        break;
      case 4:
        return levele4.map((row) => row.slice());
        break;
      case 5:
        return levele5.map((row) => row.slice());
        break;
      default:
        break;
    }
  } else {
    switch (randomN) {
      case 1:
        return levelh1.map((row) => row.slice());
        break;
      case 2:
        return levelh2.map((row) => row.slice());
        break;
      case 3:
        return levelh3.map((row) => row.slice());
        break;
      case 4:
        return levelh4.map((row) => row.slice());
        break;
      case 5:
        return levelh5.map((row) => row.slice());
        break;
      default:
        break;
    }
  }
};

export const levelFinished = function (level, size) {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (!goodTile(level, level[i][j], i, j)) {
        return false;
      }
    }
  }
  return true;
};

function goodTile(level, tile, i, j) {
  switch (tile) {
    //oasis
    case "o":
      return true;
      break;

    //bridge
    case "vb":
      return false;
      break;

    case "vbr":
      return goodUp(level, i, j) && goodDown(level, i, j);
      break;

    case "hb":
      return false;
      break;

    case "hbr":
      return goodLeft(level, i, j) && goodRight(level, i, j);
      break;

    //mountains
    case "ldm":
      return false;
      break;

    case "ldmr":
      return goodLeft(level, i, j) && goodDown(level, i, j);
      break;

    case "rdm":
      return false;
      break;

    case "rdmr":
      return goodRight(level, i, j) && goodDown(level, i, j);
      break;

    case "lum":
      return false;
      break;

    case "lumr":
      return goodLeft(level, i, j) && goodUp(level, i, j);
      break;

    case "rum":
      return false;
      break;

    case "rumr":
      return goodRight(level, i, j) && goodUp(level, i, j);
      break;

    //plain
    case "p":
      return false;
      break;

    case "vr":
      return goodUp(level, i, j) && goodDown(level, i, j);
      break;

    case "hr":
      return goodLeft(level, i, j) && goodRight(level, i, j);
      break;

    case "ldr":
      return goodLeft(level, i, j) && goodDown(level, i, j);
      break;

    case "rdr":
      return goodRight(level, i, j) && goodDown(level, i, j);
      break;

    case "rur":
      return goodRight(level, i, j) && goodUp(level, i, j);
      break;

    case "lur":
      return goodLeft(level, i, j) && goodUp(level, i, j);
      break;

    default:
      break;
  }
}

function goodUp(level, i, j) {
  if (i - 1 >= 0) {
    switch (level[i - 1][j]) {
      case "hr":
      case "hbr":
      case "lur":
      case "lumr":
      case "rur":
      case "rumr":
        return false;
        break;
      default:
        break;
    }
  }
  return true;
}

function goodDown(level, i, j) {
  if (i + 1 <= level.length) {
    switch (level[i + 1][j]) {
      case "hr":
      case "hmr":
      case "ldr":
      case "ldmr":
      case "rdr":
      case "rdmr":
        return false;
        break;
      default:
        break;
    }
  }
  return true;
}

function goodLeft(level, i, j) {
  if (j - 1 >= 0) {
    switch (level[i][j - 1]) {
      case "vr":
      case "vbr":
      case "ldr":
      case "ldmr":
      case "lur":
      case "lumr":
        return false;
        break;
      default:
        break;
    }
  }
  return true;
}

function goodRight(level, i, j) {
  if (j + 1 <= level.length) {
    switch (level[i][j + 1]) {
      case "vr":
      case "vbr":
      case "rdr":
      case "rdmr":
      case "rur":
      case "rumr":
        return false;
        break;
      default:
        break;
    }
  }
  return true;
}

export const createToplist = function (tTable, toplist) {
  tTable.innerHTML = "";
  toplist.sort((a, b) => a.time - b.time);

  const orderedList = toplist.map(
    (cell) =>
      " Name: " +
      cell.name +
      " Time: " +
      cell.time +
      " Difficulty: " +
      cell.diff
  );

  for (let i = 0; i < orderedList.length; i++) {
    const row = tTable.insertRow();
    const newCell = row.insertCell();

    newCell.innerText = orderedList[i];
  }
};
