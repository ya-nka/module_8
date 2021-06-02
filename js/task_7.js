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
