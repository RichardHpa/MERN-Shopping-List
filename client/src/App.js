import React from 'react';
import AppNavBar from './components/AppNavbar.js';
import ShoppingList from './components/ShoppingList.js';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <div className="App">
        <AppNavBar />
        <ShoppingList />
    </div>
  );
}

export default App;
