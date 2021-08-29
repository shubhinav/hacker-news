import './App.css';
import Home from './Pages/Home';
import Post from './Pages/Post';
import {Route, Switch} from "react-router-dom"
import { useContext, useEffect } from "react"
import {ThemeContext} from "./Context/ThemeContext"
import { Icon } from '@iconify/react';

function App() {

  const {theme, changeTheme} = useContext(ThemeContext)

  useEffect(()=>{
    document.body.style.backgroundColor = theme==="light" ? "#fefefe" : "#333"
    document.body.style.color = theme==="light" ? "#333" : "#fefefe"
  },[theme])

  return (
    <div className="App">
       <Switch>
         <Route exact path="/">
           <Home/>
         </Route>
         <Route path="/post/:postID">
           <Post/>
         </Route>
       </Switch>

      <button className="theme-change-btn" onClick={changeTheme}><Icon icon="mdi:theme-light-dark"/></button>
    
    </div>
  );
}

export default App;
