import { useContext } from 'react'
import { QuizContext } from '../context/quiz';
import { toast } from 'react-toastify'
import './question.css'

import Option from './Option';

const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext)
    const currentQuestion = quizState.questions[quizState.currentQuestion]


    const onSelectOption = (option) =>{
        dispatch({
            type: 'CHECK-ANSWER',
            payload: {answer: currentQuestion.answer, option},
            alternativa : option
        })

        

        if(quizState.answerSelected === false){
            if(option === currentQuestion.answer){
                toast.success(`Muito bem! Você já acertou ${quizState.score +1}.` , {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
                });
            }else{
                toast.error('Você errou, continue tentando!', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'colored',
                    });
            }
        }
        
    }

  return (
    <div id='questions'>
        <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
        <h2>{currentQuestion.question}</h2>
        <div id='options-container'>
            {currentQuestion.options.map((option)=>(
                <Option
                    option={option} 
                    key={option} 
                    answer={currentQuestion.answer}
                    selectOption={ ()=> onSelectOption(option)}
                    
                    
                />
            ))}
        </div>
        {quizState.answerSelected && <button onClick={()=> dispatch({type: 'CHANGE_QUESTIONS'})}>Continuar</button>}
    </div>
  )
}

export default Question