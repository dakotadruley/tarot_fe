export const getCard = () => {
  return fetch(`${process.env.API_URL}/card`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify()
  })
    .then(res => res.json());
};
