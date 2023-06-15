import { useState } from 'react'
import './App.css'

function App() {
  const [result, setresult] = useState("")

  const Click = (e) => {
    setresult(result.concat(e.target.name));
  }

  const clears = () =>{
    setresult("");
  }

  const cal = () => {
    try{
      setresult(eval(result).toString());
    }catch(err){
      setresult("Error")
  }
}

  return (
        <div className='background'>
          <p>Calculator</p>
          <hr />
        <form>
          <input type="text" value={result}/>
        </form>
        <hr />
        <div id='btn'>
          <button name="7" onClick={Click}  className='a'>7</button>
          <button name="8" onClick={Click}>8</button>
          <button name="9" onClick={Click}>9</button>
          <button name="/" onClick={Click}>&divide;</button>
          <button name="4" onClick={Click}>4</button>
          <button name="5" onClick={Click}>5</button>
          <button name="6" onClick={Click}>6</button>
          <button name="*" onClick={Click}>&times;</button>
          <button name="1" onClick={Click}>1</button>
          <button name="2" onClick={Click}>2</button>
          <button name="3" onClick={Click}>3</button>
          <button name="+" onClick={Click}>+</button>
          <button name="." onClick={Click}>.</button>
          <button name="0" onClick={Click}>0</button>
          <button onClick={cal}>=</button>
          <button name="-" onClick={Click}>&ndash;</button>
          <button onClick={clears} id='cls'>clear</button>
          </div>
          </div>
  )
}

export default App
