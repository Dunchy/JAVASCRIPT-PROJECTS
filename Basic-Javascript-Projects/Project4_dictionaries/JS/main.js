function MyDictionary(){
    var Pepper = {
        name: "Carolina Reaper",
        heat: "90%",
        flavor: "savoury"
    }
    delete Pepper.flavor;
    document.getElementById("display").innerHTML = Pepper.flavor;
}