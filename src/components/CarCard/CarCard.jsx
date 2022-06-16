import React from 'react'
import "./CarCard.scss"

const CarCard = ({car}) => {
  console.table(car)
  
  const handleClick = () => {
      console.table(car)
  }

  return <>
    <div className="car-card" onClick={handleClick}>
      <h3 className="car-card__heading">{car.manufacturer + " " + car.model}</h3>
      <img className="car-card__image" src={car.mainImageURL} alt={car.manufacturer + " " + car.model}/>
      <p className="car-card__detail-item"><b>Engine Capacity:  </b>{car.engineCapacity}</p>
      <p className="car-card__detail-item"><b>Mileage:  </b>{car.mileage}</p>
      <p className="car-card__detail-item"><b>Manufactured:  </b>{car.year}</p>
      <p className="car-card__detail-item"><b>Price:  $</b>{car.price}</p>
    </div>
  </>
}

export default CarCard