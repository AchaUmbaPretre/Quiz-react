import { useRef } from 'react'
import './login.css'
const Login = ({setUsername}) => {

    const inputRef = useRef();
    const handClick  = () =>{
        setUsername(inputRef.current.value)
    }
  return (
    <>
        <div className="login">
            <div className="login-container">
                <input type="text" className="login-input" ref={inputRef} placeholder='entrer votre nom...' />
                <button className="login-btn" onClick={handClick}>START</button>
            </div>
        </div>
    </>
  )
}

export default Login