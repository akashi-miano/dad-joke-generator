const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
const memeGenBtn = document.querySelector(".btn");
const dadJoke = document.querySelector(".joke");

let options = {
  method: "GET",
  headers: {
    "X-Api-Key": "g0wR/+aHm2k3eZI9FV66rQ==j7V29U1lo2mGZNRq",
  },
};

const fetchURL = async () => {
  try {
    memeGenBtn.innerText = "Updating...";
    dadJoke.innerText = "Loading...";
    const res = await fetch(apiURL, options);
    const data = await res.json();
    dadJoke.innerText = data[0].joke;
    memeGenBtn.innerText = "TELL ME A JOKE";
  } catch (error) {
    console.log(error);
  }
};

memeGenBtn.addEventListener("click", () => {
  fetchURL();
});
