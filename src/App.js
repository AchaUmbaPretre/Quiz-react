import { useState } from 'react';
import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';

function App() {
  const [username, setUsername] = useState(null)

  return (
    <div className="App">
      { username ? (<Home/>) : <Login setUsername={setUsername}/> }
    </div>
  );
}

export default App;
