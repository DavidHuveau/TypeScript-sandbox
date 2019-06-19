import React from 'react';
import './App.css';
import Home from './components/Home';

// const App: React.FC = () => {
const App = () => {
  return (
    <div className="App">
      <Home />
      <Home name="Dave"/>
    </div>
  );
}

export default App;
