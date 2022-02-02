import React from 'react';

export const TaskCardCheckButton = ({
  taskCardsList,
  setTaskCardsList,
  taskCard,
 }) => {
  const taskCardCheckButton = (id) => {
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id));
  };
  return (
  <div>
    <button
     className="taskCardCheckButton"
     onClick={() => taskCardCheckButton(taskCard.id)}
     >
    <i className="far fa-check-square"></i>
    </button>
  </div>
  );
};
