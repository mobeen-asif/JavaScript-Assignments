// Chapter-17-20-Arrays-And-Loop

// Question-1
var arr = [];
arr.push([40, 41, 42], [43, 44, 45], [46, 47, 48]);


// Question-2
var matrixArray = [];
matrixArray.push([0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]);
for (let i = 0; i < matrixArray.length; i++) {
    document.write(matrixArray[i] + '<br>');
}


// Question-3
for (let i = 1; i <= 10; i++) {
    document.write( i + '<br>') ;
}


// Question-4
var tableNumber = parseInt(prompt("Enter the number for the multiplication table:"));
var tableLength = parseInt(prompt("Enter the length of the multiplication table:"));
if (isNaN(tableNumber) || isNaN(tableLength)) {
    alert("Invalid input. Please enter valid numbers.");
} else {
    document.write(`Multiplication table of  ${tableNumber} <br> length: ${tableLength} <br><br>`);
    for (let i = 1; i <= tableLength; i++) {
    var result = tableNumber * i;
    document.write(`${tableNumber} x ${i} = ${result} <br>`);
    }
}



// Question-5
var fruits = ['apple', 'banana', 'mango',  'orange', 'strawberry'];
for (let i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + '<br>');
}
document.write('<br>')
for (let i = 0; i < fruits.length; i++) {
    document.write(`Element at index ${i} is ${fruits[i]} <br>`);
}


// Question-6
var counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
document.write(`Counting: <br> ${counting} <br><br> Reverse: <br>`)
for (let i = counting.length - 6; i >= 0; i--) {
    document.write(counting[i] + ',');
}
document.write(`<br><br> Even: <br>`)
for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        document.write(i + ',');
    }
        }
document.write(`<br><br> Odd: <br>`)
    for (let i = 0; i <= 15; i++) {
        if (i % 2 !== 0) {
        document.write(i + ',');
        }
    }
document.write(`<br><br> Series: <br>`)
for (let i = 1; i <= 10; i++) {
    const result = i * 2;
    document.write(`${result}k ,`);
}


// Question-7
var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Enter an item to search:");
var userSearch = userInput.toLowerCase();
var isItemFound = false;
var foundIndex = -1;
for (let i = 0; i < bakery.length; i++) {
    var currentItem = bakery[i].toLowerCase();
    if (currentItem === userSearch) {
    isItemFound = true;
    foundIndex = i;
    break;
    }
}
if (isItemFound) {
    alert(`${userInput} is found at ${foundIndex} in our bakery.`);
} 
else {
    alert(`We are sorry. ${userInput} is not available in our bakery.`);
}


// Question-8
var numbers = [24, 53, 78, 91, 12];
var largerNumber = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largerNumber) {
    largerNumber =numbers[i];
    }
}
document.write(`Array items: ${numbers} <br> The largest number is: ${largerNumber}` );


// Question-9
var numbers = [24, 53, 78, 91, 12];
let smallestNumber = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallestNumber) {
    smallestNumber = numbers[i];
    }
}
document.write(`Array items: ${numbers} <br> The smallest number is: ${smallestNumber}`);


// Question-10
for (let i = 1; i <= 20; i++) {
    var multiple = i * 5;
document.write(multiple + ',');
}