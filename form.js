let name = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");
let btn = document.getElementById("btn");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let nameErr = document.getElementById("name-err");
let emailErr = document.getElementById("email-err");
let mesgErr = document.getElementById("msg-err");

function saveToLocalStorage() {
  let nameInput = name.value;
  let emailInput = email.value;
  let MessageInput = message.value;

  let mainData = {
    name: nameInput,
    email: emailInput,
    message: MessageInput,
  };

  if (nameInput == "") {
    // alert("Please enter your name");
    nameErr.innerText = "Please enter your name";
    nameErr.style.display = "block";
    return;
  } else if (emailInput == "") {
    // alert("Please enter your email");
    emailErr.innerText = "Please enter your email";
    emailErr.style.display = "block";
    return;
  } else if (MessageInput == "") {
    // alert("pls enter your message");
    mesgErr.innerText = "Please enter your message";
    mesgErr.style.display = "block";
    return;
  } else {
    alert("You have submitted successfully ✅");
  }

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
