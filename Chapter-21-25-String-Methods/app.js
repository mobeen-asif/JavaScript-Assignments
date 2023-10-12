// Chapter-21-25-String-Methods

// Question-1
var firstName = prompt('Write the first name:');
var lastName = prompt('Write the last name:');
var fullName = firstName + ' ' + lastName ;
alert(`${fullName} Welcome to the Website.`);


// Question-2
var favoriteMobile = prompt('Write the name of your favorite mobile phone model.');
var lengthOfString = favoriteMobile.length ;
document.write('My favorite phone is: ' + favoriteMobile + '<br>' + 'Length of string: ' + lengthOfString);


// Question-3
var nationality = 'Pakistani';
var positionOfCharacter = nationality.indexOf('n');
document.write('Nationality: ' + nationality + '<br>' + 'Index of n:' + positionOfCharacter);


// Question-4
var greeting = 'Hello World!';
var positionOfCharacter = greeting.lastIndexOf('l');
document.write('String: ' + greeting + '<br>' + 'Last index of l: ' + positionOfCharacter);


// Question-5
var word = 'Pakistani';
var indexOfCharacter = word[3];
document.write('String: ' + word + '<br>' + 'character at index 3: ' + indexOfCharacter);


// Question-6
var firstName = prompt('Enter your first name:');
var lastName = prompt('Enter your last name:');
var fullName = firstName.concat(" ", lastName);
alert( fullName + ' Welcome.');


// Question-7
var city = 'Hyderabad';
var replaceCity = city.replace('Hyder', 'Islam');
document.write('City: ' + city + '<br>' + 'After replacement: ' + replaceCity);


// Question-8
var message = 'Ali and Sami are best friends. They play cricket and football together.';
var afterReplacement = message.replaceAll('and' , '&');
document.write('Message: ' + message + '<br>' + 'After replacement: ' +  afterReplacement);


// Question-9
var numberInString = '472';
var convertedNumber = parseInt(numberInString);
var typeOfNumberString = typeof(numberInString);
var typeOfNumberValue = typeof(convertedNumber);
document.write('Value: ' + numberInString + '<br>' + 'value: ' + typeOfNumberString + '<br>' + 'Value: ' + convertedNumber + '<br>' + 'value: ' + typeOfNumberValue);


// Question-10
var userInput = prompt('Enter any text:');
var convertedIncapital = userInput.toUpperCase();
document.write('User input: ' + userInput + '<br>' + 'Upper Case: ' + convertedIncapital);
