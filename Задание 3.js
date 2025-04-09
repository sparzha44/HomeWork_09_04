let a = Number(prompt('Введите число 1')); // Вводим числа, добавив функцию number, чтобы переменная воспринималась, как число, а не строка
let b = Number(prompt('Введите число 2')); 

let sum = a + b; // сложение
let razn = a - b; // вычитание
let umn = a * b; // умножение
let del = a / b; // деление 
let ost = a % b; // деление с остатком

console.log("Сумма чисел равна " + sum); // выводим
console.log("Разность чисел равна " + razn);
console.log("Произведение чисел равно " + umn);
console.log("Частное чисел равно " + del);
console.log("Остаток от деления чисел равен " + ost);
