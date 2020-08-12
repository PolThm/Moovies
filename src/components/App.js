import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from "./Header";
import SearchBar from "./SearchBar";
import HomePage from "./HomePage";
import FavoritesPage from "./FavoritesPage";
import history from '../history';

const App = () => {
  return (
    <div className="container">
      <Router history={history}>
        <div>
          <Header/>
          <SearchBar/>
          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/favorites" exact component={FavoritesPage}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
