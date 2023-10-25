class Person {
  constructor(fullName, age, sex, address, hobbies) {
    this.fullName = fullName;
    this.age = age;
    this.sex = sex;
    this.address = address;
    this.hobbies = hobbies;
  }

  intro() {
    console.log(`Hello I am ${this.fullName}`);
  }
}

const bijay = new Person(
  "Bijay Singh",
  32.5,
  "M",
  { flatNo: 123, apt: "XYZ Apt" },
  ["Reading", "Teaching", "Coding"]
);
const preeti = new Person("Preeti Singh", 30, "F");

// What does the 'new' keyword do
// 1. It created an empty object {}
// 2. constructor function will be called and the 'this' keyword
// will point to the empty object created in first step
// 3. Newly created object will be linked to the Prototype
// 4. it will return the crreated object with the values

// console.log(bijay);

// const preeti = {
//   name: "Preeti Singh",
//   age: 30,
//   sex: "F",
// };

bijay.intro();
preeti.intro();

// Inheritance

class Proffesionals extends Person {
  constructor(fullName, age, sex, address, hobbies, job) {
    super(fullName, age, sex, address, hobbies);
    this.job = job;
  }
}

const itProfessional = new Proffesionals(
  "Kshitiz Verma",
  24,
  "M",
  { line1: "1st Street" },
  ["Coding"],
  "Programmer"
);

console.log(itProfessional);
itProfessional.intro();
