import { useState } from 'react';


function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState;

  const ops =['/','*', '+', '-', '.' ];


    const createDigits = ()  => {
      const digits = [];

     for (let i = 1; i < 10; i++) {
      digits.push(
        <button key={i}>{i}</button>
      )
     }
     return digits
    }


  return (
    <div className="App">
      <div className="calculator"></div>
        <div className="display">
          <span>(0)</span> 0
        </div>
        
        <div>
          <button>/</button>
          <button>*</button>
          <button>+</button>
          <button>-</button>

          <butt>DELETE</butt>
          </div>
          <div className="digits">
            {createDigits()}
            <button>0</button>
            <button>.</button>
            <button>=</button>
          </div>
    </div>
  );
}

export default App;
