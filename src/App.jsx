import { useState, useEffect } from "react";
import './App.scss';
import Header from "./containers/Header/Header";
import CardContainer from "./containers/CardContainer/CardContainer";
import MenuBar from "./containers/MenuBar/MenuBar";
import CarModal from "./containers/CarModal/CarModal";

function App() {
  let [carList, setCarList] = useState()
  let [searchTerm, setSearchTerm] = useState("")
  let [selectedCar, setSelectedCar] = useState(null)
  let baseURL = process.env.REACT_APP_API_URL

  console.log(baseURL)

  useEffect(() => {
    fetch(baseURL + "/cars")
    .then(resp => resp.json())
    .then(cars => setCarList(cars))
  },[])
  
  return (
    <div className="App">
      <Header/>
      <MenuBar setSearchTerm={setSearchTerm}/>
      <CardContainer carList={carList} searchTerm={searchTerm} setSelectedCar={setSelectedCar}/>
      {selectedCar && <CarModal selectedCar={selectedCar} setSelectedCar={setSelectedCar}/>}
    </div>
  );
}

export default App;



