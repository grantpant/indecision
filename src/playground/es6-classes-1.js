// These are implementations are two different versions of the same thing.
// Uncomment the ES6 version and comment out the vanilla version to run it.
// They both use the same names, so one version must be commented out.

// Vanilla JS version
function Person(name = 'Anonymous', age = 0) {
  this.name = name;
  this.age = age;
}

Person.prototype.getGreeting = function() {
  return `Hi, My name is ${this.name}.`;
};

Person.prototype.getDescription = function() {
  return `${this.name} is ${this.age} years old.`;
};

function Student(name, age, major = 'undecided') {
  Person.call(this, name, age);
  this.major = major;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Person;

Student.prototype.getDescription = function() {
  let description = Person.prototype.getDescription.call(this);

  return this.major != 'undecided'
    ? description += ` And he's a ${this.major} major.`
    : description;
};

/*
// ES6 Classes version
class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi, My name is ${this.name}.`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`
  }
}

class Student extends Person{
  constructor(name, age, major = 'undecided') {
    super(name, age);
    this.major = major;
  }
  // Returns true if major is NOT undecided, otherwise, false.
  hasMajor() {
    return this.major != 'undecided';
  }
  // Overriding behavior of parent getDescription method.
  getDescription() {
    // Calls the getDescription method on the parent class.
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` And he's a ${this.major} major.`;
    }

    return description;
  }
}
*/

const grant = new Student('Grant', 37, 'Psychology');
console.log(grant);
console.log(grant.getDescription());

const someDude = new Student();
console.log(someDude);
console.log(someDude.getDescription());

const button = document.getElementById('clickMe');
button.addEventListener('click', () => {
  alert('You did it!');
  console.log();

});