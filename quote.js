const quote = document.querySelector("h1");
const btn = document.querySelector("button");
console.log("hey");
const kanye_axios = async () => {
  try {
    const request = await fetch("https://api.kanye.rest");

    if (request.status == 401) {
      throw new Error("unauthorized caller");
    }
    const response = await request.json();
    console.log(response.quote, " async/await");
    console.log("GOOD AFTERNOON");
    quote.textContent = response.quote;
  } catch (error) {
    console.error(error);
  }
};

btn.addEventListener("click", kanye_axios);

setInterval(() => {
  kanye_axios();
}, 5000);
