import React from 'react'
import "./Header.scss"
import HeaderImage from "../../components/HeaderImage/HeaderImage"
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle'

//import MainHeading from "../../components/MainHeading/MainHeading"
import redHotRod from "../../assets/images/red-hotrod.jpg"
import yellowHotRod from "../../assets/images/yellow-hotrod.png"

const Header = () => {

  return <>
    <div className="header-container">
      <HeaderImage source={yellowHotRod} altText="Red Hot Rod"/>
      <HeaderTitle text="Syd's Hot Rods"/>
      <HeaderImage source={redHotRod} altText="Yellow Hot Rod"/>
    </div>
  </>
}

export default Header