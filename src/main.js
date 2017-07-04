// Define a class called animal
class Animal {
    constructor(name) {
        this.name = name;
    }

    get animal_name(){
        
        return this.name;
    }
    
    get animal_sound(){
        
        //ENCAPSULATON happens here..
        //the variable object sound cannot be accessed from the outside
        //but the method animal_sound can be accessed and return the value of the object variable sound
        var sound = "hiss";
        return this.sound;
    }

    move() {
        return "walks";
    }
}


// INHERITANCE
// Define class Mammal which extends Animal
// Mammal inherits from the Animal class
class Mammal extends Animal {
    territory() {
        return "Terrestrial";
    }
    
}


// POLYMORPHISM
// Define a Reptile class which extends Animal
class Reptile extends Animal {

    // This is an example of polymorphism. The Reptile Class's
    // "move()" method overrides that of the Animal Class
    move() {
        return "crawls";
    }
}

var bingo = new Mammal("Dog");
bingo.territory();
bingo.name; // Inheritance

var shirley = new Reptile("Snake")
shirley.move() // Polymorphism
shirley.animal_name;// Encapsulation


//COMPOSITION
//COMPOSITION is how we express all our “has a” relationships
//dog is the object and contains properties name,breed and more
//collar is a property of dog and collar has its own properties like color and shape
//Also OBJECTS can have properties and methods.
const  dog = {
  name : 'Max', // This is a PROPERTY
  breed : 'Collie',
  yearOfBirth: 2014,
  collar : {
    color : 'blue',
    shape : 'pendant'
  },
  tail : {
    length : {
      value : 20,
      unit : 'cm'
    },
    status : 'wagging'
  },
 calculateAge: function() {  //This is a METHOD
    return 2016 - this.yearOfBirth;
    }
};

dog;// Composition
dog.calculateAge();// This calls the method of the object


