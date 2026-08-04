function validateForm() {
    let x = document.forms["myForm"]["ftext"].value;
    let y = document.forms["myForm"]["ltext"].value;
    if (x == "") {
        alert("First Name field must be filled out");
        return false;
    }
    else if (y == ""){
        alert("Last Name field must be filled out");
        return false;
    }
}