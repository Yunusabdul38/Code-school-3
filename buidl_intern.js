function hello() {
  let x = 10;
  let y = 20;
  let z = 30;

  console.log(x, y, z, "4");
  //   console.log("Hello, Buidl!");
}
function timer() {
  console.log("1");
  setTimeout(() => {
    console.log("2");
  }, 1000);
  console.log("3");
}
function fetch_req() {
  const req = fetch("https://api.kanye.rest")
    .then((data) => data.json)
    .then((data) => console.log(data, "5"))
    .catch((error) => console.log("failed to fetch", "5"));
}

async function kanye() {
  try {
    const request = await fetch("https://api.paymesh.app/health");

    if (request.status == 401) {
      throw new Error("unauthorized caller");
    }
    const response = await request.json();
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

timer();
hello();
fetch_req();
console.log("just console");
hello();
console.log("just console");
hello();
kanye();

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

// 1,3,  timer
//4  hello
// just console
//4  hello
// just console
//4  hello
// (microtask queue 5) fetch
// (2  task queue)

function letPromise() {
  return new Promise((resolve, rejected) => {
    const randomBumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomBumber);
    if (
      (randomBumber == 1 || randomBumber == 3,
      randomBumber == 5 || randomBumber == 7 || randomBumber == 9)
    ) {
      rejected("Promise not fulfilled");
    } else {
      resolve("Promise fulfilled");
    }
  });
}
const retunData = letPromise()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
// console.log(retunData);
