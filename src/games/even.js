import readlineSync from 'readline-sync';
import { showGreeting, userName, getRandomNumber } from '../index.js';

const playEven = () => {
  showGreeting();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let showCongratulations = 0;

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomNumber();

    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = () => {
      if (randomNumber % 2 === 0) {
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

export default playEven;
