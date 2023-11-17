import React from 'react';
import Card from './Card';

const CardList = ({ cards }) => {
  return (
    <div style={cardListStyles}>
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

const cardListStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
};

export default CardList;