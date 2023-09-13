// Chapter-9-11-User-Input-And-Conditional-Statement 


// Question-1
var city = prompt("Write the name of your city:");
if ( city === "karachi" ) {
    alert("Welcome to city of lights.");
}
else {
    alert("Invalid Input.");
}


// Question-2
var gender = prompt("What is your gender?");
if ( gender === "male" ) {
    alert("Good Morning Sir");
}
else if ( gender === 'female' ) {
    alert("Good Morning Ma'am");
}
else {
    alert("Invalid Input");
}


// Question-3
var signalColor = prompt("What is color of light on signal?");
if (signalColor === 'red') {
    alert('Must Stop');
}
else if(signalColor === 'yellow') {
    alert("Ready to Move");
}
else if (signalColor === 'green'){
    alert("Move now");
}
else {
    alert("Invalid Input");
}


// Question-4
var fuelLeft = prompt("How many litres of fuel left in a car?");
if (fuelLeft < 0.25) {
    alert("Please refill the fuel in your car.");
}
else{
    alert("The fuel is sufficient to travel.");
}

// Question-5
// a 
var a = 4;
if ( ++a === 5 ) {
    alert("given condition for variable a is true.");
}

// (..............Displayed.............)

// b 
var b = 82;
if ( b++ === 83 ) {
    alert("given condition for variable b is true.");
}

// (..............Not Displayed.............)

// c 
var c = 12;
if ( c++ === 13 ) {
    alert("condition 1 is true.");
}
if ( c === 13 ) {
    alert("condition 2 is true.");
}
if ( ++c < 14 ) {
    alert("condition 3 is true.");
}
if ( c === 14 ) {
    alert("condition 4 is true.");
}

// (..............Displayed condition 2 and 4 is true..............)

// d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost ;
if ( totalCost === laborCost + materialCost ) {
    alert("The cost equals");
}

// (..............Displayed.............)

// e
if ( true ) {
    alert("True");
}
if (false) {
    alert("Flase");
}

// (..............Displayed only first condition.............)

// f 
if ("car" < "cat"){
    alert("car is smaller than cat");
}

// (..............Displayed.............)


// Question-6
var obtainedMarksInThreeSubjects = +prompt("Write the obtained marks of three subjects:");
var totalMarksInThreeSubjects = +prompt("Write the total marks of three subjects:");
var percentage =  (obtainedMarksInThreeSubjects / totalMarksInThreeSubjects)*100 ;
var grade ;
var remarks ;
if (percentage >= 80){
    grade = "A-one" ;
    remarks = "Excellent" ;
}
else if (percentage >= 70){
    grade = "A" ;
    remarks = "Good" ;
}
else if (percentage >= 60){
    grade = "B" ;
    remarks = "You need to improve" ;
}
else {
    grade = "Fail" ;
    remarks = "Sorry" ;
}
document.write("Marks Sheet" + "<br>" + "<br>" + "Total Marks: " + totalMarksInThreeSubjects + "<br>" + "Marks Obtained: " + obtainedMarksInThreeSubjects + "<br>" + "Percentage: " + percentage.toFixed(2) + "%" + "<br>" + "Grade: " + grade + "<br>" + "Remarks: " + remarks)


// Question-7
var numberToBeGuess = +prompt("Guess the secret number!");
if (numberToBeGuess === 8) {
    alert("Bingo! Correct Answer");
}
else if(numberToBeGuess === 7) {
    alert("Close enough to correct answer!");
}
else if(numberToBeGuess === 9) {
    alert("Close enough to correct answer!");
}
else{
    alert("This is not a secret number");
}


// Question-8
var numberToBeCheck = +prompt("write a number to check. it's divisible by 3 or not:");
numberToBeCheck =+ numberToBeCheck % 3 ;
if (numberToBeCheck === 0 ){
    alert("This number is divisible by 3");
}
else {
    alert("This number is not divisible by 3");
}


// Question-9
var numberToBeCheck = +prompt("write a number to be check:");
numberToBeCheck =+ numberToBeCheck % 2 ;
if (numberToBeCheck === 0 ){
    alert("This is an even number");
}
else {
    alert("This is an odd number");
}


// Question-10
var temperature = +prompt("Write the temperature.");
if ( temperature > 40){
    alert("It is too hot outside.")
}
else if ( temperature > 30){
    alert("The Weather today is Normal.")
}
else if ( temperature > 20){
    alert("Today’s Weather is cool.")
}
else if ( temperature > 10){
    alert("OMG! Today’s weather is so Cool.")
}


// Question-11
var num1 = +prompt("Enter the First number: ");
var num2 = +prompt("Enter the Second number: ");
var operator = prompt("Enter the operation (+, -, *, /, %): ");
var result;
if ( operator === "+" ) {
    result = num1 + num2 ;
}
else if ( operator === "-" ) {
    result = num1 - num2 ;
}
else if ( operator === "/") {
    if (num2 === 0) {
        alert("Cannot divide by 0");
    }
    else {
        result = num1 / num2 ;
    }
}
else if ( operator === "%" ) {
    if ( num2 === 0 ) {
        alert("Cannot calculate modulus with 0");
    }
    else {
        result = num1 % num2 ;
    }
}
else {
    alert("invalid operator");
}
alert("Result: " + result);