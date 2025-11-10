function hello() {
  let x = 10;
  let y = 20;
  let z = 30;

  console.log(x, y, z);
  //   console.log("Hello, Buidl!");
}

hello();
hello();
hello();

let sayHi = function () {
  console.log("Hi");
};

let secHi = sayHi;

sayHi();
secHi();

function addNum(a, b) {
  return a + b;
}

const save = addNum(87, " Pc's");
console.log(save);

let addNumArr = (a, b) => {
  return a + b;
};

console.log(addNumArr(15, 7));
