import './App.css';
import { useContext } from 'react';
import { SearchContext } from './Context/SearchContext';
import Header from './Components/Header/Header';
import MainList from './Components/MainList/MainList';
import Loader from './Components/Loader/Loader'
import ErrorMessage from './Components/ErrorMessage/ErrorMessage';

function App() {

  const {mainListData, isLoading, isError} = useContext(SearchContext)

  return (
    <div className="App">
      <Header/>
      {isError ? <ErrorMessage/>
      : (isLoading ? <Loader/> : (mainListData && <MainList/>))} 
    </div>
  );
}

export default App;
