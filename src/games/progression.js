import playGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

export default () => {
  const rules = 'What number is missing in the progression?';

  const getProgression = (progLength, firstNum, step) => {
    const progression = [];
    let nextNum = firstNum;

    for (let l = 0; l <= progLength; l += 1) {
      nextNum += step;
      progression.push(nextNum);
    }

    return [progression];
  };

  const startRound = () => {
    const minLength = 5;
    const maxLength = 10;
    const progLength = Math.round(Math.random() * (maxLength - minLength) + minLength);
    const step = getRandomNumber(1, 20);
    const firstNum = getRandomNumber();
    const missingNumberIndex = getRandomNumber(0, (progLength - 1));

    const [progression] = getProgression(progLength, firstNum, step);

    const correctAnswer = progression[missingNumberIndex];
    progression[missingNumberIndex] = '..';

    const progressionStr = progression.join(' ');

    const question = progressionStr;

    return [question, String(correctAnswer)];
  };

  playGame(rules, startRound);
};
