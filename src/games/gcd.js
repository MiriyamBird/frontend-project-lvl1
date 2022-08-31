import playGame from '../index.js';
import getRandomNumber from '../random_number.js';

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';

  const findGcd = (num1, num2) => {
    num1 = Math.abs(num1);
    num2 = Math.abs(num2);
    let temp;

    if (num2 > num1) {
      temp = num1;
      num1 = num2;
      num2 = temp;
    }

    while (true) {
      if (num2 === 0) return num1;
      num1 %= num2;
      if (num1 === 0) return num2;
      num2 %= num1;
    }
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
