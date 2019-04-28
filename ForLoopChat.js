
//to get the time
var d = new Date();
var n = d.toLocaleTimeString();
document.getElementById("time").innerHTML = n;

//to get the date
var m = new Date();
var s = m.toLocaleDateString();

document.getElementById("date").innerHTML = s;

var id = [
"one",
"two",
"three",
"four",
"test", 
"test2"];

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

//window.onclick = AnswerOnClick;
var i = 0;

function AnswerOnClick() {
	//to get the time
var da = new Date();
var ts = d.toLocaleTimeString();

 document.getElementById(id[i]).innerHTML = data[i];
 document.getElementById(id[i]).style.display = 'block';
 document.getElementById(time[i]).innerHTML = ts;
 
 i++;
	 
}

function AnswerOnPrev(){
 i--;
 document.getElementById(id[i]).innerHTML = data[i];
 document.getElementById(id[i]).style.display = 'none';
 document.getElementById(time[i]).style.display = 'none';
 document.getElementById("date1").innerHTML = n;
 
}

