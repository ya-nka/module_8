//`Задание 1`;

let my_num = prompt(`Введите число`);
my_num = +my_num;
console.log(typeof my_num);
if (!Number.isNaN(my_num)) {
  if (typeof my_num == 'number') {
    if (my_num % 2 === 0) {
      console.log('четное');
    } else {
      console.log('нечетное');
    }
  }
} else {
  console.log('Упс, кажется, вы ошиблись');
}

// `Задание 2`;

let x = 77;
console.log(typeof x);

if (typeof x == 'string') {
  console.log(`х-строка`);
} else if (typeof x == 'boolean') {
  console.log(`х-логический тип`);
} else if (typeof x == 'number') {
  console.log(`х-число`);
} else {
  console.log(`Тип x не определён`);
}

//  `Задание 3`;

const str = 'Hello';
const reverse = str.split('').reverse().join('');

console.log(reverse);

// `Задание 4`

const result = Math.floor(Math.random() * 101);
console.log(result);

// Задание 5

let arr = [10, 15, 26];
console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Задание 6

let arr = [9, 7, 8];
let result = true;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] != arr[j]) result = false;
  }
  console.log(result);
}

// Задание 7

let arr = [1, 2, 3, 4, 0, 6, `паар`];
let even = 0;
let odd = 0;
for (i = 0; i < arr.length; i++) {
  if (typeof arr[i] == 'string') {
    console.log(`строка`);
  } else if (typeof arr[i] == 'object') {
    console.log('другое');
  } else if (arr[i] == 0) {
    console.log('ноль');
  } else if (arr[i] % 2 == 0) {
    even++;
  } else {
    odd++;
  }
}
console.log(even + ' количество четных чисел');
console.log(odd + ' количество нечетных чисел');

// Задание 8

let arr1 = new Map();

let arr = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
  ['key3', 'value3'],
]);

for (let pair of arr.entries()) {
  console.log(`Ключ = ${pair[0]}, значение = ${pair[1]}`);
}

// Задание 9

function funcName() {
  let arr = [1, 2, 3, 4, 0, 6, `паар`];
  let even = 0;
  let odd = 0;
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'string') {
      console.log(`строка`);
    } else if (typeof arr[i] == 'object') {
      console.log('другое');
    } else if (arr[i] == 0) {
      console.log('ноль');
    } else if (arr[i] % 2 == 0) {
      even++;
    } else {
      odd++;
    }
  }
  console.log(even + ' количество четных чисел');
  console.log(odd + ' количество нечетных чисел');
}

funcName();

// Задание 10

let num = prompt('любое число от 2 до 1000');

function isFunc(num) {
  for (let i = 2; i <= num; i++)
    if (num <= 1000) {
      if (num % i === 0) {
        return `не простое`;
      } else if (num > 1) {
        return `простое`;
      }
    } else {
      return `данные не верны`;
    }
}
console.log(isFunc(num));
