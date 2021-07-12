function ShowDate() {
    document.getElementById("demo").innerHTML = Date();
}

function Discriminant(a, b, c) {
    return b * b - 4 * a * c;
}

function X1(a, b, c) {
    if (Discriminant(a, b, c) >= 0) {
        return (-b + Math.sqrt(D)) / (2 * a);
    } else {
        return "The roots of the equation is not defined."
    }
}

function X2(a, b, c) {
    if (Discriminant(a, b, c) >= 0) {
        return (-b - Math.sqrt(D)) / (2 * a);
    } else {
        return "The roots of the equation is not defined."
    }
}

function Calculator() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    var D = b * b - 4 * a * c;
    var x1 = (-b + Math.sqrt(D)) / (2 * a);
    var x2 = (-b - Math.sqrt(D)) / (2 * a);

    if (D >= 0) {
        document.getElementById("val-x1").innerHTML = x1;
        document.getElementById("val-x2").innerHTML = x2;
    } else {
        document.getElementById("val-x1").innerHTML = "The roots of the equation is not defined."
        document.getElementById("val-x2").innerHTML = "The roots of the equation is not defined."
    }


}