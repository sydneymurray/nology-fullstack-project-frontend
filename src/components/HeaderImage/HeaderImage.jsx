import React from 'react'
import "./HeaderImage.scss"

const HeaderImage = ({source, altText}) => {
  return (
    <img className="header-image" src={source} alt={altText} />
  )
}

export default HeaderImage