import readlineSync from 'readline-sync';

const playGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let showCongratulations = 0;

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.round(Math.random() * 100);

    const correctAnswer = () => {
      if (randomNumber % 2 === 0) {
        return 'yes';
      }
      return 'no';
    };

    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer()) {
      console.log('Correct!');
      showCongratulations += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer()}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }

    if (showCongratulations === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default playGame;
