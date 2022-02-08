window.addEventListener("keydown", function (e) {
  let element = document.querySelector(`div[data-key="${e.keyCode}"]`);
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  element.classList.add("playing");
  
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();

});

function removeTransition(e) {
    this.classList.remove("playing");
    
};

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
