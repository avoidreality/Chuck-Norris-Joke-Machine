async function getJoke() {
   const joke_response = await fetch("https://api.chucknorris.io/jokes/random");
   const joke_result = await joke_response.json();
   // console.log(joke_result);
   document.getElementById("joke").innerHTML=joke_result.value;
}

getJoke();
