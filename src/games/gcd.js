import playGame from '../index.js';
import getRandomNumber from '../random_number.js';

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';

  const findGcd = (num1, num2) => {
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

  const startRound = () => {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();

    const question = (`${num1} ${num2}`);

    const correctAnswer = findGcd(num1, num2);

    return [question, String(correctAnswer)];
  };

  playGame(rules, startRound);
};
