var year = new Date().getFullYear() + 1;
var date = new Date('Jan 1, ' + year.toString() + ' 00:00:00');
var countDate = date.getTime();

document.getElementById('year').innerText = year;
document.getElementById('dayOfWeek').innerText = dayOfWeek(date.getDay());

function dayOfWeek(day) {	
	switch(day){
		case 1: return 'Monday'; break;
		case 2: return 'Tuesday'; break;
		case 3: return 'Wednesday'; break;
		case 4: return 'Thursday'; break;
		case 5: return 'Friday'; break;
		case 6: return 'Saturday'; break;
		default: return 'Sunday'; break;
	}
}

function newYear() {
	var now = new Date().getTime();
	var	gap = countDate - now;
	var second = 1000;
	var minute = second * 60;
	var hour = minute * 60;
	var day = hour * 24;
	var d = Math.floor(gap/ day);
	var h = Math.floor((gap % day) / hour);
	var m = Math.floor((gap % hour) / minute);
	var s = Math.floor((gap % minute) / second);

	document.getElementById('day').innerText = d;
	document.getElementById('hour').innerText = h;
	document.getElementById('minute').innerText = m;
	document.getElementById('second').innerText = s;
}

setInterval(function() {
	newYear();
}, 1000);