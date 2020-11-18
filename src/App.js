import logo from './logo.svg';
import './App.css';
import React from 'react';
import Banner from './Banner'
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div>
      <Banner />
      <Button className="AddMovie" variant="danger">Danger</Button>
    </div>
  );
}

export default App;
