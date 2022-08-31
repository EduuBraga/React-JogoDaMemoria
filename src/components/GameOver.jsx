import React, { useEffect } from "react";
import { Result } from "./Result";

export function GameOver(props) {
  useEffect(() => {
    props.stopTimer()
    props.setTimervisible(false)
  }, [])

  const restart = () => {
    props.handleRestart()
    props.clearTimer()
    props.setTimervisible(true)
    setTimeout(() => {
      props.startTimer()
    }, 500)
  }

  return (
    <div className="gameOver">
      <div>
        Parabéns! Você finalizou o game em {props.minutes < 10 ? "0" + props.minutes : props.minutes}:{props.seconds < 10 ? "0" + props.seconds : props.seconds}
      </div>
      
      <Result seconds={props.seconds} minutes={props.minutes}></Result>

      <button className="restart" onClick={() => { restart() }}>Jogue Novamente</button>
    </div>
  )
}