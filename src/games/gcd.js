import playGame from '../index.js';
import getRandomNumber from '../random_number.js';

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';

  const findGcd = (num1, num2) => {
    let x = Math.abs(num1);
    let y = Math.abs(num2);

    while (y !== 0) {
      const temp = y;
      y = x % y;
      x = temp;
    }
    return x;
  };

  const startRound = () => {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();

    const question = (`${num1} ${num2}`);

    const correctAnswer = findGcd(num1, num2);

    return [question, String(correctAnswer)];
  };

  playGame(rules, startRound);
};
