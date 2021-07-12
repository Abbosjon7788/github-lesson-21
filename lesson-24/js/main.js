var numbers = [12, 13, 15, 16, 17];

console.log(numbers);
console.log(numbers[2]);
numbers[3] = 0;
console.log(numbers);


var person = {
    name: "Abbosjon",
    surname: "Nosirov",
    technologies: [1, 2, 3, 4, 5],
    age: 20
};

console.log(person);
console.log(person.technologies[2]);


person.name = "World";
console.log(person);

for (var i = 0; i < 10; i++) {
    console.log(i);
}

var companies = ["Google", "Apple", "Samsung", "PDP"];
companies.push("AIF");
// oxirga qo'shadi'
console.log(companies);

companies.pop();
// oxiridan o'chiradi'
console.log(companies);

companies.unshift("Ucell")
//boshiga qo'shadi
console.log(companies);

companies.shift();
//boshidan o'chirish
console.log(companies);

companies.splice(2, 1)
//o'chiradi
console.log(companies);

companies.splice(1, 1, "Artel");
//o'zgartirib beradi
console.log(companies);

companies.splice(1, 0, "Beeline", "Uzmobile");
//qo'shib beradi
console.log(companies);


console.log("--------------- Homework-24 ------------------");
console.log("Task-1")
num = [10, 12, 15, 19, 22, 31, 36];
console.log(num);
for (var i = 0; i < num.length; i++) {
    if (num[i] % 2 == 0) {
        console.log(num[i]);
    }

}

console.log("Task-2.new");
var num1 = [1, 2, 3, 4, 5, 6, 7, 8];
for (var i = 0; i < num1.length; i++) {
    if (i % 2 == 1) {
        num1[i] = 0;
    }
    console.log(num1[i]);
}

console.log("Task-2");
var fruits = ["apple", "orange", "mango", "banana", "cherry", "nut", "cocos", "strawberry"];
console.log(fruits);
for (var i = 1; i < fruits.length; i += 2) {
    fruits[i] = 0;
}
console.log(fruits);

console.log("Task-3");
var arr = [10, 9, 15, 23, 68, 100, 2, 4, 56, 70];
console.log(arr);
var max = arr[0];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log("Max value: " + max);
var min = arr[0];
for (var i = 0; i < arr.length - 1; i++) {

    if (min > arr[i]) {
        min = arr[i];

    }
}
console.log("Min value: " + min);




