
import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home.js';
import Kajian from './pages/Kajian'
import NavBar from './component/Navbar'
import Kitab from './pages/Kitab'
import Mondok from './pages/Mondok'
import Tata from './component/Card'


class App extends Component {
  state = {
    isPage : "Home"
  }

  changePage =(page)=>{
    this.setState({
      isPage : page
    })
  }


  render() {
    if(this.state.isPage === "Home"){
      return (
        <div>
          <NavBar changePage={this.changePage} />
          <Home/>
          <Tata/>
        </div>
      )
    }else if(this.state.isPage === "Kajian"){
      return (
        <div>
          <NavBar  changePage={this.changePage} />
          <Kajian />    
          <Tata/>
       </div>
      )
    }
    else if(this.state.isPage === "Kitab"){
      return(
        <div>
          <NavBar changePage={this.changePage}/>
          <Kitab/>
        </div>
      )
    }
    else if(this.state.isPage === "Mondok"){
      return(
        <div>
          <NavBar changePage={this.changePage}/>
          <Mondok/>
        </div>
      )
    }

  }
}

export default App;
