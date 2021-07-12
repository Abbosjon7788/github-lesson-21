var database = [];
var selectedBoard = -1;
var selectedBordForItem = -1;
var selectedItem = -1;

function showCard() {
    document.getElementById('add-board').classList.toggle("d-none");
}

function addBoard() {
    var boardTitle = document.getElementById('board-title').value;

    if (boardTitle.length > 0) {

        if (selectedBoard >= 0) {
            database[selectedBoard].title = boardTitle;
            selectedBoard = -1;
        } else {
            var newBoard = {
                title: boardTitle,
                items: []
            };
            database.push(newBoard);
        }

        drawPage();

        showCard();
        document.getElementById('board-title').value = ""
    }

}

function drawPage() {
    var content = "";

    for (var i = 0; i < database.length; i++) {

        var content2 = "";

        for (var j = 0; j < database[i].items.length; j++) {
            content2 = content2 +
                "<div class='task position-relative' onclick='editTask(" + i + "," + j + ")'>" + database[i].items[j] + "<div class='close' onclick='deleteTask(" + i + "," + j + ")'>&times;</div></div>"
        }

        content = content +
            "<div class='col-4 mb-3'>" +
            "<div class='card'>" +
            "<div class='card-header'><h3 onclick='editBoard(" + i + ")'>" + database[i].title + "</h3> <div class='close' onclick='deleteBoard(" + i + ")'>&times;</div> </div>" +
            "<div class='card-body' id='task-list" + i + "'>" + content2 + "</div>" +
            "<div class='card-footer'>" +
            "<textarea class='form-control' id='task-title" + i + "' placeholder='Type item title'></textarea>" +
            "<button type='button' class='btn btn-success d-block ml-auto mt-3' onclick='addTask(" + i + ")'>Add</button>" +
            "</div>" +
            "</div>" +
            "</div>"
    }

    document.getElementById('content').innerHTML = content;
}

function deleteBoard(index) {
    database.splice(index, 1);
    drawPage();
}

function editBoard(index) {
    document.getElementById('add-board').classList.remove("d-none");
    document.getElementById('board-title').value = database[index].title;
    selectedBoard = index;
}

function addTask(index) {
    var taskTitle = document.getElementById('task-title' + index).value;

    if (selectedBordForItem >= 0 && selectedItem >= 0) {
        database[index].items.splice(selectedItem, 1, taskTitle);
        selectedItem = -1;
        selectedBordForItem = -1;
    } else {
        database[index].items.push(taskTitle);
    }

    drawPage();
}

function deleteTask(index1, index2) {
    database[index1].items.splice(index2, 1);

    drawPage();
}

function editTask(index1, index2) {

    document.getElementById('task-title' + index1).value = database[index1].items[index2];

    selectedBordForItem = index1;
    selectedItem = index2;
}

