import playGame from '../index.js';

const playCalcGame = () => {
  const rules = 'What is the result of the expression?';

  const startRound = () => {
    const getRandomNumber = () => Math.round(Math.random() * 100);

    const operand1 = getRandomNumber();
    const operand2 = getRandomNumber();

    const operators = ['+', '-', '*'];
    const randomIndex = Math.floor(Math.random() * operators.length);
    const randomOperator = operators[randomIndex];

    const question = (`${operand1} ${randomOperator} ${operand2}`);

    const correctAnswer = () => {
      if (randomIndex === 0) {
        return (String(operand1 + operand2));
      } if (randomIndex === 1) {
        return (String(operand1 - operand2));
      }
      return (String(operand1 * operand2));
    };

    return [question, correctAnswer()];
  };

  playGame(rules, startRound);
};

export default playCalcGame;
