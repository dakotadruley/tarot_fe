import React, { useState, useEffect } from 'react';
import Cards from '../Card/Cards.jsx';
import { getCards } from '../../services/api.js';
import { Link } from 'react-router-dom';
// import styles from './Home.css';

const Home = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCards()
      .then(Cards => setCards(Cards))
      .then(() => setLoading(false));
  }, []);

  if(loading) return <h1>LOADIN</h1>;
  return (
    <>
      <section>

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
      <section>
        <Cards cards={cards} />
      </section>
    </>
    
  );};

export default Home;

