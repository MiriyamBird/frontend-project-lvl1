import readlineSync from 'readline-sync';

// Знакомство
export const userName;

// Приветствие
export const showGreeting = () => {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

// Случайное число
export const getRandomNumber = () => Math.round(Math.random() * 100);
