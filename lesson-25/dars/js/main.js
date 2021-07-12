var database = [];

var selectedProduct = -1;


function addProduct() {
    var productName = document.getElementById('product-name').value;
    var productPrice = document.getElementById('product-price').value;
    var productColor = document.getElementById('product-color').value;
    var productDate = document.getElementById('product-date').value;

    if (productDate.length > 0 && productColor.length > 0 && productPrice.length > 0 && productName.length > 0) {
        document.getElementById("product-name").value = "";
        document.getElementById("product-price").value = "";
        document.getElementById("product-color").value = "";
        document.getElementById("product-date").value = "";


        var newProduct = {
            name: productName,
            price: productPrice,
            color: productColor,
            date: productDate
        };

        if (selectedProduct >= 0) {
            database.splice(selectedProduct, 1, newProduct);
            selectedProduct = -1;
            document.getElementById('add-button').innerHTML = "Add product";
            document.getElementById('add-button').classList.remove("btn-primary");
            document.getElementById('add-button').classList.add("btn-success");
        } else {
            database.push(newProduct);
        }


        console.log(database);

        drawPage();

    } else {
        alert("Wrong! Please input values!!!")
    }


}

console.log(document.getElementById('product-name').value + "Hi");
console.log("Hello everyone!!!")
var a;

function editProduct(a) {

    document.getElementById('product-name').value = database[a].name;
    document.getElementById('product-color').value = database[a].color;
    document.getElementById('product-price').value = database[a].price;
    document.getElementById('product-date').value = database[a].date;

    selectedProduct = a;

    document.getElementById('add-button').innerHTML = "Save";

    document.getElementById('add-button').classList.add("btn-primary");
    document.getElementById('add-button').classList.remove("btn-success");


}   

function deleteProduct(n) {

    database.splice(n, 1);

    drawPage();

    console.log(database);
}

function drawPage() {
    var content = "";

    for (var i = 0; i < database.length; i++) {

        content = content +
            "<div class='col-4 my-3'>" +
            "<div class='card'>" +
            "<div class='card-header'>" +
            "<h3>" + database[i].name + "</h3>" +
            "</div>" +
            "<div class='card-body'>" +
            "<p>Price: " + database[i].price + "</p>" +
            "<p>Date: " + database[i].date + "</p>" +
            "<p>Color: <b style='color: " + database[i].color + "'>" + database[i].color + "</b></p>" +
            "</div>" +
            "<div class='card-footer d-flex justify-content-between'>" +
            "<button type='button' class='btn btn-primary' onclick='editProduct(" + i + ")'>Edit</button>" +
            "<button type='button' class='btn btn-danger' onclick='deleteProduct(" + i + ")'>Delete</button>" +
            "</div>" +
            "</div> " +
            "</div>"


    }

    document.getElementById("content").innerHTML = content;
}