function Calculator() {
    var numberOne = document.getElementById('number-one').value;
    var numberTwo = document.getElementById('number-two').value;
    var action = document.getElementById('action').value;
    var result;

    if (numberTwo == 0 && action == "divide") {
        document.getElementById('result').innerHTML = "<div class = 'alert alert-danger mt-3'>Wrong! We can't divide a number to zero!!!<button type='button' class='close' data-dismiss='alert'>&times;</button></div>"

    } else {
        if (action == "add") {
            result = parseFloat(numberOne) + parseFloat(numberTwo);
        } else if (action == "subtract") {
            result = parseFloat(numberOne) - parseFloat(numberTwo);
        } else if (action == "divide") {
            result = parseFloat(numberOne) / parseFloat(numberTwo);
        } else {
            result = parseFloat(numberOne) * parseFloat(numberTwo);
        }

        document.getElementById('result').innerHTML = "<div class='alert alert-primary mt-3'>Result: <b>" + result + "</b><button type='button' class='close' data-dismiss='alert'>&times;</button></div>"

    }
}

function FindRoots() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;
    var x1, x2;

    var d = b * b - 4 * a * c;
    if (a.length == 0 && b.length == 0 && c.length == 0) {
        document.getElementById('roots').innerHTML = "<div class='alert alert-danger mt-3'>Please input any number! <button type='button' class='close' data-dismiss='alert'>&times;</button></div>"
    }else{
        if (d < 0) {
            document.getElementById('roots').innerHTML = "<div class='alert alert-danger mt-3'>The roots of the equation is not defined!!! <button type='button' class='close' data-dismiss='alert'>&times;</button></div>"
        } else {
            x1 = (-b + Math.sqrt(d)) / (2 * a);
            x2 = (-b - Math.sqrt(d)) / (2 * a);

            document.getElementById('roots').innerHTML = "<div class='alert alert-primary mt-3'>" +
                "<div class='py-1 px-2 mr-3 border border-white rounded mb-3 d-block'><b>x<sub>1</sub> = " + x1 + "</b></div> <div class='py-1 px-2 mr-3 border border-white rounded d-block'><b>x<sub>2</sub> = " + x2 + "</b></div> <button type='button' class='close' data-dismiss='alert'>&times;</button></div>"
        }
    }




}
