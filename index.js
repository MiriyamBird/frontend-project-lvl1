import readlineSync from 'readline-sync';

const playGame = (rules, startRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(rules);

  let showCongratulations = 0;

  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = startRound();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      showCongratulations += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }

    if (showCongratulations === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export {playGame};
