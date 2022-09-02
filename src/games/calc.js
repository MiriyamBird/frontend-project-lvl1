import playGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

export default () => {
  const rules = 'What is the result of the expression?';

  const calculate = (operandOne, operandTwo, randomOperator) => {
    switch (randomOperator) {
      case '+':
        return (String(operandOne + operandTwo));
      case '-':
        return (String(operandOne - operandTwo));
      case '*':
        return (String(operandOne * operandTwo));
      default:
        return "Unknown operator: '${randomOperator}'!";
    }
  };

  const startRound = () => {
    const operandOne = getRandomNumber();
    const operandTwo = getRandomNumber();

    const operators = ['+', '-', '*'];
    const randomIndex = getRandomNumber(0, operators.length - 1);
    const randomOperator = operators[randomIndex];

    const question = (`${operandOne} ${randomOperator} ${operandTwo}`);

    const correctAnswer = calculate(operandOne, operandTwo, randomOperator);

    return [question, correctAnswer];
  };

  playGame(rules, startRound);
};
