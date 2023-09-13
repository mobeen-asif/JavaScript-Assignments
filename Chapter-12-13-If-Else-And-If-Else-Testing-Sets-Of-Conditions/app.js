// Chapter-12-13-If-Else-And-Else-If-Statement-Testing-Set-Of-Conditions

// Question-1
var character = prompt("Enter a character:");
if (!isNaN(character)) {
    alert(character + " is a number.");
}
else if (character >= 'A' && character <= 'Z') {
    alert(character + " is an uppercase letter.");
}
else if (character >= 'a' && character <= 'z') {
    alert(character + " is a lowercase letter.");
}
else {
    alert(character + " is not a number, uppercase letter, or lowercase letter.");
}


// Question-2
var num1 = +prompt("Write first number:");
var num2 = +prompt("write second number:");
if (num1 > num2){
    alert("num1 is greater than num2.")
}
else if(num1 === num2){
    alert("both numbers are equal.");
}
else {
    alert("num2 is greater than num1.")
}


// Question-3
var num = +prompt("Write any number:");
if (num > 0){
    alert("Number is positive.")
}
else if (num === 0){
    alert("Number is equal to zero");
}
else {
    alert("Number is Negative")
}


// Question-4
var word = prompt("Write any letter to check whether it is vowel or not:");
if ( word === "a" || word === "e" || word === "i" || word === "o" || word === "u" ) {
    alert("Letter is a vowel.");
}
else {
    alert("Letter is consonant.");
}


// Question-5
const correctPassword = "Web & App Development";
const userPassword = prompt("Enter your password:");
if (!userPassword) {
    alert("Please enter your password.");
} else if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password.");
} else {
    alert("Incorrect password.");
}


// Question-6
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else {
greeting = "Good evening";
}


// Question-7
var userTime = +prompt("Enter the time in 24-hour format (e.g., 1900 for 7:00 PM):");
if (isNaN(userTime)) {
    alert("Invalid input. Please enter a valid time in 24-hour format.");
} 
else if (userTime < 0 || userTime >= 2400) {
    alert("Invalid time. Please enter a time between 0000 and 2359.");
} 
else if (userTime >= 0 && userTime < 1200) {
    alert('Good morning!');
} 
else if (userTime >= 1200 && userTime < 1700) {
    alert('Good afternoon!');
} 
else if (userTime >= 1700 && userTime < 2000) {
    alert('Good evening!');
} 
else {
    alert('Good night!');
}
