import playGame from '../index.js';
import getRandomNumber from '../random_number.js';

export default () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const isPrime = (primeNumbers, randomNumber) => {
    for (let i = 0; i < primeNumbers.length; i += 1) {
      if (randomNumber === primeNumbers[i]) {
        return 'yes';
      }
    }
    return 'no';
  };

  const startRound = () => {
    const primeNumbers = [
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41,
      43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,
    ];
    const randomNumber = getRandomNumber();

    const question = randomNumber;

    const correctAnswer = isPrime(primeNumbers, randomNumber);

    return [question, correctAnswer];
  };

  playGame(rules, startRound);
};
