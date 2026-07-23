// I made this variable first because variables made in the functions do not stick around if they aren't saved to a variable
// outside the function
var rider1;

// creates an instance of a rider using the "new" keyword
function CreateRider() {
    rider1 = new Rider("Zaccary", "Martin", 182, 26)
}

// If called after the CreateRider Function, it will change the paragraph element in the html file to display the information
// about the created instance
function ShowRider(){
    document.getElementById("Show_Rider").innerHTML = rider1.firstName + " " + rider1.lastName + " " + rider1.height + " " + rider1.age;
}

// first name string, last name string, height in cm, age in years
function Rider(first, last, height, age) {
    this.firstName = first;
    this.lastName = last;
    this.height = height;
    this.age = age;
}

// When the user puts in there height, if it is 52 cm or higher, the output will be "You are tall enough"
// Otherwise it will output "You are too short"
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."
}

// Nested function that just adds 2 to the number and sends that number to the html element
function MakeNumber() {
    var number = 36
    document.getElementById("Nested_Function").innerHTML = WithinMeme();
    function WithinMeme() {
        number += 2;
        return number;
    }
    WithinMeme();
}