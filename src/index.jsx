import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import './style.css';
import AnimalList from './Components/AnimalList';
import AnimalDetail from './Components/AnimalDetail';

const App = () => {
  const [animal, setAnimal] = useState(null);
  const [animalIdx, setAnimalIdx] = useState(0);

  const fechtAnimal = () => {
    fetch('https://lrolecek.github.io/zviratka-api/zvirata.json')
      .then((response) => response.json())
      .then((data) => {
        setAnimal(data);
      });
  };

  useEffect(() => {
    fechtAnimal();
  }, []);

  const chooseAnimalDetail = (animalIdx) => {
    setAnimalIdx(animalIdx);
  };

  return (
    <div className="App">
      <h1>Zvířátka v ZOO</h1>

      <div className="container">
        {animal !== null || undefined ? (
          <>
            <AnimalList animal={animal} onAnimalChange={chooseAnimalDetail} />
            <AnimalDetail animal={animal} idx={animalIdx} />
          </>
        ) : (
          'loading...'
        )}
      </div>
    </div>
  );
};

render(<App />, document.querySelector('#app'));
