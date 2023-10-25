"use strict";

const obj = {
  name: "Rocky Randhawa",
  age: 30,
  intro: function () {
    console.log(this);
    console.log(`Hi ${this.name} this side`);
    const test = () => {
      console.log("Test in arrow function");
      console.log(this);
    };
    test();
  },
  //   test: () => {
  //     console.log(this);
  //   }
};

obj.intro();
// obj.test();

function test() {
  let i = 10;
  const res = i + 9;
  console.log(this);
}

// test();
