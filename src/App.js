import './App.css';
import React from 'react';
import Banner from './components/Banner/Banner';
import MoviesList from './components/MoviesList/MoviesList';
import Footer from './components/Footer/Footer';
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  return (
    <div>
      <ErrorBoundary>
        <Banner />
      </ErrorBoundary>
      <ErrorBoundary>
        <MoviesList />
      </ErrorBoundary>
      <ErrorBoundary>
        <Footer /> 
      </ErrorBoundary>
    </div>
  );
}

export default App;
