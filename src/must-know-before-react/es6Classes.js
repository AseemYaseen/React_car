class Test {
    constructor(num1 = "1", num2 = "2"){ // 1 and 2 just to give it a dafault value

        this.firstNumber = num1;
        this.secondNumber = num2;
    }

    
    print(){
        console.log(this.firstNumber + this.secondNumber)
    }
}


const test = new Test(25 , 25)
const test2 = new Test(75 , 75)

// console.log(test.print())
// console.log(test2.print())

console.log(test.print())
console.log(test2.print())