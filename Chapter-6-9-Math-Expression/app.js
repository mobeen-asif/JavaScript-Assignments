// Chapter-6-9-Math-Expression 

// Question-1
var a = +prompt("write any number:");
document.write("Result:" + "<br>" + "The value of a is: " + a + "<br>" + "------------------------------" );
document.write("<br>" + "The value of ++a is: " + ++a + "<br>" + "Now the value of a is: " + a );
document.write("<br>" + "The value of a++ is: " + a++ + "<br>" + "Now the value of a is: " + a );
document.write("<br>" + "The value of a++ is: " + --a + "<br>" + "Now the value of a is: " + a );
document.write("<br>" + "The value of a++ is: " + a-- + "<br>" + "Now the value of a is: " + a );

// Question-2
var a = 2, b = 1;
var result = --a - --b + ++b + b-- ;
document.write("a = " + a + "<br>" + "b = " + b + "<br>" + "Result = " + result );

// Question-3
var userName = prompt("What is your Name?");
alert("Welcome " +  userName);

// Question-4
var num = prompt("Enter Number", "5");
var num = parseInt(num);
for (i = 1; i <= 10; i++) {
  document.write( num + " x " + i + " = " + num * i + '<br>');
}

// Question-5
var subject1 = prompt("Write name of first subject:");
var subject2 = prompt("Write name of second subject:");
var subject3 = prompt("Write name of third subject:");
var totalMarksIndividual = 100 ;
var marks1 = +prompt("Write marks of third subject:");
var marks2 = +prompt("Write marks of third subject:");
var marks3 = +prompt("Write marks of third subject:");
var totalMarks = 100 * 3 ;
var totalObtainedMarks = marks1 + marks2 + marks3 ;
var percentage = ( totalObtainedMarks / totalMarks ) * 100 ;
var subject1Percentage = ( marks1 / totalMarksIndividual ) * 100 ;
var subject2Percentage =  ( marks2 / totalMarksIndividual ) * 100 ;
var subject3Percentage = ( marks3 / totalMarksIndividual ) * 100 ;
document.write(`<table>`);
document.write(`<tr>`);
document.write(`<td>`+ 'Subject');
document.write(`</td>`);
document.write(`<td>`+ 'Total Marks');
document.write(`</td>`);
document.write(`<td>`+ 'Obtained Marks');
document.write(`</td>`);
document.write(`<td>`+ 'Percentage');
document.write(`</td>`);
document.write(`</tr>`);
document.write(`<tr>`);
document.write(`<td> ${subject1} `);
document.write(`</td>`);
document.write(`<td> ${totalMarksIndividual} `);
document.write(`</td>`);
document.write(`<td> ${marks1} `);
document.write(`</td>`);
document.write(`<td> ${subject1Percentage} % `);
document.write(`</td>`);
document.write(`</tr>`);
document.write(`<tr>`);
document.write(`<td> ${subject2} `);
document.write(`</td>`);
document.write(`<td> ${totalMarksIndividual} `);
document.write(`</td>`);
document.write(`<td> ${marks2} `);
document.write(`</td>`);
document.write(`<td> ${subject2Percentage}  % `);
document.write(`</td>`);
document.write(`</tr>`);
document.write(`<tr>`);
document.write(`<td> ${subject3} `);
document.write(`</td>`);
document.write(`<td> ${totalMarksIndividual} `);
document.write(`</td>`);
document.write(`<td> ${marks3} `);
document.write(`</td>`);
document.write(`<td> ${subject3Percentage}  % `);
document.write(`</td>`);
document.write(`</tr>`);
document.write(`<tr>`);
document.write(`<td>`);
document.write(`</td>`);
document.write(`<td> ${totalMarks} `);
document.write(`</td>`);
document.write(`<td> ${totalObtainedMarks} `);
document.write(`</td>`);
document.write(`<td> ${percentage}  % `);
document.write(`</td>`);
document.write(`</tr>`);
document.write(`</table>`);