function myFunction() {
    console.log("This function is from external method!")

}

// myFunction();

function switchOn() {
    document.getElementById("bulb").src = "images/pic_bulbon.gif"
}

function switchOff() {
    document.getElementById("bulb").src = "images/pic_bulboff.gif"
}

function switchOnOff() {
    if (document.getElementById("bulb").src == "http://localhost:63342/pdp-learning/lesson-22/dars/images/pic_bulboff.gif") {
        switchOn();
        document.getElementById("body").style.backgroundColor = "white"
    } else {
        switchOff();
        document.getElementById("body").style.backgroundColor = "black"
    }
}
console.log(document.getElementById('bulb').src);