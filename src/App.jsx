import { useState, useEffect, startTransition } from "react";
import './App.scss';
import Header from "./containers/Header/Header";
import CardContainer from "./containers/CardContainer/CardContainer";

function App() {
  let [carList, setCarList] = useState()
  let baseURL = process.env.REACT_APP_API_URL
   console.log(baseURL)
  useEffect(() => {
    fetch(baseURL + "/cars")
    .then(resp => resp.json())
    .then(cars => setCarList(cars))
  },
  [])

  return (
    <div className="App">
      <Header/>
      <CardContainer carList={carList}/>
    </div>
  );
}

export default App;



