window.addEventListener("keydown", playsound);

function playsound(e) {
  let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  key.classList.add("playing");

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
}

document.querySelector(".key650").onclick = function () {
  myFunction();
};

function myFunction() {
    let key = document.querySelector(`.key650`);
    let audio = document.querySelector(`.key651`);

    key.classList.add("playing");

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
}

function removeTransition(e) {
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));


