// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('filter-todo');

//Event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);


// Functions
function addTodo(event) {
    //Prevent form from submitting
    event.preventDefault()

    //To-do div 
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //Create Li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // Checked button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add('complete-button');
    todoDiv.appendChild(completedButton)

    // Delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>'
    deleteButton.classList.add('delete-button');
    todoDiv.appendChild(deleteButton)

    //append to list
    todoList.appendChild(todoDiv);
    
    //clear todo input value
    todoInput.value = ('');
}

function deleteCheck (e) {
    const item = e.target;
    // delete todo
    if(item.classList[0] === 'delete-button'){
        const todo = item.parentElement;
        //animation
        todo.classList.add('fall')
        todo.addEventListener('transitionend', function (){
            todo.remove();
        });
    }

    //check mark
    if(item.classList[0] === 'complete-button'){
        const todo = item.parentElement;
        todo.classList.toggle('completed')
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case"all":
                todo.style.display = 'flex'
                break;
            case 'completed':
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex';
            } else{
                todo.style.display = 'none';
            }
        }
    });
}

//parei no - https://www.youtube.com/watch?v=Ttf3CEsEwMQ&feature=youtu.be&t=2113