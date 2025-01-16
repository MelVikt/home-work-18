console.log('#1. Приклад домашнього завдання з JavaScript');

/*
 * #1
 *
 * Створіть змінні зі значеннями.
 */

const myNum = 10;
const myStr = 'some string';
const myBool = true;
const myArr = [1, 2, 3, 4, 5];
const myObj = { first: 'First Name', last: 'Last Name' };

console.log(myNum);    
console.log(myStr);   
console.log(myBool);   
console.log(myArr);   
console.log(myObj); 

/*
 * #2
 *
 * Відформатуйте ціле число, яке зберігається в змінній myNum, щоб отримати результат з 2 знаками після коми.
 * Результат збережіть у змінній decimal2.
 */

const decimal2 = myNum.toFixed(2);
console.log(decimal2);


/*
 * #4
 *
 * Створіть нову змінну myTest та присвойте їй значення 20.
 * Виконайте присвоєння з операцією, використовуючи оператори: +=, –=, *=, /=, %=.
 * Результати присвоюються в myTest, потім виводяться в консоль.
 */

let myTest = 20;
myTest += myNum; 
console.log(myTest);

myTest -= 5; 
console.log(myTest);

myTest *= 2; 
console.log(myTest);

myTest /= 4; 
console.log(myTest);

myTest %= 3; 
console.log(myTest);

/*
 * #5
 *
 * Використовуючи властивості та методи об'єкта Math, присвойте змінним та відобразіть у консолі.
 */

// константа Pi → myPi
const myPi = Math.PI;
console.log(myPi); 

// округлене значення числа 89.279 → myRound
const myRound = Math.round(89.279);
console.log(myRound); 

// випадкове число між 0..10 → myRandom
const myRandom = Math.random() * 11;
console.log(myRandom); // (random value between 0 and 10)

// 3 у 5 степені → myPow
const myPow = Math.pow(3, 5);
console.log(myPow); // 243

/*
 * #6
 *
 * Створіть об'єкт з ім'ям strObj.
 * Присвойте ключу str рядок тексту "Мама мыла раму, рама мыла маму", ключу length встановіть довжину цього рядка.
 */

const strObj = {
  str: "Мама мыла раму, рама мыла маму",
  length: "Мама мыла раму, рама мыла маму".length
};
console.log(strObj); 

/*
 * #7
 *
 * Перевірте наявність тексту 'рама' у полі str об'єкта strObj (див.п.6), результат збережіть у змінній isRamaPos та виведіть її у консоль.
 * Результатом для isRamaPos має бути індекс входження.
 * Результатом для isRama має бути буль true.
 */

const isRamaPos = strObj.str.indexOf("рама");
console.log(isRamaPos); 

const isRama = strObj.str.includes("рама");
console.log(isRama); 

/*
 * #8
 *
 * Виконайте перейменування підрядка у рядку.
 * Як вихідний рядок використовуйте значення поля str об'єкта strObj (див.п.6), результат збережіть у змінній strReplace та відобразіть у консоль.
 * Вихідний рядок: 'Мама мыла раму, рама мыла маму'
 *      Результат: 'Мама моет раму, Рама держит маму'
 */

const strReplace = strObj.str.replace("мыла", "моет").replace("рама", "Рама").replace("мыла", "держит");
console.log(strReplace); 

/*
 * #9
 *
 * Преобразуйте текст 'some STRING' у верхній, потім у нижній регістри, результат відобразіть у консоль.
 */

const someStr = 'some STRING';
const upperStr = someStr.toUpperCase();
console.log(upperStr); 

const lowerStr = someStr.toLowerCase();
console.log(lowerStr); 
