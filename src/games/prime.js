import readlineSync from 'readline-sync';
import { showGreeting, userName, getRandomNumber } from '../index.js';

const playPrime = () => {
  showGreeting();

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let showCongratulations = 0;

  const primeNumbers = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,
  ];

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomNumber();

    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const comparison = () => {
      for (let l = 0; l < primeNumbers.length; l += 1) {
        if (randomNumber === primeNumbers[l]) {
          return true;
        }
      }
      return false;
    };

    const correctAnswer = () => {
      if (comparison() === true) {
        return 'yes';
      }
      return 'no';
    };

    if (userAnswer === correctAnswer()) {
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

export default playPrime;
