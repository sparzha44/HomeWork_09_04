
let number = 456; // Число

let hundreds = Math.floor(number / 100); // Находим кол-во сотен с помощью mathfloor, чтобы получить целое число
let tens = Math.floor((number % 100) / 10); // Находим десятки
let units = number % 10; // Находим единицы

console.log("Сотен: " + hundreds); //Выводим
console.log("Десятков: " + tens);
console.log("Единиц: " + units);

