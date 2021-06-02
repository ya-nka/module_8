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
