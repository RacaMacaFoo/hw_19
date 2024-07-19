const matrixHolder = document.getElementById("matrixHolder");
const infoHolder = document.getElementById("infoHolder");

const btnSettings = document.getElementById("settings");
const btnMainDiagonal = document.getElementById("mainDiagonal");
const btnSecDiagonal = document.getElementById("secDiagonal");
const btnHalfUpRight = document.getElementById("halfUpRight");
const btnMainHalfUpRight = document.getElementById("mainHalfUpRight");
const btnHalfDownLeft = document.getElementById("halfDownLeft");
const btnMainHalfDownLeft = document.getElementById("mainHalfDownLeft");
const btnHalfUpLeft = document.getElementById("halfUpLeft");
const btnMainHalfUpLeft = document.getElementById("mainHalfUpLeft");
const btnHalfDownRight = document.getElementById("halfDownRight");
const btnRowSum = document.getElementById("rowSum");
const btnColSum = document.getElementById("colSum");

let arrLen, anglEl, rowNum, colNum;
let sumMainDiagonal = 0;
let sumSecDiagonal = 0;
let sumHalfUpRight = 0;
let sumMainHalfUpRight = 0;
let sumHalfDownLeft = 0;
let sumMainHalfDownLeft = 0;
let sumHalfUpLeft = 0;
let sumMainHalfUpLeft = 0;
let sumHalfDownRight = 0;
let sumRowSum = 0;
let sumColSum = 0;

const createParagraph = (conteiner, info) => {
  let paragraph = document.createElement("p");
  paragraph.innerHTML = info;
  conteiner.appendChild(paragraph);
};

const createMatrix = (format, anglNum) => {
  for (let row = 0; row < format; row++) {
    for (let col = 0; col < format; col++) {
      row == 0 && col == format - 1
        ? createParagraph(matrixHolder, anglNum)
        : createParagraph(matrixHolder, Math.round(Math.random() * format));
    }
  }
};

const getSumOfCellsAndColor = (btn, format) => {
  for (let row = 0; row < format; row++) {
    for (let col = 0; col < format; col++) {
      matrixHolder.childNodes[row * format + col].style.background = "white";
      switch (btn) {
        case "mainDiagonal":
          if (row == col) {
            matrixHolder.childNodes[row * format + col].style.background =
              "red";
            sumMainDiagonal += parseInt(
              matrixHolder.childNodes[row * format + col].innerHTML
            );
          }
          break;
        case "secDiagonal":
          if (row == format - col - 1) {
            matrixHolder.childNodes[row * format + col].style.background =
              "red";
            sumSecDiagonal += parseInt(
              matrixHolder.childNodes[row * format + col].innerHTML
            );
          }
          break;
        case "halfUpRight":
          if (row < col) {
            matrixHolder.childNodes[row * format + col].style.background =
              "red";
            sumHalfUpRight += parseInt(
              matrixHolder.childNodes[row * format + col].innerHTML
            );
          }
          break;
        case "mainHalfUpRight":
          if (row <= col) {
            matrixHolder.childNodes[row * format + col].style.background =
              "red";
            sumMainHalfUpRight += parseInt(
              matrixHolder.childNodes[row * format + col].innerHTML
            );
          }
          break;
        case "halfDownLeft":
          if (row > col) {
            matrixHolder.childNodes[row * format + col].style.background =
              "red";
            sumHalfDownLeft += parseInt(
              matrixHolder.childNodes[row * format + col].innerHTML
            );
          }
          break;
        case "mainHalfDownLeft":
          if (row >= col) {
            matrixHolder.childNodes[row * format + col].style.background =
              "red";
            sumMainHalfDownLeft += parseInt(
              matrixHolder.childNodes[row * format + col].innerHTML
            );
          }
          break;
        case "halfUpLeft":
          if (col + row < format - 1) {
            matrixHolder.childNodes[row * format + col].style.background =
              "red";
            sumHalfUpLeft += parseInt(
              matrixHolder.childNodes[row * format + col].innerHTML
            );
          }
          break;
        case "mainHalfUpLeft":
          if (col + row <= format - 1) {
            matrixHolder.childNodes[row * format + col].style.background =
              "red";
            sumMainHalfUpLeft += parseInt(
              matrixHolder.childNodes[row * format + col].innerHTML
            );
          }
          break;
        case "halfDownRight":
          if (col + row > format - 1) {
            matrixHolder.childNodes[row * format + col].style.background =
              "red";
            sumHalfDownRight += parseInt(
              matrixHolder.childNodes[row * format + col].innerHTML
            );
          }
          break;
        case "rowSum":
          if (row == rowNum - 1) {
            matrixHolder.childNodes[row * format + col].style.background =
              "red";
            sumRowSum += parseInt(
              matrixHolder.childNodes[row * format + col].innerHTML
            );
          }
          break;
          case "colSum":
            if (col == colNum - 1) {
              matrixHolder.childNodes[row * format + col].style.background =
                "red";
              sumColSum += parseInt(
                matrixHolder.childNodes[row * format + col].innerHTML
              );
            }
            break;
      }
    }
  }
};

