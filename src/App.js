import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home.js';
import Kajian from './pages/Kajian';
import NavBar from './component/Navbar';
import Kitab from './pages/Kitab';
import Mondok from './pages/Mondok';
import Book from './pages/Book';
import Author from './pages/Author';
import { Route, Switch } from 'react-router-dom';
import WebApp from './pages/app';
import Axios from 'axios';

class App extends Component {
  state = {
    posts: []
  };
  getDataFromApi = () => {
    Axios.get('https://api-demo.koding.sch.id/api/book')
      .then(succes => {
        console.log(succes.data.data);
        this.setState({
          posts: succes.data.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.getDataFromApi();
  }
  render() {
    const { posts } = this.state;
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/book" component={Book} />
          <Route path="/author" component={Author} />
        </Switch>
      </div>
    );
  }
}

export default App;
