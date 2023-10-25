const Person = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  //   this.greet = function () {
  //     console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
  //   };
};

Person.prototype.isIndian = true;
Person.prototype.greet = function () {
  console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
};

const sourabh = new Person("Sourabh", "Banik");
let abhi = new Person("Rana Abhishek", "Singh");

console.log(sourabh);
console.log(abhi.isIndian);

sourabh.greet();
abhi.greet();

const nameArr = ["Bijay", "Prakash", "Singh"];

Array.prototype.print = function () {
  for (let i = 0; i < this.length; i++) {
    console.log(`${this[i]}`);
  }
};

// nameArr.print();

const PersonProto = {
  calcAge() {
    const age = 2023 - this.birthYear;
    return age;
  },
};

const deepak = Object.create(PersonProto);
deepak.birthYear = 1992;
deepak.lastName = "Jha";
console.log(deepak);
console.log(deepak.calcAge());

abhi = Object.create(PersonProto);
abhi.birthYear = 1990;
console.log(abhi.calcAge());
