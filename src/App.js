import React, { Component } from 'react';
import './App.css';
import UserForm from './components/user-form';
import UsersList from './components/users-list';
import Header from './components/header';
import Home from './components/home';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <section>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/" exact render={()=><Redirect to="/home" />} />
              <Route path="/home" component={Home} />
              <Route path="/user-form" component={UserForm} />
              <Route path="/users-list" component={UsersList} />
              <Route render={()=><h1>Page not found</h1>}/>
            </Switch>
          </div>
        </BrowserRouter>
      </section>
    );
  }
}

export default App;
