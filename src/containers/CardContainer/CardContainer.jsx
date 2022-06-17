import React from 'react'
import "./CardContainer.scss"
import CarCard from "../../components/CarCard/CarCard"

const CardContainer = ({carList, searchTerm, setSelectedCar}) => {
  if(!carList) return

  let filteredCarList = [...carList] 
  if (searchTerm !== "") {
    filteredCarList = carList.filter(car => {
      if (car.manufacturer.toUpperCase().includes(searchTerm.toUpperCase())) return true
      if (car.model.toUpperCase().includes(searchTerm.toUpperCase())) return true
      if (car.ownerName.toUpperCase().includes(searchTerm.toUpperCase())) return true
      if (car.registrationNumber.toUpperCase().includes(searchTerm.toUpperCase())) return true
      if (car.vin.toUpperCase().includes(searchTerm.toUpperCase())) return true
      return false
    })
  }

  return <>
    <div className="card-container">
      {filteredCarList.map((car, index) => <CarCard car={car} key={index} setSelectedCar={setSelectedCar}/>)}
    </div>
  </>
}

export default CardContainer