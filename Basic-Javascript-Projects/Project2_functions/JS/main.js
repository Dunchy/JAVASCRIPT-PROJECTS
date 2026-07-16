
//window.addEventListener("load", function () {
//    document.getElementById("temp").innerHTML = "Changed text";
// });

function displayPageTitle() {
    document.getElementById("temp").innerHTML = "The button has been pressed" ;
    //replaces the text on the button with other text
};

function concatenateStrings(string1, string2) {
    document.getElementById("firstString").innerHTML += document.getElementById("secondString").innerHTML; 
    //grabs the first 2 string paragraphs and adds on the second string to the end of hte first
    document.getElementById("secondString").innerHTML = ""; 
    //replaces the second string with an empty one so that only the concatenated one is displayed
};