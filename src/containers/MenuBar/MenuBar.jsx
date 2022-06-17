import React from 'react'
import "./MenuBar.scss"

const MenuBar = ({setSearchTerm}) => {
    let handleInput = event => {
        setSearchTerm(event.target.value)
    }

    return <>
        <div className="menu-bar">
            <button className="menu-bar__add-a-car" >Register a Car</button>
            <label htmlFor="" className="menu-bar__label">Search:
                <input type="text" className="menu-bar__input" onChange={handleInput} />
            </label>
        </div>
    </>
}
export default MenuBar