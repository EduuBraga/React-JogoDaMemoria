import React, { createContext } from "react";
import { game } from "../game/game";

export const ClickContext = createContext()

export function ClickProvider(props){
  function handleClick(card) {
    game.flipCard(card.id, () => {
      props.setGameover(true)
    }, () => {
      props.setCards([...game.cartas])
    })
    props.setCards([...game.cartas])
  }


  return(
    <ClickContext.Provider value={handleClick}>
      {props.children}
    </ClickContext.Provider>
  )
}