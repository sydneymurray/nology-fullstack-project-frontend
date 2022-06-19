import React from 'react'
import CardContainer from '../CardContainer/CardContainer'
import "./CarModal.scss"

const CarModal = ({selectedCar, setSelectedCar, carList, setCarList}) => {
    let {manufacturer, model, year, colour, registrationState, registrationNumber, vin} = selectedCar  
    let {doors, seats, ownerName, ownerCoNo, price, engineCapacity, modifications} = selectedCar
    let {mileage, wikiURL, videoURL, mainImageURL, imagesURL, carId} = selectedCar  
    let APIURL = process.env.REACT_APP_API_URL
    
    const handleSubmit = event =>{
        event.preventDefault()
        
        const updateCar = updatedCar => {
            fetch(APIURL + "/car/" + carId,{
                method:'PUT',
                headers:{'Content-Type': 'Application/json'},
                body: JSON.stringify(updatedCar)
            })
            .then(response => {
                if(!response.ok){
                    alert(`An error occurred: ${updatedCar.manufacturer} ${updatedCar.model} has not been updated!`)
                    return
                }
                alert(`${updatedCar.manufacturer} ${updatedCar.model} was successfully updated`)
                let updatedCarList = carList.map(car => {
                    if (car.carId === carId) return updatedCar
                    return car
                })
                setSelectedCar(null)
                setCarList(updatedCarList)
            })
        }

        const registerCar = updatedCar => {
            fetch(APIURL + "/car/",{
                method:'POST',
                headers:{'Content-Type': 'Application/json'},
                body: JSON.stringify(updatedCar)
            })
            .then(response => {
                if(!response.ok){
                    alert(`An error occurred: ${updatedCar.manufacturer} ${updatedCar.model} has not been saved!`)
                    return
                }
                return response.json()
            })
            .then(carData =>{
                alert(`${carData.manufacturer} ${carData.model} was successfully saved`)
                setSelectedCar(null)
                setCarList([...carList, carData])
             })
        }

        const carDetails = event => {
            return {
                "carId": carId,
                "manufacturer": event.target.manufacturer.value,
                "model": event.target.model.value,
                "year": event.target.year.value,
                "colour": event.target.colour.value,
                "registrationState": event.target.registrationState.value,
                "registrationNumber": event.target.registrationNumber.value,
                "vin": event.target.vin.value,
                "doors": event.target.doors.value,
                "seats": event.target.seats.value,
                "ownerName": event.target.ownerName.value,
                "ownerCoNo": event.target.ownerCoNo.value,
                "price": event.target.price.value,
                "engineCapacity": event.target.engineCapacity.value,
                "modifications": event.target.modifications.value,
                "mileage": event.target.mileage.value,
                "wikiURL": event.target.wikiURL.value,
                "videoURL": event.target.videoURL.value,
                "mainImageURL": event.target.mainImageURL.value,
                "imagesURL": null   
            }
        }
        let updatedCar = carDetails(event)
        carId ? updateCar(updatedCar) : registerCar(updatedCar)
    }




    const deleteCar = () => {
        if(!window.confirm("Really Delete " + manufacturer + " " + model + "?")) return
        
        fetch(APIURL + "/car/" + carId,{
            method:'DELETE'
        })
        alert(manufacturer + " " + model + " has been Deleted!")
        let updatedCarList = carList.filter(car => car.carId !== carId)
        setSelectedCar(null)
        setCarList(updatedCarList)
    }

    return <>
        <div className="car-modal-background">
            <form className="car-modal" onSubmit={handleSubmit}>
                <h2 className="car-modal__heading">{manufacturer + " " + model}</h2>
                <img className="car-modal__image" src={mainImageURL} alt={manufacturer + " " + model}/>
                <div className="car-modal__section1">
                    <label htmlFor="" className="car-modal__label">Manufacturer:</label>
                    <input type="text" className="car-modal__input" name="manufacturer" defaultValue={manufacturer} required/>
                    
                    <label htmlFor="" className="car-modal__label">Model:</label>
                    <input type="text" className="car-modal__input" name="model" defaultValue={model} required/>
                    
                    <label htmlFor="" className="car-modal__label">Colour:</label>
                    <input type="text" className="car-modal__input" name="colour" defaultValue={colour} required/>
                    
                    <label htmlFor="" className="car-modal__label">Year:</label>
                    <input type="text" className="car-modal__input" name="year" defaultValue={year} required/>
                    
                    <label htmlFor="" className="car-modal__label">Registered:</label>
                    <input type="text" className="car-modal__input" name="registrationState" defaultValue={registrationState} required/>
                    
                    <label htmlFor="" className="car-modal__label">Plate:</label>
                    <input type="text" className="car-modal__input" name="registrationNumber" defaultValue={registrationNumber} required/>
                    
                    <label htmlFor="" className="car-modal__label">VIN:</label>
                    <input type="text" className="car-modal__input" name="vin" defaultValue={vin} required/>
                    
                    <label htmlFor="" className="car-modal__label">Doors:</label>
                    <input type="text" className="car-modal__input" name="doors" defaultValue={doors} required/>
                    
                    <label htmlFor="" className="car-modal__label">Seats:</label>
                    <input type="text" className="car-modal__input" name="seats" defaultValue={seats} required/>
                    
                    <label htmlFor="" className="car-modal__label">Owner:</label>
                    <input type="text" className="car-modal__input" name="ownerName" defaultValue={ownerName} required/>
                    
                    <label htmlFor="" className="car-modal__label">CoNo:</label>
                    <input type="text" className="car-modal__input" name="ownerCoNo" defaultValue={ownerCoNo} required/>
                    
                    <label htmlFor="" className="car-modal__label">Price:</label>
                    <input type="text" className="car-modal__input" name="price" defaultValue={price} required/>
                    
                    <label htmlFor="" className="car-modal__label">Engine:</label>
                    <input type="text" className="car-modal__input" name="engineCapacity" defaultValue={engineCapacity} required/>
                    
                    <label htmlFor="" className="car-modal__label">Mileage:</label>
                    <input type="text" className="car-modal__input" name="mileage" defaultValue={mileage} required/>
                    
                    {carId && <label htmlFor="" className="car-modal__label">Lott:</label>}
                    {carId && <input type="text" className="car-modal__input" name="carId" value={carId} readOnly/>}
                </div>
                <div className="car-modal__section2">
                    <label htmlFor="" className="car-modal__label">Wikipedia:</label>
                    <input type="text" className="car-modal__input" name="wikiURL" defaultValue={wikiURL} required/>
                    
                    <label htmlFor="" className="car-modal__label">Video:</label>
                    <input type="text" className="car-modal__input" name="videoURL" defaultValue={videoURL} required/>
                    
                    <label htmlFor="" className="car-modal__label">Main Image:</label>
                    <input type="text" className="car-modal__input" name="mainImageURL" defaultValue={mainImageURL} required/>

                    <label htmlFor="" className="car-modal__label">Modifications:</label>
                    <textarea className="car-modal__textarea" name="modifications" defaultValue={modifications} rows="4" cols="50"/>        
                </div>
                <div className="car-modal__section3">
                    <button type="button" className="car-modal__buttons" onClick={() => setSelectedCar(null)}>C A N C E L</button>
                    <button type="submit" className="car-modal__buttons">{carId ? "U P D A T E" : "S A V E"}</button>
                    {carId && <button type="button" className="car-modal__buttons" onClick={() => deleteCar()}>D E L E T E</button>}
                </div>        
            </form>  
        </div>
    </>
}

