// Задание 1
// Создайте функцию которая возводит переданное число в куб, 
// необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо 
// вывести что значение задано неверно Создать фукнцию, которая 
// высчитывает 13% от данного числа и выводит в консоль текст
//  "salary равен значение"

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, 
// которая определяет максимальное значение среди этих чисел

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна 
// принимать по два числа и выполнять одну из операций (каждая функция 
//     выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение 
// console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция 
//    сложения в данном примере, ваши названия функций могут отличаться). 
//     Округлять значения, которые возвращают функции не нужно, однако, 
//     обратите внимание на разность, функция должна вычесть из большего 
//     числа меньшее, либо вернуть 0, если числа равны. Функциям всегда 
// передаются корректные числа, проверки на NaN, Infinity делать не нужно.

// Задание 1.
// function cubeNumber (num){
    
//     let res=num*num*num;
//     return res;
// }
// console.log(cubeNumber (2) );

// Задание 2.
// function salary (money) {
//      money=Number(prompt("Введите число заработной платы:"));
//      res= money*0.87;
//      return res;
// }
// console.log (`Размер заработной платы за вычетом НДС:${salary()}`);

// задание 3
// function maxMeaning (num1,num2,num3) {
//     num1=Number(prompt("Введите первое число:"));
//     num2=Number(prompt("Введите второе число:"));
//     num3=Number(prompt("Введите третье число:"));
//     if (num1>num2 && num1>num3) {
//         console.log("максимальное первое число");
//     } else if (num2>num1 && num2>num3) {
//          console.log("максимальное второе число");   
//         } else if (num3>num1 && num3>num2) {
//             console.log("максимальное третье число");
//         } else 
//         console.log ("Числа равны");
//     }

// maxMeaning();

// Задание 4
// function sumNumber (num1,num2) {
//     num1=Number(prompt("Введите первое число:"));
//     num2=Number(prompt("Введите второе число:"));
//     let sum=num1+num2;
//     return sum;
// }
// console.log (sumNumber());

// function diffeNumber (num1,num2) {
//     num1=Number(prompt("Введите первое число:"));
//     num2=Number(prompt("Введите второе число:"));
//     if (num1>num2) 
//     {
//        diff=num1-num2;
//     }
//     else if  (num2>num1) 
//     {
//          diff=num2-num1;
//     }
//     return diff;
// }
// console.log (diffeNumber());

// function multiplicationNumber (num1,num2) {
//         num1=Number(prompt("Введите первое число:"));
//         num2=Number(prompt("Введите второе число:"));
//         let multi=num1*num2;
//         return multi;
//     }
//     console.log (multiplicationNumber ());

function dividingNumber (num1,num2) {
        num1=Number(prompt("Введите первое число:"));
        num2=Number(prompt("Введите второе число:"));
        if (num1>num2) 
        {
           divid=num1/num2;
        }
        else if  (num2>num1) 
        {
             divid=num2/num1;
        }
        return divid;
    }
    console.log (dividingNumber());
