'use strict';

// Define a class called ArithemeticSuperClass
class ArithemeticSuperClass {
    
    constructor(firstNumber, secondNumber) { //constructor class containing two arguments
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
    }
    
   get firstNumber() {
       
        return this._firstNumber;
    }
       
   set firstNumber(value) {
       
        if (value === null) {

                throw new Error('Null Value');

        }       
        else if (typeof value !== 'number') {

                throw new Error('"firstNumber" must be a number');

        }

        this._firstNumber = value;
   }  
    
    
    get secondNumber() {
       
       return  this._secondNumber;
    }
    
   set secondNumber(value) {
       
              
        if (value === null) {

                throw new newError('null value');

        } 
        else if (typeof value !== 'number') {

                throw new Error('"secondNumber" must be a number');

        }

        this._secondNumber = value;
   }
    

    //generic method to get sum of numbers
    getSum(){
        
        return this.firstNumber + this.secondNumber;
    }
    
    //generic method to get diference of numbers
    getDifference(){
        
        return this.firstNumber - this.secondNumber;
    }
    
    
    //generic method to get product of numbers
    getProduct(){
        
        return this.firstNumber * this.secondNumber;
    }
    
    //generic method to get quotient of numbers
    getQuotient(){
        
        return this.firstNumber / this.secondNumber ;
    }
    
     get numberList() {
        
        //COMPOSITION
        //COMPOSITION is how we express all our “has a” relationships
        //newNumber is the object and contains properties firstNumber,secondNumber and thirdNumber
        //numberObject is a property of newNumber and has its own properties like x and y
        //Also OBJECTS can have properties and methods.
        var newNumber = {
        
            firstNumber: 1,
            secondNumber: 2,
            thirdNumber: 3,
            numberObject: {
            
                x: 1,
                y: 2
            }
            
        }
         
     }
    
}



// INHERITANCE
// Define class Arithemetic which extends ArithemeticSuperClass
// Arithemetic inherits from the ArithemeticSuperClass class
class Arithemetic extends ArithemeticSuperClass {
    
    //POLYMORPHISM  
    // This is an example of polymorphism. The Arithemetic Class's
    // "product()" and "quotient()" method overrides that of the ArithemeticSuperClass Class
    //generic method to get product of numbers
    //// Replace the "product" method
    getProduct(){
        
         return 'The result is ' + (this.firstNumber * this.secondNumber);
    }
    
    
    //generic method to get average of a first and second number
    getAverage(){
          
        //ENCAPSULATION
        //the variable object sound cannot be accessed from the outside
        //but the method getAverage can be accessed and return the value of the object variable sound
        var x = 2   
    
        return (this.firstNumber + this.secondNumber) / x ;//ABSTRACTION happens here because the its only the return value that can be accessed from the outside
    }
    
}

module.exports = Arithemetic;
var answer;

var obj = new Arithemetic(2,3);
console.log(obj.getSum()); //INHERITANCE
console.log(obj.getProduct()); // POLYMORPHISM
console.log(obj.getAverage()); // ENCAPSULATION

if (obj.getSum()){
    
    answer = obj.getSum();
}

else if (obj.getDifference()){
    
    answer = obj.getDifference
}

else if (obj.getProduct()){
    
    answer = obj.getProduct();
}

else if (obj.getQuotient()){
    
    answer = obj.getQuotient();
}

else if (obj.getAverage()){
    
    answer = obj.getAverage();
}

answer;



