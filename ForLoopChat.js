

//Return the time portion of a Date object as a string using "toLocaleTimeString"
//to get the current time
var d = new Date();
var n = d.toLocaleTimeString();
document.getElementById("time").innerHTML = n;

//Return the Date object as a string using existing function called "toLocaleDateString"
//to get the current date
var m = new Date();
var s = m.toLocaleDateString();


document.getElementById("date").innerHTML = s;

//Array of words to display in chat
var id = [
"one",
"two",
"three",
"four",
"test", 
"test2"];

//Array of words to display in chat
var data = [
"How do I see prices?",
"We have a price tracker",
"Oh ok thats great",
"Do you have more questions?",
"No more questions", 
"Thank you for the help"];

var time = [
"date1",
"date2",
"date3",
"date4",
"date5",
"date6"];


var i = 0;


//The AnswerOnClick function is executed on the click on "Next".  It is built to populate each 
//line from the data array based on the index that currently is being used in the loop.  
//The loop also calls the date and time function so that to dsplay with the individual 
//chat message.  The display 'block' causes the HTML text in chat to be visible.
function AnswerOnClick() {
	//to get the time
var da = new Date();
var ts = d.toLocaleTimeString();

 document.getElementById(id[i]).innerHTML = data[i];       
 document.getElementById(id[i]).style.display = 'block';   
 document.getElementById(time[i]).innerHTML = ts;          
 
 i++;
	 
}


//The AnswerOnPrev function is executed on the click on "Previous".  It hides the text message
//and timestamp by turning on display stype of 'none'

function AnswerOnPrev(){
 i--;
 document.getElementById(id[i]).innerHTML = data[i];
 document.getElementById(id[i]).style.display = 'none';     // hide message text
 document.getElementById(time[i]).style.display = 'none';   // hide time stamp
 document.getElementById("date1").innerHTML = n;
 
}






