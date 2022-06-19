import React from 'react'
import "./MenuBar.scss"

const MenuBar = ({setSearchTerm, setSelectedCar}) => {
    const handleInput = event => setSearchTerm(event.target.value)
    const registerNewCar = () => {
        let newCar = {
            "carId": null,
            "manufacturer": "",
            "model": "",
            "year": "",
            "colour": "",
            "registrationState": "",
            "registrationNumber": "",
            "vin": "",
            "doors": "",
            "seats": "",
            "ownerName": "",
            "ownerCoNo": "",
            "price": "",
            "engineCapacity": "",
            "modifications": "",
            "mileage": "",
            "wikiURL": "",
            "videoURL": "",
            "mainImageURL": [],
            "imagesURL": null   
        }
    setSelectedCar(newCar)
    }

    return <>
        <div className="menu-bar">
            <button className="menu-bar__add-a-car" onClick={registerNewCar}>Register a Car</button>
            <label htmlFor="" className="menu-bar__label">Search:
                <input type="text" className="menu-bar__input" onChange={handleInput} />
            </label>
        </div>
    </>
}
export default MenuBar