import React from 'react';
import './App.css'
import FunctionClick from './components/functionClick';
import ClassClick from './components/ClassClick';

function App() {
  return (
    <div className="app">
      <h1>Learn React JS</h1>
        <FunctionClick /><br></br>
        <ClassClick />
    </div>
  )
}

export default App
