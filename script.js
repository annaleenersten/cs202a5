function displayNumber(){
    document.getElementById("number2").innerHTML = "Move forward " + randNumber() + " steps";
    document.getElementById("number4").innerHTML = "Move back " + randNumber2() + " steps";
    document.getElementById("number6").innerHTML = "Move forward " + randNumber() + " steps";
    document.getElementById("number8").innerHTML = "Move forward " + randNumber() + " steps";
    document.getElementById("number10").innerHTML = "Move forward " + randNumber() + " steps";
    document.getElementById("number12").innerHTML = "Move back " + randNumber2() + " steps";
}

function randNumber(){
    return Math.floor(Math.random()*14) + 2;
}

function randNumber2(){
    return Math.floor(Math.random()*5) + 2;
}