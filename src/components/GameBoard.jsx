import React from "react";
import { CardElement } from "./CardElement";

export function GameBoard(props){
  return(
    <div id="gameboard">
      {props.cards.map((card,index)=>
        <CardElement key={index} card={card}></CardElement>
      )}
    </div>
  )
}