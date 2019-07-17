import React from 'react';
import Header from './components/Header';
import Main from './pages/Main';
import PostPage from './pages/PostPage';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './styles.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/Posts" component={PostPage} />
            <Route path="/account/sign-in" component={LoginForm} />
            <Route path="/account/sign-up" component={SignUpForm} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
