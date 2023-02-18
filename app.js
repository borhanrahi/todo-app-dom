// // GET ELEMENT BY ID 

// let headerElement = document.getElementById('header'); 
// headerElement.textContent = "TO-DO-APP"; 
// console.log(document.getElementsByClassName('item'));

// // Query Selector 

// let header = document.querySelector('.header');
// console.log(header); 
// let newTask = document.querySelector('#new-task'); 
// console.log(newTask); 

// let lastItem = document.querySelector('.item:nth-child(1)'); 
// console.log(lastItem); 
// lastItem.style.color = 'red'; 

// const grandparent = document.querySelector('.todo-list'); 
// //const parent = grandparent.children;
// // const children = parent[1].children; 
// const children = grandparent.querySelectorAll('.item'); 

// console.log(children); 

// // low to up  
// const children = document.querySelector('.item'); 
// const grandparent = children.closest('.todo-list'); 

// console.log(grandparent);

// // creating an element 

// const divElement = document.createElement('div'); 

// divElement.className = 'red'; 

// divElement.setAttribute('id', 'red'); 
// divElement.setAttribute('title', 'Red Div'); 

// const container = document.querySelector('.todo-list'); 
// const h2Element = document.querySelector('h2'); 
// container.insertBefore(divElement, h2Element); 

// container.appendChild(divElement)   ; 
// container.append('Hello World  ') ;

// const divElement = document.createElement('div'); 

// divElement.className = 'red'; 

// divElement.setAttribute('id', 'red'); 
// divElement.setAttribute('title', 'Red Div'); 
// const container = document.querySelector('.todo-list'); 

// const b = container.append(divElement, document.createElement('p'), 'Hello World'); 
// const a = container.appendChild(divElement); 

// console.log(b);

// event listeners 

// const headerElement = document.querySelector('#header'); 
// headerElement.addEventListener('click', (event) => {
//     console.log(event);
// } ); 

// const inputElement = document.querySelector('input[type="text"]'); 
// inputElement.addEventListener('focus', (event) => {
//     console.log(event);
// } );

// const formElement = document.querySelector('form'); 
// formElement.addEventListener('submit', (event) => {
//     event.preventDefault();
//     console.log(event);
// } );



// select elements and assignments them

let newTask = document.querySelector('#new-task');
let form = document.querySelector('form');
let todoUl = document.querySelector('#items');
let completeUl = document.querySelector('.complete-list ul');


// functions
let createTask = function(task) {
   let listItem = document.createElement('li');
   let checkBox = document.createElement('input');
   let label = document.createElement('label');

   label.innerText = task;
   checkBox.type = 'checkbox';

   listItem.appendChild(checkBox);
   listItem.appendChild(label);

   return listItem;
}

let addTask = function(event) {
   event.preventDefault();
   let listItem = createTask(newTask.value);
   todoUl.appendChild(listItem);
   newTask.value = "";
   // bind the new list item to the incomplete list
   bindInCompleteItems(listItem, completeTask);
}

let completeTask = function() {
   let listItem = this.parentNode;
   let deleteBtn = document.createElement('button');
   deleteBtn.innerText = 'Delete';
   deleteBtn.className = 'delete';
   listItem.appendChild(deleteBtn);

   let checkBox = listItem.querySelector('input[type="checkbox"]');
   checkBox.remove();
   completeUl.appendChild(listItem);
   bindCompleteItems(listItem, deleteTask);
}

let deleteTask = function() {
   let listItem = this.parentNode;
   let ul = listItem.parentNode;
   ul.removeChild(listItem);
}

let bindInCompleteItems = function(taskItem, checkboxClick) {
   let checkBox = taskItem.querySelector('input[type="checkbox"]');
   checkBox.onchange = checkboxClick;
}

let bindCompleteItems = function(taskItem, deleteButtonClick) {
   let deleteButton = taskItem.querySelector('.delete');
   deleteButton.onclick = deleteButtonClick;
}

for(let i=0; i< todoUl.children.length; i++ ) {
   bindInCompleteItems(todoUl.children[i], completeTask);
}

for(let i=0; i< completeUl.children.length; i++ ) {
   bindCompleteItems(completeUl.children[i], deleteTask);
}

form.addEventListener('submit', addTask);