import './App.css';
import Header from './Components/Header/Header';
import Home from './Pages/Home';
import Post from './Pages/Post';
import {Route, Switch} from "react-router-dom"

function App() {

  return (
    <div className="App">
      <Header/>

       <Switch>
         <Route exact path="/">
           <Home/>
         </Route>
         <Route path="/post/:postID">
           <Post/>
         </Route>
       </Switch>
    </div>
  );
}

export default App;
