import playGame from '../index.js';
import getRandomNumber from '../random_number.js';

export default () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const isPrime = (num) => {
    for (let i = 2; i * i <= num; i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  };

  const startRound = () => {
    const randomNumber = getRandomNumber();
    const question = randomNumber;
    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
    return [question, correctAnswer];
  };

  playGame(rules, startRound);
};
