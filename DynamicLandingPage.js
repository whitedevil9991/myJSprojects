// DOM(document object model) elements
const time = document.getElementById('time'),
greeting=document.getElementById('greeting'),
name=document.getElementById('name'),
focus=document.getElementById('focus');

// a function to show the time
function showtime() {
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds(),

    //Set AM or PM
    const amPm = hour >=12 ? 'PM' : 'AM';

    // 12hr format
    hour = hour%12 | 12 ;

    //output the time
    time.innerHTML='${hour}<span>:</span>${min}<span>:</span>${sec}';


    /*takes in function showtime and when do we want to call it, like in interval
    here we set the interval to 1000, which means 1000 milliseconds*/
    setTimeout(showtime, 1000);
}

//run
showtime();