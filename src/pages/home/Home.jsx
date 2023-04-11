import { useState } from 'react';
import Main from '../../components/main/Main'
import Rightbar from '../../components/rightbar/Rightbar'
import './home.scss'

const Home = () => {
  const [questionNumber, setQuestionNumber] = useState(2);
  return (
    <>
        <div className="home">
          <Main questionNumber={questionNumber} setQuestionNumber={setQuestionNumber}/>
          <Rightbar questionNumber={questionNumber}/>
        </div>
    </>
  )
}

export default Home