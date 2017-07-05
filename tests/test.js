const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();
const myApp = require('../src/main.js');
let Arithemetic = myApp;

describe("Arithemetic", () => {
    
    describe("#constructor", () =>{
        
        let arithemeticObject;
              beforeEach(() => {

                  arithemeticObject = new Arithemetic(1,2);

              });

        it('returns invalid number of arguments', () => {

            () => {

                if(arithemeticObject.firstNumber === null || arithemeticObject.secondNumber === null){

                   should.throw(Error);

                }

            }


        });
        
    
  })
    
    describe("#firstNumber", () =>{
        
          let arithemeticObject;
              beforeEach(() => {

                //create a new Arithemetic object before every test
                  arithemeticObject = new Arithemetic(10,30);

              });

        it('returns the firstNumber', () => {

            arithemeticObject.firstNumber = 10;
            arithemeticObject.firstNumber.should.equal(10);

        });

        it('can be changed', () => {

            arithemeticObject.firstNumber = 30;
            arithemeticObject.firstNumber.should.equal(30);

        });

        it('only accepts numerical value', () => {

            () => {

                arithemeticObject.firstNumber = 'string';
                should.throw(Error);
            }


        });

  })    
    
    describe("#secondNumber", () =>{
    
        let arithemeticObject;
              beforeEach(() => {
                  
                   //create a new Arithemetic object before every test
                  arithemeticObject = new Arithemetic(10,30);

              });

        it('returns the secondNumber', () => {

            arithemeticObject.secondNumber = 30;
            arithemeticObject.secondNumber.should.equal(30);

        });

        it('can be changed', () => {

            arithemeticObject.secondNumber = 20;
            arithemeticObject.secondNumber.should.equal(20);

        });

        it('only accepts numerical value', () => {

            () => {

                arithemeticObject.secondNumber = 'string';
                should.throw(Error);
            }


        });
    
  })  
    
    describe("#handle a valid input", () =>{
      let arithemeticObject;
          beforeEach(() => {
              
              //create a new Arithemetic object before every test
              arithemeticObject = new Arithemetic(4,2);
              
          });
        
        it('should return 6 as Arithemetic for 1 + 2', () => {
        
        arithemeticObject.firstNumber = 4;
        arithemeticObject.secondNumber = 2;
        arithemeticObject.getSum().should.equal(6);
        
        });
            
        it('should return 2 as Arithemetic for 4 - 2', () => {
        
        arithemeticObject.firstNumber = 4;
        arithemeticObject.secondNumber = 2;
        arithemeticObject.getDifference().should.equal(2);
        
        });
            
        it('should return The result is 8 as Arithemetic for 4 * 2', () => {
        
        arithemeticObject.firstNumber = 4;
        arithemeticObject.secondNumber = 2;
        arithemeticObject.getProduct().should.equal('The result is ' +8);
        
        });
            
        it('should return 2 as Arithemetic for 4 / 2', () => {
        
        arithemeticObject.firstNumber = 4;
        arithemeticObject.secondNumber = 2;
        arithemeticObject.getQuotient().should.equal(2);
        
        });
        
        it('should return 3 as Arithemetic for the average 4 * 2', () => {
        
        arithemeticObject.firstNumber = 4;
        arithemeticObject.secondNumber = 2;
        arithemeticObject.getAverage().should.equal(3);
        
        });
    
    
  })
        
})
