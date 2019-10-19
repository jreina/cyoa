import React from 'react';
import './App.css';
import { Story } from './components/Story';
import { DarkRoom } from './stories/darkroom';


function App() {
  return (
    <Story story={DarkRoom} />
  );
}

export default App;
