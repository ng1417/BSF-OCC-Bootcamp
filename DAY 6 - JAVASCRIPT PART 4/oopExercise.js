//exercise

class Shape {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    
    calculateArea(){
        throw new Error("Method not implemented.");
    }
}

class Rectangle extends Shape{
    displayFormula(){
        console.log(`The formula is: ${this.width} times ${this.height}`)

      }
      calculateArea(){
        const area = this.width * this.height;
        console.log(area);
      }
    }

const shape1 = new Rectangle(4,5);

//console.log(shape1)
shape1.calculateArea();
shape1.displayFormula();

