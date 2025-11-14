// let arr = new Array("Apple", "Banana", "Mango");
let arr = ["Apple", "Banana", "Mango"];

arr.push("Orange"); // adds at the end
arr.pop(); // removes from the end
arr.shift(); // removes from the beginning
arr.unshift("Caramel"); // adds at the beginning

// arr[3] = "Watermelon";
// console.log("Initial array:", arr);

let arr1 = ["I", "study", "JavaScript", "right", "now"];
let numArr = [2, 4, 6, 8, 10];

// for (let i = 0; i < numArr.length; i++) {
//   console.log(numArr[i] * 2);
// }

// numArr.forEach((i) => {
//   console.log(i * 2);
// });

// for (let value of numArr) {
//   console.log(value * 3);
// }

// for (let index in numArr) {
//   console.log(numArr[index] * 4);
// }

// remove 3 first elements and replace them with another
// arr1.splice(2, 1, "Rust");
// let arrSlice = arr1.slice(-4);

// console.log("Modified array:", numArr);

let arrOfObj = [
  {
    name: "John",
    age: 30,
    isAdmin: true,
    courses: ["html", "css", "js"],
    wife: null,
  },
  {
    name: "kelechi",
    age: 25,
    isAdmin: false,
    courses: ["python", "django"],
    wife: null,
  },
  {
    name: "Goodluck",
    age: 28,
    isAdmin: false,
    courses: ["java", "spring"],
    wife: null,
  },
];

arrOfObj.map((user) => {
  console.log("User:", user.age + 3);
});

// console.log("Object:",  arrOfObj);
