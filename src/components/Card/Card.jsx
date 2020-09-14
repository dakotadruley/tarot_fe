import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, image, upright, reversed }) => (
  <section>
    <h3>{title}</h3>
    <img src={image}/>
    <p>{upright}</p>
    <p>{reversed}</p>
  </section>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  upright: PropTypes.string.isRequired,
  reversed: PropTypes.string.isRequired
};

export default Card;
