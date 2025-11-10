let name = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");
let btn = document.getElementById("btn");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

function saveToLocalStorage() {
  let nameInput = name.value;
  let emailInput = email.value;
  let MessageInput = message.value;

  let mainData = {
    name: nameInput,
    email: emailInput,
    message: MessageInput,
  };

  localStorage.setItem("userData", JSON.stringify(mainData));

  name.value = "";
  email.value = "";
  message.value = "";

  //   console.log(nameInput, emailInput, MessageInput);
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  saveToLocalStorage();
});

btn1.addEventListener("click", () => {
  let getData = JSON.parse(localStorage.getItem("userData"));
  console.log(getData);
});

btn2.addEventListener("click", () => [localStorage.clear()]);
