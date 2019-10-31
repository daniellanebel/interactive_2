let clockEl = document.querySelector('#clock')
let timeEl = document.querySelector('#time')
let secondHand = document.querySelector('#secondHand')

let burgerBox = document.querySelector('#burgerBox')

// run getTime once on load




let d = new Date();

// get hours, minutes, and seconds from the date object

let h = addZeroIfNeeded(d.getHours());
let m = addZeroIfNeeded(d.getMinutes());
let s = addZeroIfNeeded(d.getSeconds());

// update the clock's text with our time vars

let timeText = h + ":" + m + ":" + s
timeEl.innerText = timeText


getTime();

// call getTime every 1 second going forward

setInterval(function() {
  getTime();
}, 1000);


// set up time getting function

function getTime(){
  
  // get the date object
  
  let now = new Date()
  let timePassed = Math.floor((now - d) / 1000 / 60)
  
  console.log(timePassed)
  

  // rotate secondHand based on the second value
  
  // s ranges from 0 to 60, so to turn it into degrees
  // we need to multiply s by 6
  
//   secondHand.style.transform = 'rotate('+ s * 6 +'deg)'  
  
//   // detect if its a minute divisible by 5
  
//   if(m % 5 == 0){
//   	clockEl.classList.add('aFiveMinute');
//   } else {
//   	clockEl.classList.remove('aFiveMinute');
//   }
  
  
  
  
  for(let counter = 0; counter < 15; counter++){
    let burger = document.createElement('div')
    burger.classList.add('burger')
    burgerBox.appendChild(burger)
  }
  
}

// add a zero to times below 10

function addZeroIfNeeded(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}