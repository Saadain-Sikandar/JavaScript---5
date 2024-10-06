// 1. Write a program that displays current date and time in
// your browser.


// var currDate = new Date();
// document.write(`<h3> Current date and time are: ${currDate} <\h3>`);


// --------------------------------------------------------------------------------------------

// 2. Write a program that alerts the current month in words.
// For example December.



// var currMonth = new Date();
// currMonth = currMonth.getMonth();
// var monthIndex= ["January","February","March","April","May","june","July","August","September","October"
//     ,"November","December"];

// var presentMonth = monthIndex[currMonth];
// alert(`CURRENT MONTH: ${presentMonth}`);

// ------------------------------------------------------------------------------------------------------


// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

// var currDay = new Date();
// currDay = currDay.getDay();
// var days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
// var presentDay = days[currDay];

// alert(`Today is:${presentDay}`);


// ----------------------------------------------------------------------------------------------------------------


// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

// var currDay = new Date();
// currDay = currDay.getDay();
// var days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
// var presentDay = days[currDay];
// if(currDay === "Sun"){

//     alert(`Its a Fun Day:${presentDay}`);
    
// }
// else{

//     alert(presentDay);
// }


// ------------------------------------------------------------------------------------------------------------------------


// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

// var currDate = new Date();
// var daysofMonth = currDate.getDate();

// if(daysofMonth<16){

//     alert(`First Fifteen Days of Month.`);

// }
// else{

//     alert(`last Fifteen days of Month.`);

// }

// ---------------------------------------------------------------------------------------------


// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// var time  = new Date();

// var minutes = time.getTime(1,"jan",1970);       // 1 Minute equals 60 seconds

// var totalMin = minutes/60000;

// alert(totalMin);


// ------------------------------------------------------------------------------------------------------

// 7.Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”. in js

// var currTime = new Date();
// var hours = currTime.getHours();

// if(hours<12){

//     alert(`Its AM`);
    
// }
// else{

//     alert(`Its PM`);
// }

// ------------------------------------------------------------------------------------------

// 8. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

var currYear = new Date();
currYear = currYear.getFullYear();

var birthYear = prompt("Enter Your Birth year:");

var age = currYear - birthYear;
alert(`Your Age is: ${age}`);