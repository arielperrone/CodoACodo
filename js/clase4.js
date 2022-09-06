/*let myDoc = document;
let myH2 = document.getElementById('h2_id');
console.log(myDoc);
console.log(myH2);

*/
// VARIABLES -----------------------------------------
// traer los datos del usuario desde el DOM
const input_usuario = document.querySelector('#input-usuario-html')
let botonUsuario = document.querySelector('#boton-enviar')
botonUsuario.addEventListener('click',starter);

// ubicacion para presentar los datos que trajimos
let ul_mostrar = document.querySelector('#respuesta_al_usuario')
let div_mostrar = document.querySelector('#reproductor_videos')

// DATOS DE VIDEOS ----------------------------------
// videos traidos de youtube
const videos = ['<iframe width="560" height="315" src="https://www.youtube.com/embed/0YiNACjWW-4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' , '<iframe width="560" height="315" src="https://www.youtube.com/embed/IjMESxJdWkg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' , '<iframe width="560" height="315" src="https://www.youtube.com/embed/yRJxz0NicgI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' , '<iframe width="560" height="315" src="https://www.youtube.com/embed/mtcPfhRatL4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' , '<iframe width="560" height="315" src="https://www.youtube.com/embed/sgEJ4sOwboM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' , '<iframe width="560" height="315" src="https://www.youtube.com/embed/qkHNgSbvVBA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>','<iframe width="560" height="315" src="https://www.youtube.com/embed/36YnV9STBqc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>','<iframe width="560" height="315" src="https://www.youtube.com/embed/Y5ydVy4Hj0o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>','<iframe width="560" height="315" src="https://www.youtube.com/embed/KjkCwqoFyDw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>','<iframe width="560" height="315" src="https://www.youtube.com/embed/ZBYY4R1_CtM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>','<iframe width="560" height="315" src="https://www.youtube.com/embed/xbXZFoAqO2E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'];  

// FUNCIONES -----------------------------------------
// Para presetar el video solo
function presentarVideo(a){
    let primerVideo = a[0]
    div_mostrar.innerHTML = primerVideo;
}

// Para presentar la lista de videos
function presentarLista(a,b){
    let cantidad = parseInt(b)
    for(i=0; i <= cantidad;i++){
        let li = document.createElement('li');
        li.textContent = a[i];
        ul_mostrar.appendChild(li)
    }
}

function starter(){
    presentarVideo(videos);
    presentarLista(videos,input_usuario)
}

