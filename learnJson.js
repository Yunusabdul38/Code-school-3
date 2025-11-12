// const { createElement } = require("react");

let name = document.querySelector(".name");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let userImg = document.querySelector(".user_img");
let userCont = document.querySelector(".user-con");

const y = {
  name: "Manaseh",
  age: 12,
  country: "Kenya",
};

// const data = [1, 2, 3, 4];

// data.forEach((x) => {
//   console.log(x + 4);
// });

// console.log(data);

// https://api.weatherapi.com/v1/current.json?key=04126511178345da85770845251111&q=${name.value}

fetch("https://dummyjson.com/users")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    console.log(data.users[0].age);
    data.users.map((user) => {
      console.log(user);
      userCont.innerHTML += `
      <div class="user-card">
      <h2 class="name">${user.firstName}</h2>
      <p class="email">${user.email}</p>
      <p class="Phone number">${user.phone}</p>
      <img
        class="user_img"
        width="400"
        src="${user.image}"
        alt=""
      />
    </div>
      `;
      // name.innerHTML = user.firstName;
      // email.innerHTML = user.email;
      // password.innerHTML = user.phone;
      // userImg.src = user.image;
    });
    // let dataUser = data.users[0];
    // name.innerHTML = dataUser.firstName;
    // email.innerHTML = dataUser.email;
    // password.innerHTML = dataUser.phone;
    // userImg.src = dataUser.image;
  });
