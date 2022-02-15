import React from 'react';
import './style.css';

const OneAnimal = ({ idx, nazev, nazevLatinsky, foto, onChange }) => {
  const handleClick = () => {
    onChange(idx);
  };
  return (
    <div className="animal" onClick={handleClick}>
      <div className="animal__photo">
        <img src={foto} alt={nazev} />
      </div>
      <div className="animal__description">
        <div className="animal__name">{nazev}</div>
        <div className="animal__latin">{nazevLatinsky}</div>
      </div>
    </div>
  );
};

export default OneAnimal;
