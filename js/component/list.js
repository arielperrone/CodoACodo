import Button from  "../component/buttons"

export default class List {
    constructor (){
        this.myList = []; // Lista vacia
    }
    render(){
        let myList = "<ul>";
        // escribir el for que recorra los elementos de la lista
        for (let index = 0; index < this.myList.length; index++) {
            const element = array[index];
            
        myList += "<li>" 
        let myButton = new Button("este es mi boton: " )
        myList += myButton.render

        myList += "</li>" 

       }

        myList += "</ul>";
        return myList
    }
}