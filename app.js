//UI variables
const hourHand = document.querySelector('.to-hand');
const minutesHand = document.querySelector('.after-hand');
const secHand = document.querySelector('.sec-hand');
const time = document.querySelector('.time');
const greeting = document.querySelector('.greeting');
const weather = document.querySelector('#weather');

//get hours degreee
let hourDegrees = (new Date().getHours() * 30);


//update clock hands
function moveClockHands() {
  //get current date
  const date = new Date();

  //get minutes deg
  const minutesDegrees = date.getMinutes() * 6;
  const secondsDegrees = date.getSeconds() * 6;

  // transform property to degrees
  hourHand.style.transform = `rotate(${(hourDegrees += 0.00833)}deg)`;
  secHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
}

//update time
function updateTime() {
  const date = new Date();
  const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  const hours = date.getHours();

  // get morning afternoon time and convert to 12hrs
  const morning = date.getHours() < 1 ? date.getHours() + 12 : date.getHours();
  const afternoon = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();

  if (hours !== 12 && hours < 12) {
    //morning
    time.textContent = `${morning}:${minutes} AM`;
    greeting.textContent = 'Good Morning';
    weather.className = 'fas fa-sun fa-lg';
  } else if (hours >= 16) {
    //evening
    time.textContent = `${afternoon}:${minutes} PM`;
    greeting.textContent = 'Good Evening';
    weather.className = 'fas fa-cloud-moon fa-lg';
  } else {
    //after
    time.textContent = `${afternoon}:${minutes} PM`;
    greeting.textContent = 'Good Afternoon';
    weather.className = 'fas fa-cloud-sun fa-lg';
  }
}

//move clock hands and update time every 1000s
setInterval(moveClockHands, 1000);
setInterval(updateTime, 1000);