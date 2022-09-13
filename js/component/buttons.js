export default class Button {
    // Params:
    // Texto: Cadena texto en formato string
    // Color: Cadena texto  de colo en formato hexadecima
    constructor(texto, css_class){
        this.text = texto;
        this.css_class = css_class;
    }

    render(){
        let myHTML = `<button class=${this.css_class}>${this.text}</button>`;
        return myHTML;
    }
}