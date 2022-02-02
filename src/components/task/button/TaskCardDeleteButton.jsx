import React from 'react';

export const TaskCardDeleteButton = ({
  taskCardsList,
  setTaskCardsList,
  taskCard,
 }) => {
  const taskCardDeleteButton = (id) => {
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id));
  };
  return (
  <div>
    <button
     className="taskCardDeleteButton"
     onClick={() => taskCardDeleteButton(taskCard.id)}
     >
    <i className="far fa-minus-square"></i>
    </button>
  </div>
  );
};
