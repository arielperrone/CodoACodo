export default class Input {
    constructor(texto,ph,)
    {
        this.texto = texto;
        this.ph = ph;
        this.css_tipo = css_tipo;
    }

    verificacion()
    {
        let verificador_1 = this.texto.find("@"); // verifica si el texto el arroba
        let verificador_2 = this.texto.find("."); // verifica si el texto tiene un puntos
        if(verificador_1 == true && verificador_2 == true)
        {
            this.css_tipo = "style='background-color: yellow;'"
            return css_tipo
        }
        else 
        {
            this.css_tipo = "style='background-color: red;'";
            return this.css_tipo
        }
    }


    render()
    {
        let myHTML = `<input type="text" id="input" class=${css_tipo} placeholder=${this.ph}><input type="check">`
        return myHTML
    }
} // Me pregunto ¿hasta donde esto es realmente una plantilla para generar inputs?