function playAudio(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  // if the key is not listed, don't run the function
  if (!audio) return;

  //replay the sound track on multiple key presses
  audio.currentTime = 0;

  // play the audio
  audio.play();
  key.classList.add("playing");
}

window.addEventListener("keydown", playAudio);
function removeTransition(e) {
  console.log(e.propertyName);

  // if the transform property is not added then no need to remove it
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});
