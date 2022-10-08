// Determine if a number is even or odd.
function evenOrOdd(number) {
    if (number % 2 === 0) {
        console.log(`${number} is even`);
    } else {
        console.log(`${number} is odd`);
    }
}

evenOrOdd(5)


// Determine if a word has an even or odd number of characters.
function stringLengthEvenOrOdd(string) {
    const number = string.length;

    if (number % 2 === 0) {
        console.log(`${number} is even`);
    } else {
        console.log(`${number} is odd`);
    }
}

stringLengthEvenOrOdd("water")




// Determine what someone will have for dinner.
function dinner(string) {
    if (string === "hotpot") {
        console.log("hotpot")
    } else if (string === "dimsum") {
        console.log("dimsum")
    } else if (string === "pho"){
        console.log("pho")
    } else {
        console.log("cry")
    }
}

dinner("hotpot")




// Basic loop syntax.
function loop(number) {
    for (let i = 0; i < number; i++) {
        console.log("I am number " + i);
    }
}

loop(5)



// Fizzbuzz Algorithm.
function fizzBuzz() {
    for (let i = 0; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz");
        } else if (i % 5 === 0) {
            console.log("buzz");
        } else if (i % 3 === 0) {
            console.log("fizz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz();