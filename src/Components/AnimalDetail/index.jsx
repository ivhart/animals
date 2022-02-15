import React from 'react';
import './style.css';

const AnimalDetail = ({ animal, idx }) => {
  return (
    <div className="detail">
      <div className="detail__content">
        <div className="detail__head">
          <img
            className="detail__photo"
            src={animal.zvirata[idx].foto}
            alt={animal.zvirata[idx].nazev}
          />
          <div className="detail__title">
            <h2 className="detail__name">
              <span>{animal.zvirata[idx].nazev}</span>
            </h2>
            <div className="detail__latin">
              <span>{animal.zvirata[idx].nazevLatinsky}</span>
            </div>
          </div>
        </div>

        <div className="detail__info">
          <p className="detail__description">{animal.zvirata[idx].popis}</p>

          <div className="detail__datas">
            <div className="detail__data">
              <h3>Domovina</h3>
              <p>{animal.zvirata[idx].domovina}</p>
            </div>
            <div className="detail__data">
              <h3>Biotop</h3>
              <p>{animal.zvirata[idx].biotop}</p>
            </div>
            <div className="detail__data">
              <h3>Potrava</h3>
              <p>{animal.zvirata[idx].potrava}</p>
            </div>
            <div className="detail__data">
              <h3>Velikost</h3>
              <p>{animal.zvirata[idx].velikost}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalDetail;
