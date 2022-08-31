import React, { useContext } from "react"
import { ClickContext } from "../provider/ClickProvider"

export function CardElement(props) {
  const HandleClick = useContext(ClickContext)
 
  return (
    <div onClick={()=>{HandleClick(props.card)}} id={props.card.id} className={`card ${props.card.inverso? "flip": ""}`}>
      <div className="card-front">
        <img className="icon" src={`./assets/images/${props.card.icone}.png`} alt={props.card.icone}/>
      </div>
      <div className="card-back">
        <img className="img-twd" src="./assets/images/twd-logo.png" alt="Logo The Walking Dead" />
      </div>
    </div>
  )
}