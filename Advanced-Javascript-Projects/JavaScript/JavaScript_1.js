let user_input;



DrawCanvas();

function format_input() {
    user_input = document.getElementById("enter_color").value.toLowerCase();
    color_selector(user_input);
}

function color_selector(selected_color) {
    let deck_color;
    let description = document.getElementById("description");
    let creatureTypes = document.getElementsByClassName("creature");

    switch (selected_color) {
        case "black":
            deck_color = "black, the color that controls death and decay, and values ambition and power.";
            creatureTypes[0].innerHTML = "Demons";
            creatureTypes[1].innerHTML = "Zombies";
            creatureTypes[2].innerHTML = "Vampires";
            creatureTypes[3].innerHTML = "Creature Reanimation";
            creatureTypes[4].innerHTML = "Creature Destruction";
            break;
        case "white":
            deck_color = "white, the color that controls life, and values order and protection.";
            creatureTypes[0].innerHTML = "Angels";
            creatureTypes[1].innerHTML = "Soldiers";
            creatureTypes[2].innerHTML = "Cats";
            creatureTypes[3].innerHTML = "Damage Prevention";
            creatureTypes[4].innerHTML = "Creature Nullification through enchantments";
            break;
        case "red":
            deck_color = "red, the color that controls fire and chaos, and values emotion and freedom.";
            creatureTypes[0].innerHTML = "Goblins";
            creatureTypes[1].innerHTML = "Warriors";
            creatureTypes[2].innerHTML = "Elementals";
            creatureTypes[3].innerHTML = "Burn Spells (High Damage Spells)";
            creatureTypes[4].innerHTML = "Artifact and Land Destruction";
            break;
        case "blue":
            deck_color = "blue, the color that controls water and the mind, and values knowledge and control.";
            creatureTypes[0].innerHTML = "Birds/Flying Creatures";
            creatureTypes[1].innerHTML = "Merfolk";
            creatureTypes[2].innerHTML = "Wizards";
            creatureTypes[3].innerHTML = "Counter Spells";
            creatureTypes[4].innerHTML = "Creature Mind Control";
            break;
        case "green":
            deck_color = "green, the color that controls nature and values instinct and harmony.";
            creatureTypes[0].innerHTML = "Elves";
            creatureTypes[1].innerHTML = "Wolves/Werewolves";
            creatureTypes[2].innerHTML = "Wurms, Hydras, and other massive creatures";
            creatureTypes[3].innerHTML = "Mana Ramp (Getting more land on the field)";
            creatureTypes[4].innerHTML = "Winning with overwelming strength/numbers";
            break;
        case "no":
            deck_color = "to not pick a color, and so you have picked colorless. Colorless represents the lack of alignment" +
                " to any of the other 5 colors. Most known for artifacts and the Annihilator ability"
            creatureTypes[0].innerHTML = "Artifacts";
            creatureTypes[1].innerHTML = "Artifact Creatures";
            creatureTypes[2].innerHTML = "Eldrazi";
            creatureTypes[3].innerHTML = "Powering up creatures through vehicles and equipment";
            creatureTypes[4].innerHTML = "Controlling the board with Annihilator(Ability unique to Eldrazi)";
            break;
        case "colorless":
            deck_color = "to not pick a color, and so you have picked colorless. Colorless represents the lack of alignment" +
                " to any of the other 5 colors. Most known for artifacts and the Annihilator ability"
            creatureTypes[0].innerHTML = "Artifacts";
            creatureTypes[1].innerHTML = "Artifact Creatures";
            creatureTypes[2].innerHTML = "Eldrazi";
            creatureTypes[3].innerHTML = "Powering up creatures through vehicles and equipment";
            creatureTypes[4].innerHTML = "Controlling the board with Annihilator(Ability unique to Eldrazi)";
            break;
        default:
            deck_color = "to not chooose a color";
    }

    description.innerHTML = "You have chosen " + deck_color;
}

function DrawCanvas() {
    // Grab the canvas element from the HTML file
    let canvas = document.getElementById("mtgBanner");
    // Grab the 2D image drawing tools associated with the canvas
    let ctx = canvas.getContext("2d");

    // Makes the gradient take up the same width as the canvas
    let grd = ctx.createLinearGradient(0, 0, 800, 0);

    // Splits the gradient into 5 sections, one for each MTG color
    grd.addColorStop(0, "white");
    grd.addColorStop(0.25, "blue");
    grd.addColorStop(0.50, "black");
    grd.addColorStop(0.75, "red");
    grd.addColorStop(1, "green");

    // Sets the fill style. Copied this directly from the example so I am not 100% sure if this means grid or something else
    ctx.fillStyle = grd;

    // Fill the entire canvas rectangle. Not sure what this does that the createLinearGradient does not
    ctx.fillRect(0, 0, 800, 50);
}