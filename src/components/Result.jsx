import React from "react";

export function Result(props) {
  const resultadoFinal = () => {
    if (props.minutes >= 2) {
      return 'Precisa melhorar!'
    }
    if (props.minutes >= 1 && props.seconds >= 0) {
      return 'Mediano! Da pra melhorar'
    }
    if (props.seconds <= 60 && props.minutes <= 0) {
      return 'Excelente!'
    }
  }

  return (
    <div>
      <p>Você foi <span className="resultado">{`${resultadoFinal()}`}</span></p>
    </div>
  )
}