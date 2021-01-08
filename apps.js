const secondHand = document.querySelector('.second-hand');
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');

function secondChangeHandler(){
    const date = new Date();

    const seconds = date.getSeconds();
    const secondsDegree = ((seconds/60)*360) + 90; //we add 90 to offset the 90deg transform that we applied in the CSS 
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;

    const hours = date.getHours();
    const hoursDegree = ((hours/12)*360) + 90;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;

    const minute = date.getMinutes();
    const minuteDegree = ((minute/60)*360) + 90;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;

    console.log("Hours:",hours);
    console.log("Minute:",minute);
    console.log("Seconds:",seconds);

}

setInterval(secondChangeHandler, 1000);