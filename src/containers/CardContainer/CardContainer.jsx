import React from 'react'
import "./CardContainer.scss"
import CarCard from "../../components/CarCard/CarCard"

const CardContainer = ({carList}) => {
  if(!carList) return

  return <>
    <div className="card-container">
      {carList.map(car => <CarCard car={car}/>)}
    </div>
  </>
}

export default CardContainer