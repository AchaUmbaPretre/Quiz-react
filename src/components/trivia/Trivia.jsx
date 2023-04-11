import { useEffect, useState } from 'react'
import './trivia.scss'

const Trivia = ({reponses,setStop,questionNumber,setQuestionNumber}) => {

  const [questions, setQuestions] = useState(null);
  const [selectedAnswer, setSelectdAnswer] = useState(null);
  const [className, setClassName] = useState('answer');

  useEffect(()=>{
    setQuestions(reponses[questionNumber - 1])
  }, [reponses, questionNumber])

  const handleclick = (r) =>{
    setSelectdAnswer(r);
    setClassName('reponse active');

    setTimeout(()=>{
      setClassName(r.correct ? 'reponse correct' : 'reponse wrong' )
    }, 3000)
  }


  return (
    <>
        <div className="trivial">
            <div className="trivial-container">
                <div className="question">{questions?.question}</div>
                <div className="trivial-rows">
                  { questions?.reponse.map((r)=>( 
                  <div className= { selectedAnswer === r ? className : 'reponse'} onClick={()=>handleclick(r)} >{r.text}</div>
                  ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default Trivia