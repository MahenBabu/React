import React from 'react';
import './default.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Navbar from './components/Layout/Navbar/Navbar';
import PageNotFound from './components/pages/PageNotFound';
import AddUsers from './components/Users/AddUsers';
import EditUser from './components/Users/EditUser';
import User from './components/Users/User';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/users/add" component={AddUsers} />
          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/users/:id" component={User} />

          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
