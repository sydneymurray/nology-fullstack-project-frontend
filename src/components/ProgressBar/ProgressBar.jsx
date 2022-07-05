import React from 'react'
import { useState, useEffect } from 'react'
import "./ProgressBar.scss"
let fillPercentage = 0


const ProgressBar = () => {
    const [style, setStyle] = useState()
    useEffect(() => {
        setInterval(() => {updateProgressBar()}, 500)},[])

    const updateProgressBar = () => {
        if (fillPercentage === 100) fillPercentage = -5
        fillPercentage += 2.5
        let newStyle = {
            backgroundColor: "#212e9c",
            height: "100%",
            width: `${fillPercentage}%`,
        }
        console.log(fillPercentage)
        setStyle(newStyle)
    }

    return <>
        <div className="progress-bar">
            <div className="progress-bar__fill" style={style}></div>
        </div>
  </>
}

export default ProgressBar

