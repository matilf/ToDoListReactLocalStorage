import React from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <h3> this is a ToDo list with Local Storage </h3>
        <p>
      <Form/>
        </p>
      </div>
    </div>
  );
}

export default App;
