// Chapter-5-Math-Expression 

// Question-1
var number1 = prompt("Write first number:");
var number2 = prompt("Write second number:");
var result = parseInt(number1) + parseInt(number2);
document.write("Sum of " + number1 + " and " + number2 + " is " + result);

// Question-2
var number1 = prompt("Write first number  for Addition:");
var number2 = prompt("Write second number  for Addition:");
var result = parseInt(number1) - parseInt(number2);
document.write("<br>" + "Subraction of " + number1 + " and " + number2 + " is " + result);

var number1 = prompt("Write first number  for Multiplication:");
var number2 = prompt("Write second number  for Multiplication:");
var result = parseInt(number1) * parseInt(number2);
document.write("<br>" + "Multiplication of " + number1 + " and " + number2 + " is " + result);

var number1 = prompt("Write first number  for Modulus:");
var number2 = prompt("Write second number  for Modulus:");
var result = parseInt(number1) % parseInt(number2);
document.write("<br>" + "Modulus of " + number1 + " and " + number2 + " is " + result);

// Question-3
var firstValue;
document.write("Value after variable declaration is " + firstValue);
firstValue = 5;
document.write("<br>" + "Initial value: " + firstValue);
var newvalue = ++firstValue
document.write("<br>" + "Value after increment: " + newvalue);
var valueAfterAdd = newvalue + 7;
document.write("<br>" + "Value after Addition: " + valueAfterAdd);
var decrementValue = --valueAfterAdd;
document.write("<br>" + "Value after decrement: " + decrementValue);
var modulusValue = decrementValue % 3;
document.write("<br>" + "The remainder is: " + modulusValue);

// Question-4
var ticketPrice = 600;
var ticketPriceForFiveTickets = ticketPrice * 5;
document.write("<br>" + "Total cost to buy 5 tickets to a movie is " + ticketPriceForFiveTickets + "PKR");

// Question-5
var num = 4;
document.write("Table Of " + num)
document.write("<br>" + "4 X 1 = " + (num*1));
document.write("<br>" + "4 X 2 = " + (num*2));
document.write("<br>" + "4 X 3 = " + (num*3));
document.write("<br>" + "4 X 4 = " + (num*4));
document.write("<br>" + "4 X 5 = " + (num*5));
document.write("<br>" + "4 X 6 = " + (num*6));
document.write("<br>" + "4 X 7 = " + (num*7));
document.write("<br>" + "4 X 8 = " + (num*8));
document.write("<br>" + "4 X 9 = " + (num*9));
document.write("<br>" + "4 X 10 = " + (num*10));

// Question-6
var celsius = prompt("Write the temperature in Celsius:");
var celsiusIntoFahrenheit = (celsius*(9/5)+32)
document.write(celsius + "C" + " is " + celsiusIntoFahrenheit + "F" )
var fahrenheit = prompt("Write the temperature in fahrenheit:");
var fahrenheitIntoCelsius = ((fahrenheit-32)*(5/9))
document.write("<br>" + fahrenheit + "F" + " is " + fahrenheitIntoCelsius + "C" )

// Question-7
var price1 = 650;
var price2 = 100;
var quantity1 = 3;
var quantity2 = 7;
var shippingCharges = 100;
var total = (price1*quantity1) + (price2*quantity2) + shippingCharges
document.write("Shopping Cart" + "<br>" + "Price of item 1 is " + price1  + "<br>" + "Price of item 2 is " + price2  + "<br>" + "Quantity of item 1 is " + quantity1  + "<br>" + "Quantity of item 2 is " + quantity2  + "<br>" + "Shipping Charges is " + shippingCharges  + "<br>" + "Total cost of your order is " + total);

// Question-8
var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained/totalMarks)*100;
document.write("Marks Sheet" + "<br>" + "Total marks: " + totalMarks + "<br>" + "Marks Obtained: " + marksObtained + "<br>" + "Percentage: " + percentage + "%");

// Question-9
var saudiRiyalsIntoPkr = 25*28, dollarIntoPkr = 10*104.80, totalPkr = saudiRiyalsIntoPkr + dollarIntoPkr;
document.write("Currency in PKR" + "<br>" + "Total Currency in PKR: " + totalPkr);

// Question-10
var number3 = Number(prompt("write a number:"));
var newNumber = ((number3 + 5)*10)/2;
document.write(newNumber);

// Question-11
var currentYear = prompt("Write your current year:");
var birthYear = prompt("Write your birth year:");
var age = currentYear - birthYear;
document.write("<br>" + "Age Calculator" + "<br>" + "Your Age is " + age);

// Question-12
var radius = prompt("What is the radius of circle");
var circumference = 2*3.142*radius;
var areaOfCircle = 3.142*radius*radius;
document.write("<br>" + "The Geometrizer" + "<br>" + "Radius of a circle: " + radius + "<br>" + "The Circumference is: " + circumference + "<br>" + "The area is: " + areaOfCircle);

// Question-13
var favouriteSnack = prompt("Write your favourite Snack:");
var yourCurrentAge = prompt("what is your current age:");
var yourEstimateAge = prompt("what is your Estimate age:");
var yourDailyCosumption = prompt("what is your Daily Consumption:");
var requirement = ((yourEstimateAge-yourCurrentAge)*365)*yourDailyCosumption;
document.write("<br>" + "The Lifetime Supply Calculator" + "<br>" + "Favourite snack: " + favouriteSnack + "<br>" + "current age: " + yourCurrentAge + "<br>" + "Estimated Maximum Age: " + yourEstimateAge + "<br>" + "Amount of snacks per day: " + yourDailyCosumption + "<br>" + "you will need " + requirement + " " + favouriteSnack + "to last you until the ripe old age" + yourEstimateAge );
