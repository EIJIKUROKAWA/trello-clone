import React, { useState } from 'react';

import { TaskCardDeleteButton } from '../task/button/TaskCardDeleteButton';

export const Header = () => {
  
  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setInputCardTitle] = useState("目標設定");
  
  const handleClick = () => {
    setIsClick(true);
  };

  const handleChange = (e) => {
    setInputCardTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClick(false);
  };

  const handleBlur = () => {
    setIsClick(false);
  };

  return (
    <header>
        <p>"This month's goal"</p>
    
  <div onClick={handleClick} className="targetInputArea">
    {isClick ? (
      
      <form onSubmit={handleSubmit}>
        <input
        className="targetTitleInput" 
        type="text"
        autoFocus
        onChange={handleChange}
        onBlur={handleBlur}
        value={inputCardTitle}
        />
      </form>
    ) : (
      <h3>{inputCardTitle}</h3>
    )}
  </div>
  </header>
  );
};


    <div>
      <header>
        <p>"This month's goal"</p>
        <p className="mokuhyou">テスト</p>
      </header>
    </div>
    

