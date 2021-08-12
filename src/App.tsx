import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import AccountsSummary from './components/Account/AccountsSummary';
import BillsSummary from './components/Bill/BillsSummary';

function App() {
  return (
    <div className="App">
      <Dashboard />
      <AccountsSummary />
      <BillsSummary />
    </div>
  );
}

export default App;
