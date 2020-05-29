const body = document.getElementById("body");
const button = document.getElementById("btn");
const hexComposers = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
const hex = document.getElementById("hex");

button.addEventListener("click", changeBackgoundHex);

function changeBackgoundHex() {
  let hash = "#";

  for (let i = 0; i < 6; i++) {
    const hexIndex = Math.floor(Math.random() * hexComposers.length);
    hash += hexComposers[hexIndex];
  }

  hex.textContent = hash;
  body.style.backgroundColor = hash;
  console.log(`We've generated ${hash} color`);
}
