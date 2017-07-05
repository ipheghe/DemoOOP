const assert = require('chai').assert;
const expect = require('chai').expect;
const myApp = require('../src/main.js');
const Arg1 = 1;
const Arg2 = 2;
const Arg3 = 3;

describe("ArithemeticSuperClass", function() {
//    
//    describe('Constructor', () => {
//
//        it('should be created with two properties: firstNumber and lastNumber', () => {
//            let sut = new myApp();
//            expect(sut).to.have.property(firstNumber);
//            expect(sut).to.have.property(2lastNumber
//        });
//
//        it('should have default greeting', () => {
//            let sut = new myApp();
//            expect(sut.greeting).to.equal(defaultValue);
//        });
//
//        it('should have command line args set when supplied', () => {
//            let sut = new myApp([Arg1, Arg2]);
//            expect(sut.commandLineArgs).to.have.lengthOf(2);
//            expect(sut.commandLineArgs[0]).to.equal(Arg1);
//            expect(sut.commandLineArgs[1]).to.equal(Arg2);
//        });
//    });
    
//      describe("constructor", function() {
//    it("should have a default name", function() {
//      var obj= new ArithemeticSuperClass();
//      expect(new ArithemeticSuperClass().firstNumber).to.equal([1]);
//      
//    });
//
//    it("should set cow's name if provided", function() {
//      var obj = ArithemeticSuperClass(1,1);
//      expect(obj.firstNumber, obj.secondNumber).to.equal([2,1,2]);
//    });
//  });
//
//        
////    describe("handle a valid input", function() {
////        it("should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 77, 79, 83, 89, 91, 97] as prime numbers from 0 to 100", function() {
////            assert.deepEqual(myApp.getPrimes(100), [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 77, 79, 83, 89, 91, 97]);
////        });    
////        
////        it("should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67] as prime numbers from 0 to 67", function() {
////            assert.deepEqual(myApp.getPrimes(67), [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67]);
////        }); 
////        
////        it("should return [2,3,5,7,11] as prime numbers from 0 to 11", function() {
////            assert.deepEqual(myApp.getPrimes(11), [2,3,5,7,11]);
////        });    
////        
////        it("should return [2,3,5,7] as prime numbers from 0 to 9", function() {
////            assert.deepEqual(myApp.getPrimes(9), [2,3,5,7]);
////        });  
////        
////        it("should return [2] as prime numbers from 0 to 2", function() {
////            assert.deepEqual(myApp.getPrimes(2), [2]);
////        }); 
////                
////        it("should return [2,3] as prime numbers from 0 to 3", function() {
////            assert.deepEqual(myApp.getPrimes(3), [2,3]);
////        }); 
////        
////        it("should return [2,3,5,7] as prime numbers from 0 to 10", function() {
////            assert.deepEqual(myApp.getPrimes(10), [2,3,5,7]);
////        }); 
////        
////        it("should return 'No Prime number available' as prime numbers from 0 to 1", function() {
////            assert.deepEqual(myApp.getPrimes(1), 'No Prime number available');
////        });  
////        
////        it("should return [2] as getPrimes for 2.4", function() {
////            assert.deepEqual(myApp.getPrimes(2.4), [2]);
////        });   
////                
////        it("should return [2,3,5]  as getPrimes for 4.5", function() {
////            assert.deepEqual(myApp.getPrimes(4.5), [2,3,5]);
////        });   
////        
////    })
//    
//    describe("handle an invalid input", function() {
////        it("should return undefined as getPrimes for 'demo'", function() {
////            assert.equal(myApp.ArithemeticSuperClass('demo','demo'), 'undefined');
////        });  
//        
//            it("should set cow's name if provided", function() {
//      var obj = ArithemeticSuperClass("demo","demo");
//      expect(obj.firstNumber, obj.secondNumber).to.equal('undefined');
//    });
//        
//         
//            
//    })
//    
//    
//})
//    
//    