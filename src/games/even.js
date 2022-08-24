import playGame from '../../index.js';

const playEvenGame = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  const startRound = () => {
    const getRandomNumber = () => Math.round(Math.random() * 100);
    const randomNumber = getRandomNumber();

    const question = randomNumber;

    const correctAnswer = () => {
      if (randomNumber % 2 === 0) {
        return 'yes';
      }
      return 'no';
    };
    return [question, correctAnswer()];
  };

  playGame(rules, startRound);
};

export default playEvenGame;
