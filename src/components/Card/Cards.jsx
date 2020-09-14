import React from 'react';
import PropTypes from 'prop-types';
import Card from './Cards.jsx';

const Cards = ({ cards }) => {
  const cardArray = cards.map(card => (
    <>
      <li>
        <Card {...card} />
      </li>
    </>
   
  ));

  return (
    <ul>
      {cardArray}
    </ul>
  );
};

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    upright: PropTypes.string.isRequired,
    reversed: PropTypes.string.isRequired
  })).isRequired
};

export default Cards;
