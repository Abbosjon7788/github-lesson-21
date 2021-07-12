var database = [];
var newDatabase = [];
var toDoNumber;
var doneNumber;

function addBoard() {
    var text = document.getElementById('text-part').value;

    if (text.length > 0) {


        database.push(text);
        cal();


        drawPage();

        document.getElementById('text-part').value = "";

    } else {
        alert("Please, write anything!")
    }

}

function drawPage() {
    var content = "";

    for (var i = 0; i < database.length; i++) {
        content = content +
            "<div class='btn-group w-100 mb-3'>" +
            "<button type='button' class='btn btn-outline-success disabled shadow-none w-90 font'>" + database[i] + "</button>" +
            "<button type='button' class='btn btn-success shadow-none w-10' onclick='addToDone(" + i + ")'>&#10003;</button>" +
            "</div>"

    }


    document.getElementById('toDo-part').innerHTML = content;
}

function addToDone(index) {

    var doneText = database[index];
    newDatabase.push(doneText);
    drawPage2();
    database.splice(index, 1);
    drawPage();

    cal();


}

function drawPage2() {
    var content2 = "";

    for (var i = 0; i < newDatabase.length; i++) {
        content2 = content2 +
            "<div class='btn-group w-100 mb-3'>" +
            "<button type='button' class='btn btn-outline-primary disabled shadow-none w-90 font'>" + newDatabase[i] + "</button>" +
            "<button type='button' class='btn btn-primary shadow-none w-10' onclick='deleteDone(" + i + ")'>&times;</button>" +
            "</div>"

    }


    document.getElementById('done-part').innerHTML = content2;
}

function deleteDone(index) {
    newDatabase.splice(index, 1);
    drawPage2();
    cal();

}

function cal() {
    if (database.length == 0 && newDatabase.length != 0) {
        document.getElementById('progress-part').style.width = "100%";
        document.getElementById('progress-part').innerHTML = "100%";
    } else if (database.length == 0 && newDatabase.length == 0) {
        document.getElementById('progress-part').style.width = "0%";
        document.getElementById('progress-part').innerHTML = "0%";
    } else {
        document.getElementById('progress-part').style.width = newDatabase.length / (database.length + newDatabase.length) * 100 + "%";
        document.getElementById('progress-part').innerHTML = newDatabase.length / (database.length + newDatabase.length) * 100 + "%";
    }


}