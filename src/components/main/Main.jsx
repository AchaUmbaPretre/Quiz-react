import { useContext, useState } from 'react';
import { EarnedContext } from '../../context/context';
import Timer from '../timer/Timer';
import Trivia from '../trivia/Trivia'
import './main.css'

const Main = ({questionNumber, setQuestionNumber}) => {
  const [stop, setStop] = useState(false);
  const {earned, setEarned} = useContext(EarnedContext);

    const reponses = [
      {
        id: 1,
        question: "Quel est le nom de la capital ?",
        reponse: [
          {
            text : "Bas-congo",
            correct: false
          },
          {
            text: "Equateur",
            correct: false
          },
          {
            text : "Kinshasa",
            correct: true
          },
          {
            text : "Lubumbashi",
            correct: false
          }
            
        ]
      },
      {
        id: 2,
        question: "Quel est le premier ministre de la RDC ?",
        reponse: [
          {
            text : "Muzito",
            correct: false
          },
          {
            text: "Lumumba",
            correct: true
          },
          {
            text : "kasa-vubu",
            correct: false
          },
          {
            text : "Kizenga",
            correct: false
          }  
        ]
      }]

  return (
    <>
      <div className="main">
        <div className="main-container">
        {stop ? (<h1 className="main-earned">You  earned : $ {earned} </h1>) : (
        <>
          <div className="main-top">
              <div className="main-row">
                <span className="main-time"><Timer setStop={setStop} questionNumber={questionNumber} /></span>
              </div> 
          </div>
          <div className="main-bottom">
              <Trivia reponses={reponses} setStop={setStop} questionNumber={questionNumber} setQuestionNumber={setQuestionNumber}/>
          </div>
        </>)}
        </div> 
          
      </div>
    </>
  )
}

export default Main