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
import axios from 'axios'


function App() {
  const [switchBanner, setswitchBanner,] = useState(false);
  const [switchBannerId, setBannerId] = useState('');

  
  const search = (e) => {
    if (e.key === "Enter") {
    axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;

        setState(prevState => {
            return { ...prevState, results: results }
        })
    });
  }
}
const [state, setState ] = useState({
    s: "",
    results: [],
    selected: {}
});

const apiurl = "http://www.omdbapi.com/?i=tt3896198&apikey=80cad683"

const handleInput = (e) => {
    let s = e.target.value;
 setState(prevState => {
     return {...prevState, s: s}
 })
}


  return (
    <Provider store={store}>
      
      <ErrorBoundary>
      <MainBanner switchBanner={switchBanner} setswitchBanner={setswitchBanner} switchBannerId={switchBannerId}/>
      <Search handleInput={handleInput} search={search}/>
      </ErrorBoundary>
      <Results results={state.results} />
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
