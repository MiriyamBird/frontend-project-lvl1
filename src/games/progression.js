import readlineSync from 'readline-sync';
import { showGreeting, userName, getRandomNumber } from '../index.js';

const playProgression = () => {
  showGreeting();

  console.log('What number is missing in the progression?');

  let showCongratulations = 0;

  for (let i = 0; i < 3; i += 1) {
    const minProgLength = 5;
    const maxProgLength = 10;
    const progLength = Math.round(Math.random() * (maxProgLength - minProgLength) + minProgLength);
    const step = getRandomNumber();
    const firstNum = getRandomNumber();
    const missingNumber = Math.round(Math.random() * progLength);

    const progression = [];
    let nextNum = firstNum;

    for (let l = 0; l <= progLength; l += 1) {
      nextNum += step;
      progression.push(nextNum);
    }

    const correctAnswer = progression[missingNumber];
    progression[missingNumber] = '..';

    const progressionStr = progression.join(' ');

    console.log(`Question: ${progressionStr}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(userAnswer) === correctAnswer) {
      console.log('Correct!');
      showCongratulations += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }

    if (showCongratulations === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default playProgression;
