import Button from "./component/buttons.js";
import Video from "./component/video.js";

const myApp = document.getElementById("myApp");
let myButton = new Button("Signing", "btn btn-outline-border");
myApp.innerHTML = myButton.render();
let myVideo = new Video("https://www.w3schools.com/tags/movie.mp4",320,240,"none")
myApp.innerHTML += myVideo.render();

//https://www.w3schools.com/tags/movie.mp4