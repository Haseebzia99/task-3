import './App.css';
import React, {useState} from 'react';
import MainBanner from './components/Banner/MainBanner';
import MoviesList from './components/MoviesList/MoviesList';
import Footer from './components/Footer/Footer';
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  const [switchBanner, setswitchBanner,] = useState(false);
  const [switchBannerId, setBannerId] = useState('');
  console.log(switchBannerId)
  return (
    <div>
      <ErrorBoundary>
        <MainBanner switchBanner={switchBanner} setswitchBanner={setswitchBanner} switchBannerId={switchBannerId}/>
      </ErrorBoundary>
      <ErrorBoundary>
        <MoviesList setswitchBanner={setswitchBanner} setBannerId={setBannerId} />
      </ErrorBoundary>
      <ErrorBoundary>
        <Footer /> 
      </ErrorBoundary>
    </div>
  );
}

export default App;
