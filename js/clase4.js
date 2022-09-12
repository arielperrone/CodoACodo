
// VARIABLES -----------------------------------------
// traer los datos del usuario desde el DOM
const input_usuario = document.querySelector('#input-usuario-html')
let cantidad = parseInt(input_usuario.value)
let botonUsuario = document.querySelector('#boton-enviar')
botonUsuario.addEventListener('click',starter);

// ubicacion para presentar los datos que trajimos
let p_mostrar = document.querySelector('#respuesta_al_usuario')
let div_mostrar = document.querySelector('#reproductor_videos')

// DATOS DE VIDEOS ----------------------------------
// videos traidos de youtube
const videos = ['<div class="col-6"><iframe width="560" height="315" src="https://www.youtube.com/embed/0YiNACjWW-4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>',
'<div class="col-6"><div><iframe width="560" height="315" src="https://www.youtube.com/embed/IjMESxJdWkg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><span>hola</span></div>',
'<div class="col-6"><div><iframe width="560" height="315" src="https://www.youtube.com/embed/yRJxz0NicgI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>',
'<div class="col-6>"<iframe width="560" height="315" src="https://www.youtube.com/embed/mtcPfhRatL4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>',
'<div class="col-6><iframe width="560" height="315" src="https://www.youtube.com/embed/sgEJ4sOwboM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>',
'<div class="col-6"<iframe width="560" height="315" src="https://www.youtube.com/embed/qkHNgSbvVBA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>',
'<div class="col-6"<iframe width="560" height="315" src="https://www.youtube.com/embed/36YnV9STBqc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>',
'<div class="col-6"<iframe width="560" height="315" src="https://www.youtube.com/embed/Y5ydVy4Hj0o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>',
'<div class="col-6"<iframe width="560" height="315" src="https://www.youtube.com/embed/KjkCwqoFyDw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>',
'<div class="col-6"<iframe width="560" height="315" src="https://www.youtube.com/embed/xbXZFoAqO2E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'];  

// FUNCIONES -----------------------------------------

// Para presentar la lista de videos
function presentarLista(a,b=5){
    for(i=0; i < b;i++){
       p_mostrar.innerHTML += a[i];
    }
}
function starter(){
   // presentarVideo(videos);
    presentarLista(videos,cantidad)
}

