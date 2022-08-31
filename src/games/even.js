import playGame from '../index.js';
import getRandomNumber from '../random_number.js';

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  const isEven = (randomNumber) => (randomNumber % 2 === 0 ? 'yes' : 'no');

  const startRound = () => {
    const randomNumber = getRandomNumber();

    const question = randomNumber;

    const correctAnswer = isEven(randomNumber);

    return [question, correctAnswer];
  };

  playGame(rules, startRound);
};
