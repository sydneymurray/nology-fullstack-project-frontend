import React from 'react'
import "./CarModal.scss"

const CarModal = ({selectedCar, setSelectedCar}) => {
  let {manufacturer, model, year, colour, registrationState, registrationNumber, vin} = selectedCar  
  let {doors, seats, ownerName, ownerCoNo, price, engineCapacity, modifications} = selectedCar
  let {mileage, wikiURL, videoURL, mainImageURL, imagesURL} = selectedCar  

  console.log(selectedCar)
  return <>
    <div className="car-modal-background">
      <div className="car-modal">
        <h2 className="car-modal__heading">{manufacturer + " " + model}</h2>
        <img className="car-modal__image" src={mainImageURL} alt={manufacturer + " " + model}/>
      </div>  
    </div>
  </>
}

export default CarModal