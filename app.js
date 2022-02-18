window.addEventListener("keydown", playsound);

function removeTransition() {
  this.classList.remove("playing");
}

//playsound function
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
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  addSound(key, audio);
}

//playing on mouse click
//letter A
document.querySelector(".A").onclick = function playA() {
  const key = document.querySelector(".A");
  const audio = document.querySelector(".audioA");

  addSound(key, audio);
};

//letter S
document.querySelector(".S").onclick = function playS() {
  const key = document.querySelector(".S");
  const audio = document.querySelector(".audioS");
  addSound(key, audio);
  
};

//letter D
document.querySelector(".D").onclick = function playS() {
  const key = document.querySelector(".D");
  const audio = document.querySelector(".audioD");

  addSound(key, audio);
};

//letter F
document.querySelector(".F").onclick = function playS() {
  const key = document.querySelector(".F");
  const audio = document.querySelector(".audioF");

  addSound(key, audio);
};

//letter G
document.querySelector(".G").onclick = function playS() {
  const key = document.querySelector(".G");
  const audio = document.querySelector(".audioG");

  addSound(key, audio);
};

//letter H
document.querySelector(".H").onclick = function playS() {
  const key = document.querySelector(".H");
  const audio = document.querySelector(".audioH");

  addSound(key, audio);
};

//letter J
document.querySelector(".J").onclick = function playS() {
  const key = document.querySelector(".J");
  const audio = document.querySelector(".audioJ");

  addSound(key, audio);
};

//letter K
document.querySelector(".K").onclick = function playS() {
  const key = document.querySelector(".K");
  const audio = document.querySelector(".audioK");

  addSound(key, audio);
};

//letter L
document.querySelector(".L").onclick = function playS() {
  const key = document.querySelector(".L");
  const audio = document.querySelector(".audioL");

  addSound(key, audio);
};
