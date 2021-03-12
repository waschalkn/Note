import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import List from './components/List';
import Note from './components/Note';

function App() {
  return (
    <div className="App">
      <Nav />
      <List />
      <Note />
    </div>
  );
}

export default App;
