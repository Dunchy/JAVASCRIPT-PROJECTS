var string1 = "of this sentence...";
var pi = 3.141592653589793238462643383279502884;
var todaysDate = new Date(); // apparently sets the value to the number of milliseconds that have passed since 1/1/1970

//Calling all the functions in a block
concatElement("concat", string1);
sliceElement("slice", 59, 71);
elementToUpper("upper");
concatElement("search", "The word sole starts at index" + " " + elementSearch("search", "sole"));
elementNumberToString("number", 225);

// I separated these because it didn't seem right for these functions to be hardcoded to change an HTML element
document.getElementById("precise").innerHTML = numberPrecision(pi, 7, false);
document.getElementById("fixed").innerHTML = numberPrecision(pi, 7, true);
document.getElementById("date").innerHTML = todaysDate.valueOf(); //

// Takes an HTML element ID and a string and concatenates the string to the end of the hmtl element content
function concatElement(IDstring, newString) {
    document.getElementById(IDstring).innerHTML = document.getElementById(IDstring).innerHTML.concat(newString);
}

// Takes an HTML element ID, a starting index, and an ending index and takes that slice out the string and replaces
// the string with just that slice
function sliceElement(IDstring, index1, index2) {
    document.getElementById(IDstring).innerHTML = document.getElementById(IDstring).innerHTML.slice(index1, index2);
}

// Takes a string from an HTML element and replaces it with an all upper case version
function elementToUpper(IDstring) {
    document.getElementById(IDstring).innerHTML = document.getElementById(IDstring).innerHTML.toUpperCase();
}

// searches an HTML element for part of a string and returns the index that it starts at
function elementSearch(IDstring, searchString) {
    var index = document.getElementById(IDstring).innerHTML.search(searchString);
    return index;
}

// Takes an HTML element and sets it to a string that was converted from a number
function elementNumberToString(IDstring, number) {
    document.getElementById(IDstring).innerHTML = number.toString();
}

// Takes a number, another number representing the number of digits, and a boolean called decimalOnly
// If decimalOnly is true, then toFixed() is used which uses the precision value but only counts the digits after a decimal
// If decimalOnly is false, then toPrecision is used which counts all the digits regardless of a decimal point
function numberPrecision(number, precision, decimalOnly) {
    var preciseNumber;

    if (decimalOnly == true) {
        preciseNumber = number.toFixed(precision);
    }

    else {
        preciseNumber = number.toPrecision(precision);
    }

    return preciseNumber; 
}

