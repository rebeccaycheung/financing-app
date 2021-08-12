import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import AccountsSummary from './components/Account/AccountsSummary';
import BillsSummary from './components/Bill/BillsSummary';
import Spending from './components/Spending/Spending';

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Spending />
      <AccountsSummary />
      <BillsSummary />
    </div>
  );
}

export default App;
