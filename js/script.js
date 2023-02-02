var today = new Date();

//Current hour
var hourNow = today.getHours();

//Current minutes
var minutesNow = today.getMinutes();

//Greeting
var greeting;


// CREDITS FOR padStart to: https://www.tutorialspoint.com/How-to-pad-a-number-with-leading-zeros-in-JavaScript 
//Time for today
var time = hourNow.toString().padStart(2, '0') + ":" + minutesNow.toString().padStart(2, '0') 



//Weekday array
var weekday = new Array(7);
weekday[0]="Sunday";
weekday[1]="Monday";
weekday[2]="Tuesday";
weekday[3]="Wednesday";
weekday[4]="Thursday";
weekday[5]="Friday";
weekday[6]="Saturday";


//Use conditions to find out what greeting to use. Morning = 5 to 12, Afternoon = 13 to 17, Evening = 17 to 4. Use else if because of more than 2 conditions.
if (hourNow >=5 && hourNow <= 12){
greeting ="Good Morning";
}
else if(hourNow >= 13 && hourNow <= 17){
greeting = "Good Afternoon";
}
else if(hourNow >= 17 && hourNow <= 4){
greeting="Good Evening";
}

// Use document.write so you don't have to write the elements in html. This also adds a </br> because it writes as a block element.

//greeting according to current time 
document.write("<h3>" + greeting + "</h3>");

//time now
document.write("<h3>" + time + "</h3>")

//today.getDay() gives a number for current day. weekday[] prints out the day from the number received
document.write("<h4>" + weekday[today.getDay()] + "</h4>")

//prøver bare lige at lege lidt det med at forkert 
document.write("<h4> Closed on "  + weekday[0] + "s </h4>")