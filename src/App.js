import React from 'react';
import CopyWidget from './components/CopyWidget';
import './App.css';

function App() {
  const text1 = 'Some text to copy';
  const text2 = 'Some different text to copy';
  return (
    <div className="App">
      <h1>Copy Widget Demo</h1>
      <span>{text1}</span>
      <CopyWidget text={text1}/>
      <br/>
      <span>{text2}</span>
      <CopyWidget text={text2}/>

    </div>
  );
}

export default App;
