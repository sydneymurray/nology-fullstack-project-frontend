import { useState, useEffect } from "react";
import './App.scss';
import Header from "./containers/Header/Header";
import CardContainer from "./containers/CardContainer/CardContainer";
import MenuBar from "./containers/MenuBar/MenuBar";
import CarModal from "./containers/CarModal/CarModal";
import Footer from "./containers/Footer/Footer";

function App() {
  const [carList, setCarList] = useState()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCar, setSelectedCar] = useState(null)
  const APIURL = process.env.REACT_APP_API_URL

  useEffect(() => {
    fetch(APIURL + "/cars")
    .then(resp => resp.json())
    .then(cars => setCarList(cars))
  },[])
  

  return <>
    <div className="App">
      <Header/>
      <MenuBar setSearchTerm={setSearchTerm} setSelectedCar={setSelectedCar}/>
      <CardContainer carList={carList} searchTerm={searchTerm} setSelectedCar={setSelectedCar}/>
      {selectedCar && <CarModal selectedCar={selectedCar} setSelectedCar={setSelectedCar}
        carList={carList} setCarList={setCarList}/>}
      <Footer/>  
    </div>
  </>
}

export default App;



