// DOM(document object model) elements
const time = document.getElementById('time'),
greeting=document.getElementById('greeting'),
name=document.getElementById('name'),
focus=document.getElementById('focus');

//options
const showAmPm = true;
 
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

    //output time
    time.innerHTML='${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}${showAmPm ? amPm : }';


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


function getName(){
    if(localStorage.getItem('name')==null) {
        name.textContent='[enter name]';
    }
    else {
        name.textContent=localStorage.getItem('name');
        }
}
//set name 
function setName(){
    if(e.type==='keypress'){

        //make sure enter is pressed
        if(e.which == 13 || e.keyCode ==13){
           localStorage.setItem('name',e.target.innerText);
           name.blur(); 
        }
    } else{
        localStorage.setItem('name', e.target.innerText);
    }
}
/*get focus = this stores the focus thing you edited so the next time you refresh
the screen it will be saved in the local storage*/
function getFocus(){
    if(localStorage.getItem('focus')==null) {
        focus.textContent='[enter focus]';
    }
    else {
        focus.textContent=localStorage.getItem('focus');
        }
}
//set focus
function setFocus(e){
    if(e.type==='keypress'){

        //make sure enter is pressed
        if(e.which == 13 || e.keyCode ==13){
           localStorage.setItem('focus',e.target.innerText);
           focus.blur(); 
        }
    } else{
        localStorage.setItem('focus', e.target.innerText);
    }
}

//
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);


//run
ShowTime();
setbg();
getFocus();
getName();