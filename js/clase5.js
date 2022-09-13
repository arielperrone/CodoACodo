// Tarea para el jueves
// Crear un objeto con modulos
class button 
{ 
    constructor(nombre,frase)
    {
        this.nombre = nombre,
        this.frase = frase
    }
    mostrar ()
        {
            var myHTML = `<button onclick="miBoton.mostrarAlert()" > ${this.nombre}</button>`;
            return myHTML
        }
    mostrarAlert()
        {
            return alert(this.frase)
        }
        
}
https://github.com/arielperrone/CodoACodo.git  
const myApp = document.getElementById("myApp");
const miBoton = new button("apretame","me apretaste");
myApp.innerHTML = miBoton.mostrar()

class array {
    constructor(elemento){
        this.elemento = elemento
    }
}
