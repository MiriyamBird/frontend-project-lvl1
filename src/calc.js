import readlineSync from 'readline-sync';
import { showGreeting, userName, getRandomNumber } from './index.js';

const playCalc = () => {
  showGreeting();

  console.log('What is the result of the expression?');

  let showCongratulations = 0;

  for (let i = 0; i < 3; i += 1) {
    const operand1 = getRandomNumber();
    const operand2 = getRandomNumber();

    const operators = ['+', '-', '*'];
    const randomIndex = Math.floor(Math.random() * operators.length);
    const randomOperator = operators[randomIndex];

    const expression = `${operand1} ${randomOperator} ${operand2}`;

    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = () => {
      if (randomIndex === 0) {
        return (operand1 + operand2);
      } if (randomIndex === 1) {
        return (operand1 - operand2);
      }
      return (operand1 * operand2);
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

export default playCalc;
