
import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home.js';
import Kajian from './pages/Kajian'
import NavBar from './component/Navbar'
import Kitab from './pages/Kitab'
import Mondok from './pages/Mondok'
import Tata from './component/Card'
import WebApp from './pages/app'
class App extends Component{
  render(){
    return(
    <div>
      <WebApp/>
    </div>
      );
  }
}
        

export default App;
