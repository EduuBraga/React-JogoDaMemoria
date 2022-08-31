import React from "react"

export function Timer(props) {
  return (
    <div className="timer">
      {props.minutes < 10? "0" + props.minutes: props.minutes}:
      {props.seconds < 10? "0" + props.seconds: props.seconds}
    </div>
  )
}