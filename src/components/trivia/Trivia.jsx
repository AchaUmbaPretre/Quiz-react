import './trivia.css'
import { useEffect, useState } from 'react'
import useSound from 'use-sound';
import play from './../../sounds/play.mp3'
import correct from './../../sounds/correct.mp3'
import wrong from './../../sounds/wrong.mp3'

const Trivia = ({reponses,setStop,questionNumber,setQuestionNumber}) => {

  const [questions, setQuestions] = useState(null);
  const [selectedAnswer, setSelectdAnswer] = useState(null);
  const [className, setClassName] = useState('answer');
  const [lestplay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);

  useEffect(() => {
    lestplay();
  }, [lestplay])

  useEffect(() => {
    setQuestions(reponses[questionNumber - 1])
  }, [reponses, questionNumber])

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback()
    }, duration)
  }

  const handleclick = (r) =>{
    setSelectdAnswer(r);
    setClassName('reponse active');
    delay(3000, ()=>{
      setClassName(r.correct ? 'reponse correct' : 'reponse wrong' )
    });

    delay(5000, ()=>{
      if(r.correct){
        correctAnswer()
        delay(1000, ()=>{
          setQuestionNumber((prev)=> prev + 1 );
          setSelectdAnswer(null)
        })
      }
      else{
        wrongAnswer()
        delay(1000, ()=>{
          setStop(true);
        })

      }
    });
    
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