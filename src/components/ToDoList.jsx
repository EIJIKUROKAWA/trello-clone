import React, { useState } from 'react';

function TodoList() {

    const initialState = []

    const [todos, setTodo] = useState(initialState);

    const [task, setTask] = useState('')

    const handleNewTask = (event) => {
        setTask( event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(task === '') return
        setTodo(todos => [...todos,{ task, isCompleted: false}])
        setTask('')
    }

    const handleRemoveTask = index => {
        const newTodos = [...todos]
        newTodos.splice(index,1)
        setTodo(newTodos)
    }

    return (
        <div>
          
            <form onSubmit={ handleSubmit }>
            Add Task : <input value={ task } placeholder="This month's goal" onChange={handleNewTask}/>
            </form>
            <ul>
                { todos.map((todo, index) => (
                <li key={ index }>{ todo.task } <span onClick={ () => handleRemoveTask(index) }>X</span></li>
                ))}
            </ul>
        </div>
  );
}

export default TodoList;