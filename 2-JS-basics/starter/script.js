// var firstName = 'John';
// console.log(firstName);

// var lastName = 'Smith';
// var age = 28;

// var fullAge = true;
// console.log(fullAge);

// var job;

// var job, isMarried;
// job = 'teacher';
// isMarried = false;

// console.log( firstName + ' is a ' + age + ' years old. Is he married? ' +  isMarried);

// var lastName = prompt ('What is your last name?');
// console.log(firstName + ' ' + lastName);

// var currentYear, yearJohn, yearMark;

// ageJohn = 28;
// ageMark = 33;

// currentYear = 2018;
// yearJohn = currentYear - ageJohn;
// yearMark = currentYear - ageMark;

// console.log(yearJohn);
// console.log(yearMark);

// console.log(currentYear - 2);


// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);


// console.log(typeof johnOlder);
// console.log(typeof ageMark);
// console.log(typeof 'this is a string');

// var x;
// console.log(typeof x);


// CODING CHALLENGE 1

// var massMark = 50;
// var massJohn = 65;

// var markHeight = 1.8;
// var johnHeight = 1.5;

// console.log('Mark\'s BMI is ' + massMark / (markHeight * markHeight));
// console.log('John\'s BMI is ' + massJohn / (johnHeight * johnHeight));

// var markBMI = massMark / (markHeight * markHeight);
// var johnBMI = massJohn / (johnHeight * johnHeight);

// var markHigherThanJohn = markBMI > johnBMI;

// console.log("is Mark's BMI higher than John's? " + markHigherThanJohn);




// If & Else Statement

// var firstName = 'John';
// var civilStatus = 'single';

// if (civilStatus === 'married'){
// 	console.log(firstName + ' is married!');
// }

// else {
// 	console.log(firstName + ' is single!');
// }


// var massMark = 50;
// var massJohn = 65;

// var markHeight = 1.8;
// var johnHeight = 1.5;

// console.log('Mark\'s BMI is ' + massMark / (markHeight * markHeight));
// console.log('John\'s BMI is ' + massJohn / (johnHeight * johnHeight));

// var markBMI = massMark / (markHeight * markHeight);
// var johnBMI = massJohn / (johnHeight * johnHeight);

// var markHigherThanJohn = markBMI > johnBMI;

// if (markBMI > johnBMI){
// 	console.log('Mark\'s BMI is higher than John\'s BMI ')
// } else {
// 	console.log('John\'s BMI is higher than Mark\'s BMI')
// }




// TERNARY & SWITCH

var firstName = 'John';
var underAge = 16;

// age >= 21 ? console.log( firstName + ' is okay to drink beer') : console.log(firstName + ' is not okay to drink beer');

// TERNARY OPERATOR 
// var drink = age >= 21 ? 'beer' : 'juice';
// console.log(drink);

// IF ELSE STATEMENT
// if (underAge >= 21) {
// 	console.log('beer')
// } else {
// 	console.log('juice')
// };

// var age = prompt ('How old is John?');

// if (age >= 21) {
// 	console.log('You are okay to drink beer');
// } else {
// 	console.log('You are too young to drink beer');
// }


// Switch operation

// var job = prompt ('What is your occupation?');

// switch (job) {
// 	case 'teacher' : 
// 	console.log(firstName + ' teaches kids how to code.');
// 	break;

// 	case 'designer' : 
// 	console.log(firstName + ' designs beautiful websites.');
// 	break;

// 	case 'barista' :
// 	console.log(firstName + ' makes delicious coffee');
// 	break;

// 	default : 
// 	console.log(firstName + ' does something else');
// }






// Function

// function calculateAge (birthYear) {
// 	return 2018 - birthYear;
// }

// var ageAna = calculateAge(1989);
// var ageTom = calculateAge(1964);
// var ageJane = calculateAge(1980);

// console.log(ageAna, ageTom, ageJane);

// // DRY = Don't Repeat Yourself

// function yearsUntilRetirement (year, firstname) {
// 	var age = calculateAge(year);
// 	var retire = 65 - age;

// 	if (retire > 0 ){
// 		console.log(firstname + ' retires in ' + retire + ' years.')
// 	} else {
// 		console.log(firstname + ' is already retired ' + retire + ' years ago.')
// 	}
// }

// yearsUntilRetirement(1989, 'Ana');
// yearsUntilRetirement(1944, 'Tom');
// yearsUntilRetirement(1980, 'Jane');


// FUNCTION DECLARATION
// function whatDoYouDo (job, firstname);


// FUNCTION EXPRESSION
// var whatDoYouDo = function(job, firstname){

// 	switch(job){
// 		case 'teacher': 
// 			return firstname + ' teachers kids how to code.';

// 		case 'driver':
// 			return firstname + ' drives limo.';

// 		case 'designer':
// 			return firstname + ' designs websites';

// 		default: 
// 			return firstname + ' does something else';
// 	}
// }
// console.log(whatDoYouDo('developer', 'Tom'));

// ARRAYS

var names = ['John', 'Mark', 'Jane'];
var years = new Array (1989, 1974, 1980);

console.log(names, years[0]);
console.log(names.length);

names[1] = 'Ana';
names[names.length] = 'Mary;'
console.log(names);


var ana = ['Ana', 'Kwon', 1989, 'teacher', true];
ana.push('burgundy');

console.log(ana.indexOf('designer'));


if (ana.indexOf('teacher') === -1)  {
	console.log('She is NOT a teacher')
} else {
	console.log('She is a teacher')
};
console.log(ana);













































