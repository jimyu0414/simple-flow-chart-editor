import React from 'react';
import './App.scss';
import DragPanel from './DragPanel'; 
import MenuPanel from './MenuPanel';

function App() {
  return (
    <div className="app">
      <MenuPanel/>
      <DragPanel/>
    </div>
  );
}

export default App;
