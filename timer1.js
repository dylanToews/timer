//Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

const { number } = require("joi");

// to make sound use ---   process.stdout.write('\x07');

//What do we want it to do?  take in a command line argument
//the command line arguement should be numbers 
//the numbers should determine how much time passes until the timer goes off

//EDGECASE - no number provided; negative number for input; Input is not a number 



let num = process.argv.splice(2);

const timerAlarm = (numbers) => {
  for (let char of numbers) {
    if (char <= 0 || isNaN(char)) {
      return;
    }
    setTimeout(() => {
      process.stdout.write('\x07');
    }, char * 1000);
  }
};

timerAlarm(num);










