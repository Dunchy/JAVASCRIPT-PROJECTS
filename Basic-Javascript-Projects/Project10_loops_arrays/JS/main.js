var math1 = 1;
var Instruments = ["violin", "hammer", "These hands", "tennis racket", "piano"];

// Constant to be used in Constant_Function() below
const mtgDeck = {
    color_identity: "green",
    card_count: 60,
    play_speed: "medium"
};

let loopString = document.getElementById("Loop");
let forString = document.getElementById("List_of_Instruments");
let constantString = document.getElementById("Constant");
// let for a taco object with a function that displays the description
let taco = {
    meat: "carne asada",
    condiment: "lettuce",
    shell: "corn tortilla",
    description: function () {
        return "tacos are a mexican staple. usually made with grilled beef called " + this.meat +
            " along with various veggies, mainly " + this.condiment + ". The shell is most often a " +
            this.tortilla + "."
    }
}

// writes the taco description to the taco element paragraph
document.getElementById("taco").innerHTML = taco.description();

// Writes the numbers 1-20 to the the page
function Call_Loop() {
    while (math1 <= 20) {
        loopString.innerHTML += (" " + math1);
        math1++;
    }
}

// When called, makes a numbered list of instruments appear in the HTML element
function For_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        forString.innerHTML += ((Y + 1) + ": " + Instruments[Y] + "<br>");
    }
}

// Function that displays a card image based on a random number by inserting the file
function Array_Function() {
    var playingCards = [];
    playingCards[0] = "diamond.png";
    playingCards[1] = "heart.png";
    playingCards[2] = "square.png";
    playingCards[3] = "crescent.png";
    playingCards[4] = "cardback.png";
    playingCards[5] = "404cardnotfound.png";

    var randomIndex = Math.floor(Math.random() * playingCards.length);

    // for loop that skips the error image at index 5 and breaks when a valid image is chosen
    for (i = 0; i < playingCards.length; i++) {
        if (randomIndex == 5) {
            continue;
        }
        else {
            document.getElementById("Array").src = ("images/" + playingCards[randomIndex]);
            break;
        }

    }
}

// Sets the individual properties of the contstant and then displays them all in a string back in the HTML element
function Constant_Function() {
    mtgDeck.color_identity = "black";
    mtgDeck.set = "Innistrad";

    constantString.innerHTML = "I have this " + mtgDeck.color_identity + " MTG deck that contains " +
        mtgDeck.card_count + " cards. It has a " + mtgDeck.play_speed + " play speed so that it can compete with most other decks."
}

