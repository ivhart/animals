import React from 'react';
import './style.css';
import OneAnimal from '../Animal';

const AnimalList = ({ animal, onAnimalChange }) => {
  const handleChange = (idx) => {
    onAnimalChange(idx);
  };
  return (
    <>
      <div className="animals">
        {animal.zvirata.map((animal, idx) => {
          return (
            <OneAnimal
              key={idx}
              foto={animal.foto}
              nazev={animal.nazev}
              nazevLatinsky={animal.nazevLatinsky}
              idx={idx}
              onChange={handleChange}
            />
          );
        })}
      </div>
    </>
  );
};

export default AnimalList;
