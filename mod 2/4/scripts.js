class Figure {
    #x = 0;
    #y = 0;
    constructor(x, y){
        this.#x = x;
        this.#y = y;

    }

    square(){
        return undefined;
    }
}


class Circle extends Figure {
    #radius = 0;
    constructor(x, y, r){
        super(x, y);
        this.#radius = r;
    }

    square(){
        return Math.PI * this.#radius * this.#radius;
    }
}


class Rectangle extends Figure{
    #width = 0;
    #height = 0;
    constructor(x, y, w, h){
        super(x, y);
        this.#height = h;
        this.#width = w;
    }

    square(){
        return this.#width * this.#height;
    }

    get width(){ return this.#width;}
    get height(){return this.#height;}
}


let figure = new Figure(100, 100);
let circle = new Circle(100, 200, 50);
let rect = new Rectangle(100, 300, 100, 50);
console.log(figure)
console.log("Площадь фигуры: " + figure.square());
console.log(circle);
console.log("Площадь круга: " + circle.square());
console.log(rect);
console.log("Площадь четырёхугольника: " + rect.square());

/*
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "green";
ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
*/