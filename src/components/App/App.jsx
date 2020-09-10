import React from 'react';
import styles from './App.css';
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import Home from '../Home/Home';

export default function App() {
  return (
    <>
      <Router className={styles.App}>
        <Switch>
          <Link exact path ="/" component={Home}/>
        </Switch>
      </Router>
    </>
  );
}
