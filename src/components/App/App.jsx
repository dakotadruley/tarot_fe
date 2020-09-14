import React from 'react';
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import Home from '../Home/Home.jsx';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Link exact path ="/" component={Home}/>
        </Switch>
      </Router>
    </>
  );
}
