document.write("10" + 5);

function ShowIfNan() {
    // isNaN() returns true if the number being checked is NOT a number
    document.getElementById("nan").innerHTML = 0 / 0; 
    document.getElementById("true").innerHTML = isNaN('This is the number nine');
    document.getElementById("false").innerHTML = isNaN(9); 
    // 3E310 is a number passed the bounds of what a float can hold and is therefore considered by the program to be infinity
    document.getElementById("infinity").innerHTML = (3E310);
    document.getElementById("notinfinity").innerHTML = (-3E310);
    // A boolean can ever only be true or false. 
    // The below expressions are checking if 5 is greater or less than 7 and returning the result to the paragraph element in HTML
    document.getElementById("booltrue").innerHTML = (5 < 7);
    document.getElementById("boolfalse").innerHTML = (5 > 7);
}

function Compare(){
    var string1 = "37";
    var string2 = "55";
    var float1 = 37;
    var float2 = 37;
    var float3 = 66;
    // === checks to see if two variables have both the same value and the same data type
    document.getElementById("p1").innerHTML = (float1 === float2); //returns 
    document.getElementById("p2").innerHTML = (float1 === string2);
    document.getElementById("p3").innerHTML = (float1 === string1);
    document.getElementById("p4").innerHTML = (float1 === float3);
    // && checks to see if two expressions are both returning true. 
    // The output will only be true with the two other expressions are also returning true
    document.getElementById("p5").innerHTML = ((float1 < float3) && (float1 == float2));
    document.getElementById("p6").innerHTML = ((float1 < float3) && (float1 == float3));
    // || checks if either of the expression are true and returns true if even one of them is true
    document.getElementById("p7").innerHTML = ((float1 < float3) || (float1 == float2));
    document.getElementById("p8").innerHTML = ((string1 == string2) || (float1 == float3));
    // ! basically reverses what the expression returns. 
    // If the expression returns true, ! changes it to value and vice versa
    document.getElementById("p4").innerHTML = !(float1 > float3);
    document.getElementById("p4").innerHTML = !(float1 == float2);
}

console.log(5 + 7);

