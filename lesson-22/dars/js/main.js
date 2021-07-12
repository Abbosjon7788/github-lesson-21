function calc() {

    // console.log(document.getElementById("number-one").value)
    // console.log(document.getElementById("action").value)
    // console.log(document.getElementById("number-two").value)
    var nimadir = Math.sqrt(81);

    var numberOne = document.getElementById('number-one').value;
    var numberTwo = document.getElementById('number-two').value;
    var action = document.getElementById('action').value;
    var result;

    if (numberTwo == 0 && action == "divide") {
        document.getElementById('result').innerHTML = "<div class='alert alert-danger mt-3'>Xatolik! Sonni nolga bo'lish mumkin emas! <button type='button' class='close' data-dismiss='alert'>&times;</button></div>"

    } else {

        if (action == "add") {
            result = parseFloat(numberOne) + parseFloat(numberTwo);
        } else if (action == "multiply") {
            result = numberOne * numberTwo;
        } else if (action == "divide") {
            result = numberOne / numberTwo;
        } else {
            result = numberOne - numberTwo;
        }

        document.getElementById('result').innerHTML = "<div class='alert alert-primary mt-3'>Natija: <b>" + result + "</b><button type='button' class='close' data-dismiss='alert'>&times;</button></div>"
    }
}

console.log(Math.pow(3, 2));