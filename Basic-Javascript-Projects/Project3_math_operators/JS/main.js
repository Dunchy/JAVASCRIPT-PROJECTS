function addition() {
    var num1 = 6;
    var num2 = 7;
    document.getElementById("addition").innerHTML = num1 + " + " + num2 + " = " + (num1 + num2);
}

function subtraction() {
    var num1 = 6;
    var num2 = 7;
    document.getElementById("subtraction").innerHTML = num1 + " - " + num2 + " = " + (num1 - num2);
}

function multiplication() {
    var num1 = 6;
    var num2 = 7;
    document.getElementById("multiplication").innerHTML = num1 + " * " + num2 + " = " + (num1 * num2);
}

function division() {
    var num1 = 6;
    var num2 = 7;
    document.getElementById("division").innerHTML = num1 + " / " + num2 + " = " + (num1 / num2);
}

// takes the two numbers and divides them and shows only the remainder of the operation
function modular() {
    var num1 = 7;
    var num2 = 6;
    document.getElementById("modular").innerHTML = "The remainder of " + num1 + " / " + num2 + " is " + (num1 % num2);
}

// reverses the "polarity" of the number
function negation() {
    var num = 7;
    document.getElementById("negation").innerHTML = "The negation of " + num + " is " + -num;
}

// increases the number by 1
function increment() {
    var num = 6;
    num++;
    document.getElementById("increment").innerHTML = "If we increase 6 once we get " + num;
}

// decreases the number by 1
function decrement() {
    var num = 6;
    num--;
    document.getElementById("decrement").innerHTML = "If we decrease 6 once we get " + num;
}

// Generates a number between 1 and the number set by the var randomRange
// The Math.floor removes the numbers after the decimal so that the result is always a whole number
function generateRandom() {
    var randomRange = 1000;
    var randomNum = Math.floor(Math.random() * randomRange) + 1; // The + 1 makes sure the number is not 0
    
    document.getElementById("random").innerHTML = "Here is a random number between 1 and 1000: " + randomNum;
}