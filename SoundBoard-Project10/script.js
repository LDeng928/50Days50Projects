const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
  //create a HTML button element
  const btn = document.createElement("button");
  //Loop through each button element and add the class btn
  btn.classList.add("btn");

  //write the text into each button
  btn.innerText = sound;

  //Add an event listener when click the button, the according sound with play
  btn.addEventListener("click", () => {
    stopSounds();

    //Sound array has the same items as the id from HTML
    //play is a HTML 5 API which will work on audio elements
    document.getElementById(sound).play();
  });

  //Get the div with an id "buttons" and append the btn variable
  document.getElementById("buttons").appendChild(btn);
});

//function stopSounds() that will stop the sound when clicking on a new button and reset the time to 0
function stopSounds() {
  sounds.forEach((sound) => {
    const oneSound = document.getElementById(sound);

    oneSound.pause();
    oneSound.currentTime = 0;
  });
}
