import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

const Home = () => {

  return (
    <section className={styles.Home}>

      <h1>tarot</h1>

      <nav>
        <h3>About</h3>
        <h3>Library</h3>
        <h3>Collections</h3>
        <h3><Link to="/createCard">Create A Card</Link></h3>
        <h3>Login/Signup/Logot</h3>
      </nav>

      <aside>
        <h3>Welcome</h3>
        <p>Hello this is a place for tarot card stuff...</p>
      </aside>

    </section>
    
  );};

export default Home;
