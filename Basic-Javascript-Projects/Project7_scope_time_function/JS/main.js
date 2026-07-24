var num1 = 7;
var rngNumber; // This holds the random number created when the guess paragraph is clicked

function localNumber() {
    var num2 = 11; // Just a local variable to use in the errorFunction() function
}

errorFunction();

function errorFunction() {
    console.log(num2 + 3);  // This will error out because num2 is local to localNumber() function
}

function get_Date() {
    if (new Date().getHours() > 12) {
        document.getElementById("time").innerHTML = "Good afternoon"
    }
}

function RNJesus() {
    var randomNumber = Math.floor(Math.random() * 100); // This creates a random number between 0 and 99
    rngNumber = randomNumber; // This assigns the random number to the rngNumber variable
    if (randomNumber >= 50) {
        alert("Your number was 50 or higher. Your RNG is good you win!") // This will pop up a window saying you win if the number is 50 or higher
    }
    else {
        document.getElementById("tryagain").innerHTML = "SECOND CHANCE. If you guess within 10 of the random number you still win!"; // This will fill the paragraph element above the 
        // input box with text telling the user to try and guess the random number for a second chance to win
        alert("Your number was under 50. RN-Jesus doesn't like you, you lose!") // This will pop up a window saying you lose if the number is under 50
    }
}

function checkGuess() {
    var guess = document.getElementById("number_input").value;
    if (guess == rngNumber) {
        document.getElementById("result").innerHTML = "OH MY GOD YOU GOT IT EXACTLY RIGHT. YOU WIN!!!"
    } //In the unlikely event that the user guesses the exact right number they get this message
    else if (Math.abs(guess - rngNumber) <= 10) { // Math.abs() is used to find the absolute value of the result becuase if the guess is lower than the rngNumber, the result would be negative
        document.getElementById("result").innerHTML = "You win! you guess was " + Math.abs(guess - rngNumber) + " away from the number"
    } // If the user guesses within 10 of the random number they get this message
    else {
        document.getElementById("result").innerHTML = "You lose! You were " + Math.abs(guess - rngNumber) + " away from the number"
    } // This will show the user how far they were away from the random number if they lose
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) { // checks if the time is both before 12pm and after 12am
        Reply = "It is morning time!"
    }
    else if (Time >= 12 == Time < 18) { // checks if the time is both after 12pm and before 6pm
        Reply = "It is afternoon time!"
    }
    else {
        Reply = "It is evening time!" // If the other two statements are false, then it must be evening
    }
    document.getElementById("Time_of_day").innerHTML = Reply
}

