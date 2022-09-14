export default class List {
    constructor (array)
    {
        this.myList = array;
    }
    render()
    {
        let myHTML = "<ul></ul>"
        let ul = document.createElement("ul");
        let li = document.createElement("li");
        for (let index = 0; index < this.myList.length; index++)
        {            
            li = this.myList[index];
            myHTML += myHTML.innerHTML(li)
        }
        
        return myHTML
    }
}