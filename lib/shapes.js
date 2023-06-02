
class Shape { 
    constructor(color,text,){
        this.color = color;
        this.text = text; 
    }
}
let color = new shape('black')

class Circle extends Shape{
    constructor(color,text){
       super(color, text)

    }
    render(){
        return `<circle cx="150" cy="100" r="80" fill=${this.color} />`
         
    };
}

class Triangle extends Shape{
    constructor(color,text){
        super(color,text)
    }
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill=${this.color} />`
    }
}

class Rectangle extends Shape{
    constructor(color,text){
        super(color,text)
    }
    render(){
        return `<rect x="10" y="10" width="30" height="30" stroke="black" fill=${this.color} stroke-width="5"/>`
    }
}



