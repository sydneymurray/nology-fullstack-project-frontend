import "./Footer.scss"
import {useState, useEffect} from "react"

export default function Footer(){
  const [sigTime, setSigTime] = useState()
  
  useEffect(() => {
    setInterval(() => setSigTime(new Date().toString().slice(15,24)), 1000)
  }, [])  

  return <>
    <div className="Footer">
      <div className="signature">
        <h4>&copy; Brodda Syd Corp</h4>
        <span className="sig-time">{sigTime}</span>
      </div>
      <div className="signature">
        <h4>Contact us:</h4>
        <span>0118 999 881 999 119 7253</span>
      </div>
      <div className="signature">
        <h4>Address:</h4>
        <p>10 Downing Street</p>
      </div>
      <div>
        <h4>Email:</h4>
        <span>info@sydshotrods.com</span>
      </div>
    </div>
  </>
 }




