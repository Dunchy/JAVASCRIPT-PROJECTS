function MyDictionary(){
    var Pepper = {
        name: "Carolina Reaper",
        heat: "90%",
        flavor: "savoury"
    }
    // used to delete a key in the dictionary
    delete Pepper.flavor;
    // retrieves the element with the id display and sets the text to the value inside of the key Pepper.flavor
    document.getElementById("display").innerHTML = Pepper.flavor;
}