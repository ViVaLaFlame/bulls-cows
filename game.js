import readlineSync from 'readline-sync';

const generateNum = () => {
  let arr = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  if (arr[0] === 0) {
    let nonZeroIndex = arr.findIndex(digit => digit !== 0);
    [arr[0], arr[nonZeroIndex]] = [arr[nonZeroIndex], arr[0]];
  }

  let number = parseInt(arr.slice(0, 4).join(''));
  return number;
};

const userGuess = () => {
  const task = readlineSync.question('Ваша попытка: ');
  return task;
};

const bullsAndCows = (secret, guess) => {
  let bulls = 0;
  let cows = 0;
  for (let i = 0; i < secret.length; i += 1) {
    if (secret[i] === guess[i]) {
        bulls += 1;
    } else if (secret.includes(guess[i])) {
        cows += 1;
    }
  }
  return { bulls: bulls, cows: cows };
};

let secret = generateNum();
let guess;
let result;

do {
  guess = userGuess();
  result = bullsAndCows(secret.toString(), guess);
  console.log(`Быки: ${result.bulls}, Коровы: ${result.cows}`);
} while (result.bulls < 4);

console.log("Поздравляем! Вы угадали число!");
