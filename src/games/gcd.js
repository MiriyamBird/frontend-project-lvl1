import { playGame } from '../../index.js';

const playGcdGame = () => {
  const rules = 'Find the greatest common divisor of given numbers.';

  const startRound = () => {
    const getRandomNumber = () => Math.round(Math.random() * 100);

    const num1 = getRandomNumber();
    const num2 = getRandomNumber();

    const question = (`${num1} ${num2}`);

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
    return [question, String(correctAnswer())];
  };

  playGame(rules, startRound);
};

export default playGcdGame;
