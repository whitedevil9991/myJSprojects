// DOM(document object model) elements
const time = document.getElementById('time'),
greeting=document.getElementById('greeting'),
name=document.getElementById('name'),
focus=document.getElementById('focus');

// a function to show the time
function ShowTime() {
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds(),

    //Set AM or PM
    const amPm = hour >=12 ? 'PM' : 'AM';

    // 12hr format
    hour = hour%12 | 12 ;

    //output the time
    time.innerHTML='${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}';


    /*takes in function showtime and when do we want to call it, like in interval
    here we set the interval to 1000, which means 1000 milliseconds*/
    setTimeout(ShowTime, 1000);
}

//for adding zeros
function addZero(){
    return(parseInt(n,10)<10 ? '0' : '')+n;
}

//set background according to the time
function setbg(){
    let today = new Date();
    hour= today.getHours();

    if(hour>12) {
        //morning
        document.body.style.backgroundImage="";
        greeting.textContent='good morning';
    }
    else if(hour<18){
//afternoon
document.body.style.backgroundImage="";
greeting.textContent='good afternoon';
    }
    else{
        //evening
        document.body.style.backgroundImage="";
        greeting.textContent='good evening';
        document.body.style.color='white';
    }
}

//run
ShowTime();