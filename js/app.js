import Button from "./component/buttons.js"; 
import Video from "./component/video.js";
import List from "./component/list.js"

const myApp = document.getElementById("myApp");
let myButton = new Button("Signing", "btn btn-outline-border");
myApp.innerHTML = myButton.render();

let myVideo = new Video("https://www.w3schools.com/html/movie.mp4",320,240,"css_class");
myApp.innerHTML += myVideo.render();

let myLista = new List([1,2,3,4,5]);
myApp.innerHTML += myLista.render();

let inputText = document.getElementById("input");
let testoDelInpu = inputText.value;
let myInput = new Input(testoDelInpu, "pone un esmail")
myApp.innerHTML += myInput.render();

//https://www.w3schools.com/tags/movie.mp4