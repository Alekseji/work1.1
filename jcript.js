Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, 
// и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

// Задание 1
// const arr=[0,1,2,3,4,5,6,7,8,9,10,11];
// for (let index=0; index<=arr.length; index++){
//    if (arr[index]  == 0 ) {
//       console.log(`${arr[index]} это ноль`);}  
   
//    else if (arr[index] % 2 ==0){
//       console.log(`${arr[index]} четное число`);} 
//    else {
//          console.log(`${arr[index]} нечетное число`);}  
//    }
// задание 2
// const arr = [1,2,3,4,5,6,7];
// arr.splice(3,2);
// console.log(arr);
// Задание 3
const arr=[ ];
let size=5;

for (let i =0; i<size; i++){
arr.push(Math.round (Math.random(0,9)*10));

}
console.log(arr);
