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
