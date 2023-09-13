// Chapter-14-16-Arrays


// Question-1
var studentNames = [];


// Question-2
var studentNamesList = {student1: undefined , student2: undefined};


// Question-3
var juices = ["apple" , "orange", "peach", "grapes"];


// Question-4
var rollNumbers = [151 , 152, 153, 154, 155];


// Question-5
var booleanArray = [true, false, true, true];


// Question-6
var mixedArray = ["Ali", 15, true];


// Question-7
var qualificationInPakistan = ['', 'SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD'];
document.write('<h1>' + 'Qualification' +  '</h1>' + '<br>');
for (let i = 1; i < qualificationInPakistan.length; i++ ) {
    document.write(i + ')' + qualificationInPakistan[i] + '<br>');
}


// Question-8
var studentNames = ['Ali', 'Bilal', 'Babar'];
var studentMarks = [450, 420, 350];
var totalMarks = 500;
var studentPercentage = [(studentMarks[0]/totalMarks)*100, (studentMarks[1]/totalMarks)*100, (studentMarks[2]/totalMarks)*100 ];
for (let i = 0; i < studentNames.length; i++ ) {
    document.write(`Score of ${studentNames[i]} is ${studentMarks[i]}. Percentage: ${studentPercentage[i]}% <br>`);
}


// Question-9
var colors = ["Red", "Green", "Blue"];
document.write("Initial Array: " + colors   + "<br>");
var addColorInStarting = prompt("Enter a color to add in the starting:");
if (addColorInStarting) {
    colors.unshift(addColorInStarting);
}
alert("After Adding Color In Start: " + colors + "<br>");
document.write("After Adding Color In Start: " + colors + "<br>");
var addColorToEnd = prompt("Enter a color to add to the end:");
if (addColorToEnd) {
    colors.push(addColorToEnd);
}
alert("After Adding to End: " + colors + "<br>");
document.write("After Adding to End: " + colors + "<br>");
colors.unshift("Orange", "Grey");
alert("After Adding Two More to Beginning: " + colors + "<br>");
document.write("After Adding Two More to Beginning: " + colors + "<br>");
colors.shift();
alert("After Deleting First Color: " + colors + "<br>");
document.write("After Deleting First Color: " + colors + "<br>");
colors.pop();
alert("After Deleting Last Color: " + colors + "<br>");
document.write("After Deleting Last Color: " + colors + "<br>");
var positionToAdd = parseInt(prompt("Enter the position to add a color:"));
var colorToAdd = prompt("Enter the color to add:");
if (!isNaN(positionToAdd) && colorToAdd) {
    if (positionToAdd >= 0 && positionToAdd <= colors.length) {
    colors.splice(positionToAdd, 0, colorToAdd);
    } 
else {
    alert("Invalid position. Color not added.");
    }
}
alert("After Adding at Desired Position: " + colors.join(", ") + "<br>");
document.write("After Adding at Desired Position: " + colors.join(", ") + "<br>");
var positionToDelete = parseInt(prompt("Enter the position to delete color(s) from:"));
var numColorsToDelete = parseInt(prompt("Enter the number of colors to delete:"));
if (!isNaN(positionToDelete) && !isNaN(numColorsToDelete)) {
    if (positionToDelete >= 0 && positionToDelete < colors.length) {
    colors.splice(positionToDelete, numColorsToDelete);
    } 
else {
    alert("Invalid position. Color(s) not deleted.");
    }
}
document.write("Final Updated Array: " + colors);


// Question-10
const studentScores = [80, 95, 73, 97, 89];
document.write(`Scores of Students: ${studentScores} <br>`);
const sortedStudentScores = studentScores.sort(function(a, b){return a-b});
document.write(`Ordered Scores of Students: ${sortedStudentScores}`);


// Question-11
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = [];
selectedCities.push(cities[2]);
selectedCities.push(cities[3]);
document.write(`Cities List: <br> ${cities} <br><br> Selected Cities List: <br> ${selectedCities}`);


// Question-12
var arr = ["This", "is", "my", "cat"];
var combinedString = arr.join(" ");
document.write(`Array: <br> ${arr} <br><br> String: <br> ${combinedString}`);


// Question-13
var devices = ['Keyboard', 'Mouse', 'Printer', 'Monitor'];
document.write(`Devices <br> ${devices} <br><br>`);
var firstValue = devices.shift();
var secondValue = devices.shift();
var thirdValue = devices.shift();
var fourthValue = devices.shift();
document.write(`Out: <br> ${firstValue} <br> Out: <br> ${secondValue} <br> Out: <br> ${thirdValue} <br> Out: <br> ${fourthValue}`)


// Question-14
var devices = ['Keyboard', 'Mouse', 'Printer', 'Monitor'];
document.write(`Devices <br> ${devices} <br><br>`);
var firstValue = devices.pop();
var secondValue = devices.pop();
var thirdValue = devices.pop();
var fourthValue = devices.pop();
document.write(`Out: <br> ${firstValue} <br> Out: <br> ${secondValue} <br> Out: <br> ${thirdValue} <br> Out: <br> ${fourthValue}`)


// Question-15
var mobileManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
let dropdown = '<select id="mobileManufacturerSelect">';
for (let i = 0; i < mobileManufacturers.length; i++) {
    dropdown += `<option value="${mobileManufacturers[i]}">${mobileManufacturers[i]}</option>`;
}
dropdown += '</select>';
document.write(dropdown);
