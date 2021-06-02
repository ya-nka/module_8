// Задание 6

let arr = [9, 7, 8];
let result = true;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] != arr[j]) result = false;
  }
  console.log(result);
}
