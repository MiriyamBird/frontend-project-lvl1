import { playGame } from '../../index.js';

const playProgressionGame = () => {
  const rules = 'What number is missing in the progression?';

  const startRound = () => {
    const getRandomNumber = () => Math.round(Math.random() * 100);
    const minLength = 5;
    const maxLength = 10;
    const progLength = Math.round(Math.random() * (maxLength - minLength) + minLength);
    const step = getRandomNumber();
    const firstNum = getRandomNumber();
    const missingNumber = Math.round(Math.random() * progLength);

    const progression = [];
    let nextNum = firstNum;

    for (let l = 0; l <= progLength; l += 1) {
      nextNum += step;
      progression.push(nextNum);
    }

    const correctAnswer = progression[missingNumber];
    progression[missingNumber] = '..';

    const progressionStr = progression.join(' ');

    const question = progressionStr;

    return [question, correctAnswer];
  };

  playGame(rules, startRound);
};

export default playProgressionGame;
