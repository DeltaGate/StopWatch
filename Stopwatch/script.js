let count = 0;

// set the time counter to zero

let timerVar;

// initlise timerVar as a global varible to run the setInterval within, this will allow me to refrence it later and end it

let tArray = [];
const list = document.getElementById("list");



const element = document.getElementById("timer");
const sButton = document.getElementById("sButton")
const pButton = document.getElementById("pButton")
const audio = new Audio('https://actions.google.com/sounds/v1/alarms/beep_short.ogg');

// Select the element specified by ID to use as a physical timer

function startTimer(){
    sButton.innerHTML = "Stop";
    sButton.onclick = endTimer;
    timerVar = setInterval(() => { ++count; audio.play(); var minutes = Math.floor(count / 60);
    var seconds = count % 60; element.innerHTML = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}` 
         }, 1000);
         console.log(count);

};

// fuction runs when called by start button, it calls the js setInterval to start counting time in 1000ms intervals (1 second)
// and then adding them to the counter, this counter is calculated by dividing the number by 60 giving minutes and the remanid of that 60 which gives seconds
// these numbers are then converted to strings to give paded starts to add a zero to give better formating for the user.

function endTimer(){
    sButton.innerHTML = "Start";
    sButton.onclick = startTimer
    clearInterval(timerVar);
    pButton.innerHTML = "Pause";
    pButton.onclick = pauseTimer;
    var minutes = Math.floor(count / 60);
    var seconds = count % 60;
    tArray.unshift(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
    if (tArray.length > 10) {
        tArray.length = tArray.length -1
    }
    count = 0;
    list.innerHTML = "";
    for(let i = 0; tArray.length > i; i++){
        let listItem = document.createElement('li');
        listItem.innerHTML = tArray[i];
        list.appendChild(listItem);
    }
};

// function when called ends the timer,
// resets button to start conditions,
// adds current time to an array of the last 10 times
// removes numbers from array if it gets too long
// removes all list items from ul on page and then readds the array to update the list.


function pauseTimer(){
    pButton.innerHTML = "Unpause";
    pButton.onclick = unpauseTimer;
    clearInterval(timerVar);
}

function unpauseTimer(){
    pButton.innerHTML = "Pause";
    pButton.onclick = pauseTimer;
    startTimer();
}