// Обязательное задание.

// Выполнить все задачи в теге script. Комментарии, в которых написаны 
// задачи, не стирать, код с решением задачи пишем под комментарием.



// 1. Найти по id, используя getElementById, элемент с id равным 
// "super_link" и вывести этот элемент в консоль.
// []()
// 2. Внутри всех элементов на странице, которые имеют класс "card-link", 
// поменяйте текст внутри элемента на "ссылка".
// []()
// 3. Найти все элементы на странице с классом "card-link", которые лежат 
// в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
// []()
// 4. Найти первый попавшийся элемент на странице у которого есть атрибут
//  data-number со значением 50 и вывести его в консоль.
// []()
// 5. Выведите содержимое тега title в консоль.
// []()
// 6. Получите элемент с классом "card-title" и выведите его родительский 
// узел в консоль.
// []()
// 7. Создайте тегp`, запишите внутри него текст "Привет" 
// и добавьте созданный тег в начало элемента, который имеет класс "card".

// 8. Удалите тег h6 на странице.

// Задание 1
// const getElementById = document.querySelector('#super_link');
// console.log(getElementById);
// задание 2
// const linkEl = document.querySelector('.card-link');
// linkEl.textContent = 'cсылка';
// console.log(linkEl);
// Задание 3
// const linkEl = document.querySelectorAll('.card-link');
// console.log(linkEl);
// задание 4
// const linkEl = document.querySelector('.card-link');

// console.log(linkEl );

// задание 5

// Задание 6
// const linkEl = document.querySelector('.card-title');

//  console.log(linkEl.parentElement );
// задание 7
// const content = document.querySelector('.card');
// const newContent = document.createElement('p');
// newContent.textContent= "Привет";
// content.appendChild(newContent);


// // Задание 8
const content = document.querySelector('.card-subtitle mb-2 text-muted');
const newContent = document.createElement('h6');
newContent.textContent = "Card subtitle";
content.appendChild(newContent);
content.removeChild(newContent);

