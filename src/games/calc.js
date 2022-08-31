import playGame from '../index.js';
import getRandomNumber from '../random_number.js';

export default () => {
  const rules = 'What is the result of the expression?';

  const calculate = (operand1, operand2, randomOperator) => {
    switch (randomOperator) {
      case '+':
        return (String(operand1 + operand2));
      case '-':
        return (String(operand1 - operand2));
      default:
        return (String(operand1 * operand2));
    }
  };

  const startRound = () => {
    const operand1 = getRandomNumber();
    const operand2 = getRandomNumber();

    const operators = ['+', '-', '*'];
    const randomIndex = getRandomNumber(0, operators.length - 1);
    const randomOperator = operators[randomIndex];

    const question = (`${operand1} ${randomOperator} ${operand2}`);

    const correctAnswer = calculate(operand1, operand2, randomOperator);

    return [question, correctAnswer];
  };

  playGame(rules, startRound);
};
