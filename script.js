$( document ).ready(function() {

const $calendar = $(".calendar");

let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth() + 1;
let currentDayNum = new Date().getDay()
let currentDay;

let numberOfDaysInMonth = new Date(currentYear, currentMonth, 0).getDate();















function findCurrentDay() {
	switch (currentDayNum) {
		case 0:
			currentDay = "Sunday";
			break;
		case 1:
			currentDay = "Monday";
			break;
		case 2:
			currentDay = "Tuesday";
			break;
		case 3:
			currentDay = "Wednesday";
			break;
		case 4:
			currentDay = "Thursday";
			break;
		case 5:
			currentDay = "Friday";
			break;
		case 6:
			currentDay = "Saturday";
	}
	return currentDay;
}

findCurrentDay();












function getFirstDay() {
	const date = new Date(currentYear, currentMonth - 1, 1); // first day of the month
	return date.getDay();
}




let firstDayOfMonth = getFirstDay();

let $numberRowOne = $('<div></div>').addClass('row');
let $numberRowTwo = $('<div></div>').addClass('row ');
let $numberRowThree = $('<div></div>').addClass('row');
let $numberRowFour = $('<div></div>').addClass('row numRow');
let $numberRowFive = $('<div></div>').addClass('row numRow');
let $numberRowSix = $('<div></div>').addClass('row numRow');


// function createBlankSpaces() {
// 	let dayArr = [];
// 	for (let i = 0; i < firstDayOfMonth; i++) {
// 		dayArr.push(i);
// 	}


// 	//const $newRow = $('<div></div>').addClass('row');
// 	// const $numberRowOne = $('<div></div>').addClass('row');
// 	for (let i = 0; i < dayArr.length; i++) {
// 		let $newCol = $('<div></div>').addClass('col border')
// 		$numberRowOne.append($newCol)
// 	}
// 	// $calendar.append($newRow)

// } 

// createBlankSpaces();





















function createDaysArray(days) {
	let i = 1;
	const daysArr = [];
	for (i; i <= days; i++) {
		daysArr.push(i);
	}

	return daysArr;
}

let numOfDaysArr = createDaysArray(numberOfDaysInMonth);













let numberRowCounter = 0

function createCalendar() {
	//Generate Days of Week Row
	const $daysOfWeekRow = $("<div></div>").addClass("row");

	const dayOfWeekArray = [
		"sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	let dayOfWeekCounter = 0;
	dayOfWeekArray.forEach(function(day) {
		let $newCol = $("<div></div>").addClass(`col border ${dayOfWeekCounter}`);
		$newCol.text(day);
		$daysOfWeekRow.append($newCol);
		dayOfWeekCounter++;
	});
	$calendar.append($daysOfWeekRow);

	

	


	
	
	
	
	
	
	
	
	
	
	
	//Generate the number columns
	// let $numberRowOne = $('<div></div>').addClass('row');
	// let $numberRowTwo = $('<div></div>').addClass('row');
	// let $numberRowThree = $('<div></div>').addClass('row');
	// let $numberRowFour = $('<div></div>').addClass('row');
	// let $numberRowFive = $('<div></div>').addClass('row');
	
	createBlankSpaces(numberRowCounter);
	numOfDaysArr.forEach(function(num) {
		if (numberRowCounter < 7) {
			let $newCol = $("<div></div>").addClass(`col border ${numberRowCounter}`);
			$newCol.text(num);
			$numberRowOne.append($newCol);
			$calendar.append($numberRowOne);
			numberRowCounter++
		} else if (numberRowCounter < 14) {
			let $newCol = $("<div></div>").addClass(`col border ${numberRowCounter}`);
			$newCol.text(num);
			$numberRowTwo.append($newCol);
			$calendar.append($numberRowTwo);
			numberRowCounter++	
		} else if (numberRowCounter < 21) {
			let $newCol = $("<div></div>").addClass(`col border ${numberRowCounter}`);
			$newCol.text(num);
			$numberRowThree.append($newCol);
			$calendar.append($numberRowThree);
			numberRowCounter++	
		} else if (numberRowCounter < 28) {
			let $newCol = $("<div></div>").addClass(`col border ${numberRowCounter}`);
			$newCol.text(num);
			$numberRowFour.append($newCol);
			$calendar.append($numberRowFour);
			numberRowCounter++	
		} else if (numberRowCounter < 35) {
			let $newCol = $("<div></div>").addClass(`col border ${numberRowCounter}`);
			$newCol.text(num);
			$numberRowFive.append($newCol);
			$calendar.append($numberRowFive);
			numberRowCounter++	
		} else {
			let $newCol = $("<div></div>").addClass(`col border ${numberRowCounter}`);
			$newCol.text(num);
			$numberRowSix.append($newCol);
			$calendar.append($numberRowSix);
			numberRowCounter++		
		}

		
		
		
		
		
	});


	let lastRow = $calendar.children().last();
	let lastRowLength =	$calendar.children().last().children().length; 
	
	
	if ($calendar.children().last().children().length < 7) {
		for (let i = 0; i < lastRowLength; i++) {
			
		}
		let newCol = $('<div></div>').addClass('col border').text('haha');
		lastRow.append(newCol)
	}
}


createCalendar();















function createBlankSpaces() {
	let dayArr = [];
	for (let i = 0; i < firstDayOfMonth; i++) {
		dayArr.push(i);
	}


	//const $newRow = $('<div></div>').addClass('row');
	// const $numberRowOne = $('<div></div>').addClass('row');
	for (let i = 0; i < dayArr.length; i++) {
		let $newCol = $('<div></div>').addClass('col border')
		$numberRowOne.append($newCol)
		numberRowCounter++
	}
	// $calendar.append($newRow)

} 







});