
'use strict';

(function(exports) {

// Define an ArithemeticSuperClass constructor
var ArithemeticSuperClass = function(firstNumber, secondNumber) {
    
    if (typeof(firstNumber && secondNumber) !== 'number') {
            
            return 'undefined';
            
    }else{
        this.firstNumber = firstNumber || 22;
        this.secondNumber = secondNumber;
    }

};
 exports.ArithemeticSuperClass = ArithemeticSuperClass;

//generic method to get sum of numbers
ArithemeticSuperClass.prototype.getSum = function(){
    return this.firstNumber + this.secondNumber;
};

//generic method to get difference of numbers
ArithemeticSuperClass.prototype.getDifference= function(){
    return this.firstNumber - this.secondNumber;
};

//generic method to get product of numbers
ArithemeticSuperClass.prototype.getProduct = function(){
    return this.firstNumber * this.secondNumber;
};

//generic method to get quotient of numbers
ArithemeticSuperClass.prototype.getQuotient = function(){
    return this.firstNumber / this.secondNumber;
};

//generic method to get quotient of numbers
ArithemeticSuperClass.prototype.getQuotient = function(){
    return this.firstNumber / this.secondNumber;
};

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

//generic method to get quotient of numbers
ArithemeticSuperClass.prototype.getAverage = function(){
    
    //ENCAPSULATION
    //the variable object x cannot be accessed from the outside
    //but the method getAverage can be accessed and return the value of the function
    var x = 2;
    return (this.firstNumber / this.secondNumber) / x; //ABSTRACTION happens here because the its only the return value that can be accessed from the outside
};


// Define the Arithemetic constructor
function Arithemetic(firstNumber, secondNumber) {
  // Call the parent constructor, making sure (using Function#call)
  // that "this" is set correctly during the call
  ArithemeticSuperClass.call(this, firstNumber,secondNumber);

  // Initialize our Student-specific properties
  //this.subject = subject;
};

// INHERITANCE
// Create a Arithemetic.prototype object that inherits from ArithemeticSuperClass.prototype.
// Note: A common error here is to use "new ArithemeticSuperClass()" to create the
// Arithemetic.prototype. That's incorrect for several reasons, not least 
// that we don't have anything to give ArithemeticSuperClass for the "firstNumber" and "secondNumber" 
// argument. The correct place to call ArithemeticSuperClass is above, where we call 
// it from Arithemetic.
Arithemetic.prototype = Object.create(ArithemeticSuperClass.prototype); // See note below

// Set the "constructor" property to refer to Arithemetic
 Arithemetic.prototype.constructor = Arithemetic;

// Replace the "getProduct" method
Arithemetic.prototype.getProduct = function(){
    
   return "The result is equal to " + this.firstNumber * this.secondNumber;
    
};

var array = [];

// Example usage:
var newObject = new Arithemetic(2,3);
array.push(newObject.getSum());//INHERITANCE
array.push(newObject.getDifference());//INHERITANCE
array.push(newObject.getProduct());//POLYMORPHISM
array.push(newObject.getQuotient());//INHERITANCE
array.push(newObject.getAverage());//ENCAPSULATION & ABSTRACTION
array;

});

