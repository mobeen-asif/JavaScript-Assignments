// Chapter-12-13-If-Else-And-Else-If-Statement-Testing-Set-Of-Conditions

// Question-1




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
var password = prompt("Write your password:");
if (password !== ""){
    alert("Please Enter your Password")
}
var passwordCheck = prompt("What is your password:");
if (password === passwordCheck){
    alert("Correct!");
}
else {
    alert("Incorrect...");
}
