let userName = 'Steven';

userName ? 
console.log(`Hello ${userName}`):
console.log('Hello!')

let userQuestion = 'Will i be 6"4 by the end of the year?';

console.log(`${userName} has asked - ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);
let eightBall = randomNumber;

switch(randomNumber){
  case 0: 
  eightBall = 'It is certain';
  break;
  case 1: 
  eightBall = 'It is decidedly so';
  break;
  case 2: 
  eightBall = 'Reply hazy try again';
  break;
  case 3: 
  eightBall = 'Cannot predict now';
  break;
  case 4: 
  eightBall = 'Do not count on it';
  break;
  case 5: 
 eightBall = 'My sources say no';
  break;
  case 6: 
  eightBall = 'Outlook not so good';
  break;
  case 7: 
  eightBall = 'Signs point to yes';
  break;
default:
  eightBall = 'invalid number entered';
  break;
}

console.log(`The magin eight ball says - ${eightBall}`);




