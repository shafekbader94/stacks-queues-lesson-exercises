const Stack = require("./Stack")

/* Write your class below */
class MinStack{
    constructor(){
        this.stack = []
        this.length = 0 
        this.minValues = new Stack()
    }

    print(){
        console.log(this.stack)
    }

    push(x){
        if(this.isEmpty() || this.minValues.peek() > x)
            this.minValues.push(x)
    
        this.stack[this.length] = x
        this.length++
    }

    isEmpty(){
        return this.length === 0
    }

    peek(){
        return this.isEmpty() ? null : this.stack[this.length - 1]
    }

    pop(){
        if(this.isEmpty())
            return null
        this.length--
         if(this.stack[this.length] === this.minValues.peek())
             this.minValues.pop()
        return delete this.stack[this.length]
    }

    getMin(){
        return this.isEmpty() ? null : this.minValues.peek()
    }


}







//You can paste the test code from the lesson below to test your solution
let ms = new MinStack()
ms.push(17)
ms.push(12)
ms.push(31)
console.log(ms.getMin())    //12
ms.pop()
ms.pop()
ms.pop()
console.log(ms.getMin())    //null
ms.push(19)
ms.push(21)
console.log(ms.getMin())    //19
ms.push(3)
console.log(ms.getMin())    //3
ms.pop()
ms.pop()
console.log(ms.getMin())    //19


/* Do not remove the exports below */
module.exports = MinStack