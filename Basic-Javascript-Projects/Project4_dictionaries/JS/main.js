function activatedictionary(){
    var pepperDictionary = {
        Name: "Carolina Reaper",
        Heat: "90%",
        Flavor: "savoury"
    }
    delete pepperDictionary.Flavor;
    document.getElementById("display").innerHTML = pepperDictionary.Flavor;
}