import React from 'react'

import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import WellDone from '../img/welldone.svg'


import './GameOver.css'

const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext)
  return (
    <div id='gameover'>
        <h2>Fim de Jogo!</h2>
        <p>Pontuação: {quizState.score} </p>
        <p>Voce acertou: {quizState.score} de {quizState.questions.length} perguntas</p>
        <img src={WellDone} alt='fim do quiz'/>
        <button onClick={()=> dispatch({type: 'NEW_GAME'})}>Reiniciar</button>
    </div>
  )
}

export default GameOver