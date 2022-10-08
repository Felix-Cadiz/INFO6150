// Reference items inside of our HTML
let form = document.querySelector("form");
let input = document.querySelector("input");
let result = document.querySelector("#result");

// Event that occurs when we submit a form.
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let number = input.value;
    let translate = fizzBuzz(number);
    result.textContent = translate;
    input.value = "";
});


// Fizzbuzz functionality based on the input of the form.
function fizzBuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return "fizzbuzz";
    } else if (number % 5 === 0) {
        return "buzz";
    } else if (number % 3 === 0) {
        return "fizz";
    } else {
        return number;
    }
}