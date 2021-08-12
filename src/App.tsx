import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Summary from './components/Account/Summary/Summary';

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Summary />
    </div>
  );
}

export default App;
