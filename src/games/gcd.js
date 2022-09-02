import playGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';

  const findGcd = (numOne, numTwo) => {
    let x = Math.abs(numOne);
    let y = Math.abs(numTwo);

    while (y !== 0) {
      const temp = y;
      y = x % y;
      x = temp;
    }
    return x;
  };

  const startRound = () => {
    const numOne = getRandomNumber();
    const numTwo = getRandomNumber();

    const question = (`${numOne} ${numTwo}`);

    const correctAnswer = findGcd(numOne, numTwo);

    return [question, String(correctAnswer)];
  };

  playGame(rules, startRound);
};
