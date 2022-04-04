import React, {useState} from 'react';

import './App.css';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/UI/Button/Demo/DemoOutput';

function App() {
  const [toggleP, setToggleP] = useState(false);


  const toggleParagraphHandler = () =>{
    setToggleP( prevToggle => !prevToggle);
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={toggleP} />
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
