import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { Task } from './Task';

export const Tasks = ({ taskList, setTaskList }) => {
  return(
      <DragDropContext>
        <Droppable droppableId="droppable">
          {(provided) => (
           <div>   
            {taskList.map((task) => (
             <div>
               <Task task={task} 
               taskList={taskList} 
               setTaskList={setTaskList}
               />
             </div>
            ))}
            </div>
          )}
      </Droppable>
      </DragDropContext>
  );
};