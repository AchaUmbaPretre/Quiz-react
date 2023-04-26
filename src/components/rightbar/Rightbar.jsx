import { useContext, useEffect, useMemo } from 'react'
import { EarnedContext } from '../../context/context';
import './rightbar.css'

const Rightbar = ({questionNumber}) => {
  const { setEarned } = useContext(EarnedContext);
    
    const data = useMemo(()=>
      [
        {id:  1, montant: 100},
        {id:  2, montant: 200},
        {id:  3, montant: 300},
        {id:  4, montant: 400},
        {id:  5, montant: 500},
        {id:  6, montant: 1000},
        {id:  7, montant: 2000},
        {id:  8, montant: 4000},
        {id:  9, montant: 8000},
        {id:  10, montant: 16000},
        {id:  11, montant: 32000},
        {id:  12, montant: 64000}
      ].reverse(), [])

    useEffect(()=>{
      questionNumber > 1 && setEarned(data.find((d)=> d.id === questionNumber - 1).montant);
    },[data,questionNumber])

  return (
    <>
        <div className="rightbar">
            <div className="rightbar-container">
              <ul>
                { data.map((d)=>(
                <li className= {questionNumber === d.id ? "rightLi active" : "rightLi" } key={d.id} ><span className= {questionNumber === d.id ? "numero active" : "numero" } >{d.id}</span><span className="prix">{`$ ${d.montant}`}</span></li>
                ))}
              </ul>
            </div>
        </div>
    </>
  )
}

export default Rightbar