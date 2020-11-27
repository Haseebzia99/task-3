import './App.css';
import React, {useState} from 'react';
import MainBanner from './components/Banner/MainBanner';
import MoviesList from './components/MoviesList/MoviesList';
import Footer from './components/Footer/Footer';
import ErrorBoundary from './components/ErrorBoundary'
import Search from './components/Banner/Search/Search';
import Results from './components/Results/Results'
import store from './redux/store';
import {Provider} from 'react-redux';

function App() {
  const [switchBanner, setswitchBanner,] = useState(false);
  const [switchBannerId, setBannerId] = useState('');

  return (
    <Provider store={store}>
      
      <ErrorBoundary>
      <MainBanner switchBanner={switchBanner} setswitchBanner={setswitchBanner} switchBannerId={switchBannerId}/>
      </ErrorBoundary>
      <ErrorBoundary>
        <MoviesList setswitchBanner={setswitchBanner} setBannerId={setBannerId} />
      </ErrorBoundary>
      <ErrorBoundary>
        <Footer /> 
      </ErrorBoundary>

    </Provider>
  );
}

export default App;
