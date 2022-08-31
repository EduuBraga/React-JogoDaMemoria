import React, { useState } from "react"
import { GameBoard } from "./components/GameBoard"
import { GameOver } from "./components/GameOver"
import { ClickProvider } from "./provider/ClickProvider"
import { StartGame } from "./components/HomeScreen"
import { game } from "./game/game"
import { Timer } from "./components/Timer"

export function MemoryGame() {
  const [gameover, setGameover] = useState(false)
  const [startgameVisible, setStartgameVisible] = useState(true)
  const [timervisible, setTimervisible] = useState(false)
  const [cards, setCards] = useState([])

  function restart() {
    game.limparCartas()
    setCards(game.criarCartasParaPerso())
    setGameover(false)
  }

  function startGame() {
    setCards(game.criarCartasParaPerso())
    setStartgameVisible(false)
  }

  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [customInterval, setCustomInterval] = useState(null)

  function startTimer() {
    setCustomInterval(
      setInterval(() => {
        changeTimer()
      }, 1000)
    )
  }

  function changeTimer() {
    setSeconds((prevState) => {
      if (prevState + 1 === 60) {
        setMinutes((valorAntigo) => { return valorAntigo + 1 })
        return 0
      }
      return prevState + 1
    })
  }

  function clearTimer() {
    stopTimer()
    setSeconds(0)
    setMinutes(0)
  }

  function stopTimer() {
    if (customInterval) {
      clearInterval(customInterval)
    }
  }

  return (
    <>
      {timervisible && <Timer seconds={seconds} minutes={minutes}></Timer>}
      <ClickProvider setCards={setCards} setGameover={setGameover}>
        <GameBoard cards={cards}></GameBoard>
      </ClickProvider>

      {gameover && <GameOver setTimervisible={setTimervisible} startTimer={startTimer} seconds={seconds} minutes={minutes} clearTimer={clearTimer} stopTimer={stopTimer} handleRestart={restart}></GameOver>}
      {startgameVisible && <StartGame setTimervisible={setTimervisible} startTimer={startTimer} startGame={startGame}></StartGame>}
    </>
  )
}
