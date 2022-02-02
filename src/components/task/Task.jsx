import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

export const Task = ({ task, taskList, setTaskList, index }) => {
  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
};

  const handleCheck = (id) => {
    setTaskList(taskList.map((task)  => {
      if(id === task.id){
        return {
          ...task,completed: !task.completed
        };
      }
      return task;
    }))
  };
  

  


  return (
    <Draggable index={index} draggableId={task.draggableId}>
      {(provided) => (
        <div 
        className={`taskBox ${task.completed ? "completed" : ""}`} 
        key={task.id} 
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        >
        <p className="taskText">{task.text}</p>
        <button className="taskCheckButton" onClick={() => handleCheck
        (task.id)}>
        <i className="far fa-check-square"></i>
        </button>

        <button className="taskTrashButton" onClick={() => handleDelete
        (task.id)}>
        <i className="fas fa-trash-alt"></i>
        </button>
      </div>
      )}
      </Draggable>
    );
};
