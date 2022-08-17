import readlineSync from 'readline-sync';

// Знакомство
export let userName; 

// Приветствие
export const showGreeting = () => {
    console.log('Welcome to the Brain Games!');
    userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
  };

export const getRandomNumber = () => Math.round(Math.random() * 100);