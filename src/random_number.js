const getRandomNumber = (min = 0, max = 100) => {
  const random = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(random);
};

export default getRandomNumber;
