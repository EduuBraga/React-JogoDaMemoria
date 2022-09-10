import React from "react"

export function StartGame(props){
  function gameRun(){
    props.startGame()
    props.startTimer()
    props.setTimervisible(true)
  }

  return(
    <div className="homescreen">
      <div>
        Clique no botão para iniciar o game, Boa Sorte!
      </div>
      <button className="homescreen--button" onClick={()=>{gameRun()}}>Iniciar o game</button>
    </div> 
  )
}