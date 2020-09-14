export const getCard = () => {
  return fetch('http://localhost:3000/card')
    .then(res => res.json())
    .then(json => json.map(card => ({
      id: card.id,
      title: card.title,
      image: card.image,
      upright: card.upright,
      reversed: card.reveresed,
      correspondences: card.correspondences
    })));
};
