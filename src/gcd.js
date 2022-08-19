import readlineSync from 'readline-sync';
import { showGreeting, userName, getRandomNumber } from './index.js';

const playGcd = () => {
  showGreeting();

  console.log('Find the greatest common divisor of given numbers.');

  let showCongratulations = 0;

  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();

    console.log(`Question: ${num1} ${num2}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = () => {
      let result = 0;
      let x = num1;
      let y = num2;

      while (x !== 0 && y !== 0) {
        if (x > y) {
          x %= y;
        } else {
          y %= x;
        }
      }
      result = x + y;
      return result;
    };

    if (Number(userAnswer) === correctAnswer()) {
      console.log('Correct!');
      showCongratulations += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer()}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }

    if (showCongratulations === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default playGcd;
