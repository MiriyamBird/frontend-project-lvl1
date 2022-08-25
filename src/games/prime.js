import playGame from '../index.js';

const playPrimeGame = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const startRound = () => {
    const primeNumbers = [
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41,
      43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,
    ];
    const randomNumber = Math.round(Math.random() * 100);

    const question = randomNumber;

    const correctAnswer = () => {
      for (let i = 0; i < primeNumbers.length; i += 1) {
        if (randomNumber === primeNumbers[i]) {
          return 'yes';
        }
      }
      return 'no';
    };

    return [question, correctAnswer()];
  };

  playGame(rules, startRound);
};

export default playPrimeGame;
