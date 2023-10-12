import React, { useEffect } from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState([]);

  const [result, setResult] = useState(() =>{
    const storedResult = localStorage.getItem('result');
    return  storedResult ? parseInt(storedResult) : 0;
  });



 useEffect(( )=>{
  localStorage.setItem('result' ,result.toString());
 },[result]);


  const buttonClick = (e) => {
    setValue(value + e.target.value);
  };

  const equalClick = () => {
    try {
      
      const equalTo = eval(value);
      setResult(equalTo.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const clearDisplay = () => {
    setValue('');
    setResult('');
  };

  return (
    <>
      <div>
        <div className="main-container">
          <h1>Calculator</h1>
        <div className="container">
          <input className="first-inp" type="search" name="value" id="" value={value} />
          <input className="first-inp" type="search" name="result" id="" value={result} />
          <div className="all-button" >
            <button value="clearDisplay" onClick={clearDisplay} id="clr">C</button>
            <button value="%" onClick={buttonClick}>%</button>

            <button value="+" onClick={buttonClick} id="plus">+</button>
            <div>
              <button value="7" onClick={buttonClick}>7</button>
              <button value="8" onClick={buttonClick}>8</button>
              <button value="9" onClick={buttonClick}>9</button>
              <button value="/" onClick={buttonClick}>/</button>
            </div>
            <div>
              <button value="4" onClick={buttonClick}>4</button>
              <button value="5" onClick={buttonClick}>5</button>
              <button value="6" onClick={buttonClick}>6</button>
              <button value="*" onClick={buttonClick}>x</button>
            </div>
            <div>
              <button value="1" onClick={buttonClick}>1</button>
              <button value="2" onClick={buttonClick}>2</button>
              <button value="3" onClick={buttonClick}>3</button>
              <button value="-" onClick={buttonClick}>-</button>

            </div>
            <div>
              <button value="." onClick={buttonClick}>.</button>
              <button value="0" onClick={buttonClick}>0</button>
              <button value="00" onClick={buttonClick}>00</button>
              <button value="=" id='eql' onClick={equalClick}>=</button>

              
            </div>
            
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
