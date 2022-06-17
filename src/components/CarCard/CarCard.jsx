import React from 'react'
import "./CarCard.scss"

const CarCard = ({car, setSelectedCar}) => {
  let {manufacturer, model, mainImageURL, engineCapacity, mileage, year, price} = car  
  
  return <>
    <article className="car-card" onClick={() => setSelectedCar(car)}>
      <h3 className="car-card__heading">{manufacturer + " " + model}</h3>
      <img className="car-card__image" src={mainImageURL} alt={manufacturer + " " + model}/>
      <p className="car-card__detail-item"><b>Engine Capacity:  </b>{engineCapacity}</p>
      <p className="car-card__detail-item"><b>Mileage:  </b>{mileage}</p>
      <p className="car-card__detail-item"><b>Manufactured:  </b>{year}</p>
      <p className="car-card__detail-item"><b>Price:  $</b>{price}</p>
    </article>
  </>
}

export default CarCard