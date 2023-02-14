// Задание 1
// const text = document.querySelectorAll ('.dropdown-item');
// text.forEach(element => {
//       element.classList = 'super-dropdown.';
      
//     });

//    Задание 2
// const text = document.querySelectorAll ('.btn btn-secondary dropdown-toggle');
// text.forEach(element => {
//       element.classList.remove = 'btn btn-secondary dropdown-toggle.';
      
//     });
// Задание 3
// let text = document.querySelectorAll ('.menu');
// text.forEach(element => {
//       if ( element.classList.contains(' .menu')){
//         element.classList.remove(' .dropdown-menu') 
//       } 
//     });
//    задание 4

// const text = document.getElementById ('dropdownMenuButton');
// const item = document.createElement('id');
// item.id= 'superDropdown';
// text.setAttribute('id','superDropdown');
// text.appendChild(item);

// Задание 5
let text = document.getElementById ('dropdownMenuButton');
const item = document.createElement('attribute');
item.attribute = 'data-dd';
text.setAttribute('dropdownMenuButton','data-dd');
text.appendChild(item);

console.log(text.getAttribute(item));
