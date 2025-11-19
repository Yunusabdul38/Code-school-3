import axios from "axios";

// console.log(x, y, z, "4");
//   console.log("Hello, Buidl!");

function timer() {
  console.log("1");
  setTimeout(() => {
    console.log("2");
  }, 1000);
  console.log("3");
}
function fetch_req() {
  const req = fetch("https://api.kanye.rest")
    .then((data) => data.json())
    .then((data) => console.log(data.quote, "5"))
    .catch((error) => console.log("failed to fetch", "5"));
  // console.log(req);
}
// fetch_req();
async function kanye() {
  try {
    const request = await fetch("https://api.kanye.rest");

    if (request.status == 401) {
      throw new Error("unauthorized caller");
    }
    const response = await request.json();
    console.log(response.quote, " async/await");
  } catch (error) {
    console.error(error);
  }
}
// kanye();
// timer();
// hello();
// fetch_req();
// console.log("just console");
// hello();
// console.log("just console");
// hello();
// kanye();

timer();
// hello();
fetch_req();
console.log("just console");
// hello();
console.log("just console");
// hello();
kanye();

let sayHi = function () {
  console.log("Hi");
};

let secHi = sayHi;

// function addNum(a, b) {
//   return a + b;
// }

// const save = addNum(87, " Pc's");
// console.log(save);

// let addNumArr = (a, b) => {
//   return a + b;
// };

// console.log(addNumArr(15, 7));

// // 1,3,  timer
// //4  hello
// // just console
// //4  hello
// // just console
// //4  hello
// // (microtask queue 5) fetch
// // (2  task queue)

// function letPromise() {
//   return new Promise((resolve, rejected) => {
//     const randomBumber = Math.floor(Math.random() * 10) + 1;
//     console.log(randomBumber);
//     if (
//       (randomBumber == 1 || randomBumber == 3,
//       randomBumber == 5 || randomBumber == 7 || randomBumber == 9)
//     ) {
//       rejected("Promise not fulfilled");
//     } else {
//       resolve("Promise fulfilled");
//     }
//   });
// }
// const retunData = letPromise()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
// // console.log(retunData);

axios
  .get("https://api.kanye.rest")
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

async function kanye_axios() {
  try {
    const request = await axios.get("https://api.kanye.rest");

    if (request.status == 401) {
      throw new Error("unauthorized caller");
    }
    console.log(request, " async/await 2");
  } catch (error) {
    console.error(error);
  }
}

// kanye_axios();

// TYPES OF FUNCTION
// JS HAS 3 TYPES OF FUNCTION
// 1 - NAMED FUNCTION
// 2 - FUNCTION EXPRESSION
// 3 - ARROW FUNCTION

add();

// named function
async function add() {
  return 2 + 2;
  // console.log(2 + 2, "named function");
}

// function expression
const exp_add = async function () {
  return 2 + 2;
  // console.log(2 + 2, "function expression");
};

// arrow function
// const arrow_add = async () => {
//   return 2+2
// };

const arrow_add = () => 2 + 2;

// imidiate involke function (IIF)
(async function () {
  try {
    const request = await fetch("https://api.kanye.rest");

    if (request.status == 401) {
      throw new Error("unauthorized caller");
    }
    const response = await request.json();
    console.log(response.quote, " async/await");
    console.log("GOOD AFTERNOON");
  } catch (error) {
    console.error(error);
  }
})();
exp_add();
const value = arrow_add();
console.log("aerrow", value * 2);
