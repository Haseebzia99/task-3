import './App.css';
import React from 'react';
import Banner from './components/Banner/Banner';
import MoviesList from './components/MoviesList/MoviesList';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Banner />
      <MoviesList />
      <Footer /> 
    </div>
  );
}

export default App;
