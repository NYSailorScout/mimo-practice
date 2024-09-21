let randomNumber = Math.floor(Math.random() * 100) + 1;

/*
const inputValue = 10;
const milesToKm = true;
let result = 0;

if (milesToKm) {
  result = inputValue * 1.60934;
} else {
  result = inputValue / 1.60934;
}

const resultString = inputValue + " miles are " + result + " km";
console.log(resultString);

const resultElement = document.getElementById('resultElement');
resultElement.innerHTML = resultString;
*/

function checkGuess() {
  let inputElement = document.getElementById("guess");
  let feedbackElement = document.getElementById("feedback");
  let guess = inputElement.value;

  if (guess === randomNumber) {
     feedbackElement.style.color = "green";
     feedbackElement.innerHTML = "You guessed it!";
  } else if (guess < randomNumber) {
     feedbackElement.style.color = "red";
     feedbackElement.innerHTML = "Too low!";
  } else {
     feedbackElement.style.color = "red";
     feedbackElement.innerHTML = "Too high!";
  }
  
}

