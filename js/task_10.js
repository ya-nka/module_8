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
