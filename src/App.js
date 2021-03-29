import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';

import { Project } from './pages/Project';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { NoMatch } from './pages/NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';

class App extends Component {
  render() {
    return (
      <React.Fragment>
 
        <NavigationBar />
        <div 
          style={{backgroundColor: 'black', transparent: false}}
        /> 
        <Layout>
        <div 
          style={{backgroundColor: 'black', transparent: false}}
        /> 
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/project" component={Project} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
