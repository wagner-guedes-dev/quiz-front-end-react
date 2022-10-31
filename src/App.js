
import { useContext, useEffect } from 'react'
import { QuizContext } from './context/quiz';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Welcome from './components/Welcome'
import Question from './components/Question'
import GameOver from './components/GameOver';

import './App.css';




function App() {
  const [quizState, dispatch] = useContext(QuizContext)

  useEffect( ()=>{
    //embaralhar as perguntas
    dispatch({type: 'REORDER_QUESTIONS'})
  },[] )
  
  return (
    <div className="App">
      <ToastContainer/>
      <h1>Quiz Front-End</h1>
        {quizState.gameStage === 'Start' && <Welcome/>}
        {quizState.gameStage === 'Playing' && <Question/>}
        {quizState.gameStage === 'End' && <GameOver/>}

    </div>
  );
}

export default App;
