// Chapter-6-9-Math-Expression 

// Question-1
var number = prompt("write any number:");
document.write("Result:" + "<br>" + "The value of a is: " + number + "<br>" + "------------------------------");
var incrementNumber = ++number ;
document.write("<br>" + "The value of ++a is: " + number + "<br>" + "The new value is " + incrementNumber );
var incrementNumber2 = incrementNumber++ ;
document.write("<br>" + "The value of a++ is: " + incrementNumber + "<br>" + "The new value is " + incrementNumber2 );
var decrementNumber = --incrementNumber2 ;
document.write("<br>" + "The value of --a is: " + incrementNumber2 + "<br>" + "The new value is " + decrementNumber );
var decrementNumber2 = decrementNumber-- ;
document.write("<br>" + "The value of a-- is: " + decrementNumber + "<br>" + "The new value is " + decrementNumber2 );

// Question-2
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("a = " + a + "<br>" + "b = " + b + "<br>" + "Result = " + result );

// Question-3
var userName = prompt("What is your Name?");
alert("Welcome " +  userName);

// Question-4
var num = prompt("Enter Number", "0");
var num = parseInt(num);
var i = 5;
document.write('<table border="1" cellspacing="0">');
for (i = 1; i <= 10; i++) {
  document.write("<tr><td>" + num + " x " + i + " = " + num * i + "</td></tr>");
}

// Question-5
var subject1 = prompt("Write name of first subject:");
var subject2 = prompt("Write name of second subject:");
var subject3 = prompt("Write name of third subject:");
var totalMarks = 100;
var marks1 = prompt("Write marks of third subject:");
var marks2 = prompt("Write marks of third subject:");
var marks3 = prompt("Write marks of third subject:");
var totalMarks = 100*3;
var totalObtainedMarks = marks1 + marks2 + marks3 ;
var percentage = (totalObtainedMarks/totalMarks)*100;
document.write("<table border='1'><tr><td>Subject</td><td>Total Marks</td><td>Obtained Marks</td><td>Percentage</td></tr><tr><td>subject1</td><td>subject2</td><td>subject3</td></tr></table>")
