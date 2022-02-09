window.addEventListener("keydown", playsound);

function removeTransition(e) {
  this.classList.remove("playing");
}

function addSound(key, audio) {
  key.classList.add("playing");

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

//playing with keyborad
function playsound(e) {
  let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  addSound(key, audio);
}

//playing on mouse click
//letter A
document.querySelector(".A").onclick = function playA() {
  let key = document.querySelector(`.A`);
  let audio = document.querySelector(`.audioA`);

  addSound(key, audio);
};

//letter S
document.querySelector(".S").onclick = function playS() {
  let key = document.querySelector(`.S`);
  let audio = document.querySelector(`.audioS`);

  addSound(key, audio);
};

//letter D
document.querySelector(".D").onclick = function playS() {
  let key = document.querySelector(`.D`);
  let audio = document.querySelector(`.audioD`);

  addSound(key, audio);
};

//letter F
document.querySelector(".F").onclick = function playS() {
  let key = document.querySelector(`.F`);
  let audio = document.querySelector(`.audioF`);

  addSound(key, audio);
};

//letter G
document.querySelector(".G").onclick = function playS() {
  let key = document.querySelector(`.G`);
  let audio = document.querySelector(`.audioG`);

  addSound(key, audio);
};

//letter H
document.querySelector(".H").onclick = function playS() {
  let key = document.querySelector(`.H`);
  let audio = document.querySelector(`.audioH`);

  addSound(key, audio);
};

//letter J
document.querySelector(".J").onclick = function playS() {
  let key = document.querySelector(`.J`);
  let audio = document.querySelector(`.audioJ`);

  addSound(key, audio);
};

//letter K
document.querySelector(".K").onclick = function playS() {
  let key = document.querySelector(`.K`);
  let audio = document.querySelector(`.audioK`);

  addSound(key, audio);
};

//letter L
document.querySelector(".L").onclick = function playS() {
  let key = document.querySelector(`.L`);
  let audio = document.querySelector(`.audioL`);

  addSound(key, audio);
};