export default CarModal

/*
import React from 'react'
import CardContainer from '../CardContainer/CardContainer'
import "./CarModal.scss"

const CarModal = ({selectedCar, setSelectedCar, carList, setCarList}) => {
    let {manufacturer, model, year, colour, registrationState, registrationNumber, vin} = selectedCar  
    let {doors, seats, ownerName, ownerCoNo, price, engineCapacity, modifications} = selectedCar
    let {mileage, wikiURL, videoURL, mainImageURL, imagesURL, carId} = selectedCar  
    let APIURL = process.env.REACT_APP_API_URL
    
    const updateCar = event =>{
        event.preventDefault()
        let updatedCar = {
            "carId": carId,
            "manufacturer": event.target.manufacturer.value,
            "model": event.target.model.value,
            "year": event.target.year.value,
            "colour": event.target.colour.value,
            "registrationState": event.target.registrationState.value,
            "registrationNumber": event.target.registrationNumber.value,
            "vin": event.target.vin.value,
            "doors": event.target.doors.value,
            "seats": event.target.seats.value,
            "ownerName": event.target.ownerName.value,
            "ownerCoNo": event.target.ownerCoNo.value,
            "price": event.target.price.value,
            "engineCapacity": event.target.engineCapacity.value,
            "modifications": event.target.modifications.value,
            "mileage": event.target.mileage.value,
            "wikiURL": event.target.wikiURL.value,
            "videoURL": event.target.videoURL.value,
            "mainImageURL": event.target.mainImageURL.value,
            "imagesURL": null   
        }

        fetch(APIURL + "/car/" + carId,{
            method:'PUT',
            headers:{'Content-Type': 'Application/json'},
            body: JSON.stringify(updatedCar)
        })
        .then(response => {
            if(!response.ok){
                alert(`An error occurred: ${updatedCar.manufacturer} ${updatedCar.model} was has not been updated!`)
                return
            }
            alert(`${updatedCar.manufacturer} ${updatedCar.model} was successfully updated`)
            let updatedCarList = carList.map(car => {
                if (car.carId === carId) return updatedCar
                return car
            })
            setSelectedCar(null)
            setCarList(updatedCarList)
        })
    }

    const deleteCar = () => {
        if(!window.confirm("Really Delete " + manufacturer + " " + model + "?")) return
        
        fetch(APIURL + "/car/" + carId,{
            method:'DELETE'
        })
        alert(manufacturer + " " + model + " has been Deleted!")
        let updatedCarList = carList.filter(car => car.carId !== carId)
        setSelectedCar(null)
        setCarList(updatedCarList)
    }

    return <>
        <div className="car-modal-background">
            <form className="car-modal" onSubmit={updateCar}>
                <h2 className="car-modal__heading">{manufacturer + " " + model}</h2>
                <img className="car-modal__image" src={mainImageURL} alt={manufacturer + " " + model}/>
                <div className="car-modal__section1">
                    <label htmlFor="" className="car-modal__label">Manufacturer:</label>
                    <input type="text" className="car-modal__input" name="manufacturer" defaultValue={manufacturer} required/>
                    
                    <label htmlFor="" className="car-modal__label">Model:</label>
                    <input type="text" className="car-modal__input" name="model" defaultValue={model} required/>
                    
                    <label htmlFor="" className="car-modal__label">Colour:</label>
                    <input type="text" className="car-modal__input" name="colour" defaultValue={colour} required/>
                    
                    <label htmlFor="" className="car-modal__label">Year:</label>
                    <input type="text" className="car-modal__input" name="year" defaultValue={year} required/>
                    
                    <label htmlFor="" className="car-modal__label">Registered:</label>
                    <input type="text" className="car-modal__input" name="registrationState" defaultValue={registrationState} required/>
                    
                    <label htmlFor="" className="car-modal__label">Plate:</label>
                    <input type="text" className="car-modal__input" name="registrationNumber" defaultValue={registrationNumber} required/>
                    
                    <label htmlFor="" className="car-modal__label">VIN:</label>
                    <input type="text" className="car-modal__input" name="vin" defaultValue={vin} required/>
                    
                    <label htmlFor="" className="car-modal__label">Doors:</label>
                    <input type="text" className="car-modal__input" name="doors" defaultValue={doors} required/>
                    
                    <label htmlFor="" className="car-modal__label">Seats:</label>
                    <input type="text" className="car-modal__input" name="seats" defaultValue={seats} required/>
                    
                    <label htmlFor="" className="car-modal__label">Owner:</label>
                    <input type="text" className="car-modal__input" name="ownerName" defaultValue={ownerName} required/>
                    
                    <label htmlFor="" className="car-modal__label">CoNo:</label>
                    <input type="text" className="car-modal__input" name="ownerCoNo" defaultValue={ownerCoNo} required/>
                    
                    <label htmlFor="" className="car-modal__label">Price:</label>
                    <input type="text" className="car-modal__input" name="price" defaultValue={price} required/>
                    
                    <label htmlFor="" className="car-modal__label">Engine:</label>
                    <input type="text" className="car-modal__input" name="engineCapacity" defaultValue={engineCapacity} required/>
                    
                    <label htmlFor="" className="car-modal__label">Mileage:</label>
                    <input type="text" className="car-modal__input" name="mileage" defaultValue={mileage} required/>
                    
                    {carId && <label htmlFor="" className="car-modal__label">Lott:</label>}
                    {carId && <input type="text" className="car-modal__input" name="carId" value={carId} readOnly/>}
                </div>
                <div className="car-modal__section2">
                    <label htmlFor="" className="car-modal__label">Wikipedia:</label>
                    <input type="text" className="car-modal__input" name="wikiURL" defaultValue={wikiURL} required/>
                    
                    <label htmlFor="" className="car-modal__label">Video:</label>
                    <input type="text" className="car-modal__input" name="videoURL" defaultValue={videoURL} required/>
                    
                    <label htmlFor="" className="car-modal__label">Main Image:</label>
                    <input type="text" className="car-modal__input" name="mainImageURL" defaultValue={mainImageURL} required/>

                    <label htmlFor="" className="car-modal__label">Modifications:</label>
                    <textarea className="car-modal__textarea" name="modifications" defaultValue={modifications} rows="4" cols="50"/>        
                </div>
                <div className="car-modal__section3">
                    <button type="button" className="car-modal__buttons" onClick={() => setSelectedCar(null)}>C A N C E L</button>
                    <button type="submit" className="car-modal__buttons">{carId ? "U P D A T E" : "S A V E"}</button>
                    {carId && <button type="button" className="car-modal__buttons" onClick={() => deleteCar()}>D E L E T E</button>}
                </div>        
            </form>  
        </div>
    </>
}

export default CarModal



*/
