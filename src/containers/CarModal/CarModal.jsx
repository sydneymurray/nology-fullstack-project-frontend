import React from 'react'
import "./CarModal.scss"

const CarModal = ({selectedCar, setSelectedCar}) => {
    let {manufacturer, model, year, colour, registrationState, registrationNumber, vin} = selectedCar  
    let {doors, seats, ownerName, ownerCoNo, price, engineCapacity, modifications} = selectedCar
    let {mileage, wikiURL, videoURL, mainImageURL, imagesURL} = selectedCar  
  
    return <>
        <div className="car-modal-background">
            <form className="car-modal">
                <h2 className="car-modal__heading">{manufacturer + " " + model}</h2>
                <img className="car-modal__image" src={mainImageURL} alt={manufacturer + " " + model}/>
                <div className="car-modal__section1">
                    <label htmlFor="" className="car-modal__label">Manufacturer:</label>
                    <input type="text" className="car-modal__input" name="manufacturer" defaultValue={manufacturer}/>
                    
                    <label htmlFor="" className="car-modal__label">Model:</label>
                    <input type="text" className="car-modal__input" name="model" value={model}/>
                    
                    <label htmlFor="" className="car-modal__label">Colour:</label>
                    <input type="text" className="car-modal__input" name="colour" value={colour}/>
                    
                    <label htmlFor="" className="car-modal__label">Year:</label>
                    <input type="text" className="car-modal__input" name="year" value={year}/>
                    
                    <label htmlFor="" className="car-modal__label">Registered:</label>
                    <input type="text" className="car-modal__input" name="registrationState" value={registrationState}/>
                    
                    <label htmlFor="" className="car-modal__label">Plate:</label>
                    <input type="text" className="car-modal__input" name="registrationNumber" value={registrationNumber}/>
                    
                    <label htmlFor="" className="car-modal__label">VIN:</label>
                    <input type="text" className="car-modal__input" name="vin" value={vin}/>
                    
                    <label htmlFor="" className="car-modal__label">Doors:</label>
                    <input type="text" className="car-modal__input" name="doors" value={doors}/>
                    
                    <label htmlFor="" className="car-modal__label">Seats:</label>
                    <input type="text" className="car-modal__input" name="seats" value={seats}/>
                    
                    <label htmlFor="" className="car-modal__label">Owner:</label>
                    <input type="text" className="car-modal__input" name="ownerName" value={ownerName}/>
                    
                    <label htmlFor="" className="car-modal__label">CoNo:</label>
                    <input type="text" className="car-modal__input" name="ownerCoNo" value={ownerCoNo}/>
                    
                    <label htmlFor="" className="car-modal__label">Price:</label>
                    <input type="text" className="car-modal__input" name="price" value={price}/>
                    
                    <label htmlFor="" className="car-modal__label">Engine:</label>
                    <input type="text" className="car-modal__input" name="engineCapacity" value={engineCapacity}/>
                    
                    <label htmlFor="" className="car-modal__label">Year:</label>
                    <input type="text" className="car-modal__input" name="year" value={year}/>
                    
                    <label htmlFor="" className="car-modal__label">Mileage:</label>
                    <input type="text" className="car-modal__input" name="mileage" value={mileage}/>
                </div>
                <div className="car-modal__section2">
                    <label htmlFor="" className="car-modal__label">Wikipedia:</label>
                    <input type="text" className="car-modal__input" name="wikiURL" value={wikiURL}/>
                    
                    <label htmlFor="" className="car-modal__label">Video:</label>
                    <input type="text" className="car-modal__input" name="videoURL" value={videoURL}/>
                    
                    <label htmlFor="" className="car-modal__label">Main Image:</label>
                    <input type="text" className="car-modal__input" name="mainImageURL" value={mainImageURL}/>

                    <label htmlFor="" className="car-modal__label">Modifications:</label>
                    <textarea className="car-modal__textarea" name="modifications" value={modifications} rows="4" cols="50"/>        
                </div>
                <div className="car-modal__section3">
                <button className="car-modal__buttons">C A N C E L</button>
                <button className="car-modal__buttons">S A V E</button>
                <button className="car-modal__buttons">D E L E T E</button>
                </div>        
            </form>  
        </div>
    </>
}

export default CarModal


