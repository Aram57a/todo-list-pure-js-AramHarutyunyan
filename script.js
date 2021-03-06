import {addTodoItem} from "./Modules/addTodoItem.js"
import {deleteTodoItem} from "./Modules/deleteTodoItem.js"
const todos = []

const todosContainer = document.querySelector('.container');
const addTodoItemElement = document.querySelector('.add-todo-item');
function createTodoItemElement(value) {
  
  const li = document.createElement('li'); // creating li HTML element
  li.classList = 'item'; // adding the .item class to the li class list
  const deleteButton = createButtonElement(
    'Delete', // creating delete button name text node
    deleteTodoItem
  ) // creating delete button
  li.appendChild(document.createTextNode(value));
  li.appendChild(deleteButton); // appending delete button to li as child
  return li // return the li
}
/**
 * Creates a HTML button element depends on its parameters
 * @param {string} value - the value of the button
 * @param {function} onClick - the onClick function of the button
 */
function createButtonElement(value, onClick) {  
  
  const button = document.createElement('button'); // creating button HTML element
  button.classList= value==="Delete" ? "delete": "add-todo";
  button.appendChild(document.createTextNode(value)); // appending the value to the button as child  
  button.onclick = value==="Delete"?onClick :()=>onClick(todos,renderTodoList) // appending onClick function to the button
  todos.pop()
  document.getElementById("input").value="";
  return button; // return the button
}

function createAddTodoButtonElement(
  value, 
  parent, 
  createButtonFc
) {
  const addButtonElement = createButtonFc(value, addTodoItem);
  parent.appendChild(addButtonElement)
}
function renderTodoList(data) {
  data.forEach(todo => {
    todosContainer.appendChild(
      createTodoItemElement(todo)
    );
  })
}
createAddTodoButtonElement(
  'Add Todo', 
  addTodoItemElement, 
  createButtonElement
);

