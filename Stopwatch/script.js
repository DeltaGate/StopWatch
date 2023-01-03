let count = 0;

// set the time counter to zero

let timerVar;

// initlise timerVar as a global varible to run the setInterval within, this will allow me to refrence it later and end it

let tArray = [];
const list = document.getElementById("test");



const element = document.getElementById("timer");
const button = document.getElementById("button")

// Select the element specified by ID to use as a physical timer

function startTimer(){
    button.innerHTML = "Stop";
    button.onclick = endTimer;
    timerVar = setInterval(() => { ++count, element.innerHTML = count
         }, 1000);
         console.log(count);
};

// fuction runs when called by start button, it calls the js setInterval to start counting time in 1000ms intervals (1 second)
// and then adding them to the counter

function endTimer(){
    button.innerHTML = "Start";
    button.onclick = startTimer
    clearInterval(timerVar);
    tArray.unshift(count);
    if (tArray.length > 10) {
        tArray.length = tArray.length -1
    }
    count = 0;
    list.innerHTML = "";
    console.log(tArray);
    for(let i = 0; tArray.length > i; i++){
        let listItem = document.createElement('li');
        listItem.innerHTML = tArray[i];
        list.appendChild(listItem);
        console.log("loop")
    }


};

// function when called ends the timer,
// resets button to start conditions,
// adds current time to an array of the last 10 times
// removes numbers from array if it gets too long
// removes all list items from ul on page and then readds the array to update the list.