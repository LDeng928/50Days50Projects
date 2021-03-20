const joke = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

//run this function
generateJoke();

//Use async/await instead of .then()
async function generateJoke() {
  //Assign headers into a varible
  const config = {
    //Pass  headers as an object
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", config);
  const data = await res.json();
  joke.innerHTML = data.joke;
}

// function generateJoke() {
//   //Assign headers into a varible
//   const config = {
//     //Pass  headers as an object
//     headers: {
//       Accept: "application/json",
//     },
//   };

//   //Use fetch API to get a a new joke
//   fetch("https://icanhazdadjoke.com", config)
//     .then((res) => res.json()) //receive a res and get the json in res
//     //get the json data and console.log data
//     .then((data) => {
//       //Get the joke from the API and insert into joke variable
//       joke.innerHTML = data.joke;
//     });
// }
