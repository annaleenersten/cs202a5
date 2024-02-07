function displayNumber(){
    document.getElementById("number1").innerHTML = "Move forward " + randNumber() + " steps";
    document.getElementById("number2").innerHTML = "Move forward " + randNumber() + " steps";
    document.getElementById("number3").innerHTML = "Move back " + randNumber() + " steps";
    document.getElementById("number4").innerHTML = "Move forward " + randNumber() + " steps";
    document.getElementById("number5").innerHTML = "Move forward " + randNumber() + " steps";
    document.getElementById("number6").innerHTML = "Move forward " + randNumber() + " steps";
    document.getElementById("number7").innerHTML = "Move back " + randNumber() + " steps";
    document.getElementById("number8").innerHTML = "Move forward " + randNumber() + " steps";
    document.getElementById("number9").innerHTML = "Move forward " + randNumber() + " steps";
    document.getElementById("number10").innerHTML = "Move forward " + randNumber() + " steps";
    document.getElementById("number11").innerHTML = "Move back " + randNumber() + " steps";
    document.getElementById("number12").innerHTML = "Move forward " + randNumber() + " steps";
}

function randNumber(){
    return Math.floor(Math.random()*14) + 2;
}