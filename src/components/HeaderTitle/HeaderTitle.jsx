import React from 'react'
import "./HeaderTitle.scss"

const HeaderTitle = ({text}) => {
  let wordArray = text.split(" ")  
  return <>
    <div className="header-title">
        {wordArray.map(word => <h1 className="header-title__word">{word}</h1>)}
    </div>
  </>
}

export default HeaderTitle