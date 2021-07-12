var selectedAction = "";
var numberOne;
var numberTwo;
var result;
var selectedActionOriginal;
var selectedResult;
var i = 0;

function addNumber(number) {

    if (document.getElementById('result').value.includes('.') && number == '.' ||document.getElementById('result').value.length > 9) {

        //    includes - berilgan text ni ichida qidirilayotgan simvollarning bor yoki yo'qligini aniqlaydi


    } else {
        if (document.getElementById('result').value == "0" && number != "." || selectedAction.length > 0) {
            document.getElementById('result').value = number;
            selectedAction = "";


        } else if (i > 0) {
            document.getElementById('result').value = "";
            i = 0;
            document.getElementById('result').value = document.getElementById('result').value + number;
        } else {

            document.getElementById('result').value = document.getElementById('result').value + number;

        }
    }


}


function action(operation) {
    selectedAction = operation;
    selectedActionOriginal = operation;
    numberOne = document.getElementById('result').value;
}


function Calc() {
    numberTwo = document.getElementById('result').value;
    if (selectedActionOriginal === 'adding') {
        result = parseFloat(numberOne) + parseFloat(numberTwo);
    } else if (selectedActionOriginal === 'division') {
        result = numberOne / numberTwo;
    } else if (selectedActionOriginal === 'multiplication') {
        result = numberOne * numberTwo;
    } else {
        result = numberOne - numberTwo;
    }

    document.getElementById('result').value = result;
    i++;


}

function clearAll() {
    document.getElementById('result').value = "0";
    selectedActionOriginal = "";
    selectedAction = "";
    numberOne = "0";
}

function cancel() {
    var len = document.getElementById('result').value.length;
    document.getElementById('result').value = document.getElementById('result').value.substr(0, len - 1);
}

function percentage() {
    document.getElementById('result').value = document.getElementById('result').value / 100;
}

function changeSign() {
    document.getElementById('result').value = document.getElementById('result').value * (-1);
}

console.log(document.getElementById('result').value);