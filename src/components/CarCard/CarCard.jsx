import React from 'react'
import "./CarCard.scss"

const CarCard = ({car}) => {
  console.table(car)
  
  const handleClick = () => {
      console.table(car)
  }

  return <>
    <div className="car-card" onClick={handleClick}>
        <img className="car-card__image" src={car.mainImageURL} alt={car.manufacturer + " " + car.model}/>
        <h2 className="car-card__h2">{car.manufacturer + " " + car.model}</h2>
    </div>
  </>
}

export default CarCard