btnSettings.addEventListener("click", () => {
  arrLen = +prompt("Оберіть довжину масива", "4");
  anglEl = +prompt("Оберіть значення кутового елементу", "18");
  rowNum = +prompt(
    `Оберіть рядок для обчислення суми (максимальне значення - ${arrLen})`,
    `${Math.round(arrLen / 2)}`
  );
  colNum = +prompt(
    `Оберіть колонку для обчислення суми (максимальне значення - ${arrLen})`,
    `${Math.round(arrLen / 2)}`
  );
  createMatrix(arrLen, anglEl);
  let grid = `repeat(${arrLen}, 1fr)`;
  matrixHolder.style.gridTemplateColumns = grid;
  btnSettings.disabled = true;
});

btnMainDiagonal.addEventListener("click", () => {
  getSumOfCellsAndColor("mainDiagonal", arrLen);
  createParagraph(infoHolder, `Сума головної діагоналі - ${sumMainDiagonal}`);
  btnMainDiagonal.disabled = true;
});

btnSecDiagonal.addEventListener("click", () => {
  getSumOfCellsAndColor("secDiagonal", arrLen);
  createParagraph(infoHolder, `Сума побочної діагоналі - ${sumSecDiagonal}`);
  btnSecDiagonal.disabled = true;
});

btnHalfUpRight.addEventListener("click", () => {
  getSumOfCellsAndColor("halfUpRight", arrLen);
  createParagraph(
    infoHolder,
    `Сума половини матриці без головної діагоналі зверху зправа - ${sumHalfUpRight}`
  );
  btnHalfUpRight.disabled = true;
});

btnMainHalfUpRight.addEventListener("click", () => {
  getSumOfCellsAndColor("mainHalfUpRight", arrLen);
  createParagraph(
    infoHolder,
    `Сума половини матриці з головною діагоналлю зверху зправа - ${sumMainHalfUpRight}`
  );
  btnMainHalfUpRight.disabled = true;
});

btnHalfDownLeft.addEventListener("click", () => {
  getSumOfCellsAndColor("halfDownLeft", arrLen);
  createParagraph(
    infoHolder,
    `Сума половини матриці без головної діагоналі знизу зліва - ${sumHalfDownLeft}`
  );
  btnHalfDownLeft.disabled = true;
});

btnMainHalfDownLeft.addEventListener("click", () => {
  getSumOfCellsAndColor("mainHalfDownLeft", arrLen);
  createParagraph(
    infoHolder,
    `Сума половини матриці з головною діагоналлю знизу зліва - ${sumMainHalfDownLeft}`
  );
  btnMainHalfDownLeft.disabled = true;
});

btnHalfUpLeft.addEventListener("click", () => {
  getSumOfCellsAndColor("halfUpLeft", arrLen);
  createParagraph(
    infoHolder,
    `Сума половини матриці без побічної діагоналі зверху зліва - ${sumHalfUpLeft}`
  );
  btnHalfUpLeft.disabled = true;
});

btnMainHalfUpLeft.addEventListener("click", () => {
  getSumOfCellsAndColor("mainHalfUpLeft", arrLen);
  createParagraph(
    infoHolder,
    `Сума половини матриці з побочною діагоналлю зверху зліва - ${sumMainHalfUpLeft}`
  );
  btnMainHalfUpLeft.disabled = true;
});

btnHalfDownRight.addEventListener("click", () => {
  getSumOfCellsAndColor("halfDownRight", arrLen);
  createParagraph(
    infoHolder,
    `Сума половини матриці без побічної діагоналі внизу зправа - ${sumHalfDownRight}`
  );
  btnHalfDownRight.disabled = true;
});

btnRowSum.addEventListener("click", () => {
  getSumOfCellsAndColor("rowSum", arrLen);
  createParagraph(
    infoHolder,
    `Сума строки ${rowNum} - ${sumRowSum}`
  );
  btnRowSum.disabled = true;
});

btnColSum.addEventListener("click", () => {
  getSumOfCellsAndColor("colSum", arrLen);
  createParagraph(
    infoHolder,
    `Сума строки ${colNum} - ${sumColSum}`
  );
  btnColSum.disabled = true;
});
