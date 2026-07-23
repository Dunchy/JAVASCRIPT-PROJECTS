function Ride_Function(){
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."
}

function Meme(){
    var memeNumber = 67
    document.getElementById("Nested_Function").innerHTML = WithinMeme();
    function WithinMeme(){
        memeNumber += 2;
        return memeNumber;
    }
    WithinMeme();
}