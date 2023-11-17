import React from 'react';

const Card = ({ card }) => {
  const { name, imageUrl, text } = card;

  // return (
  //   <>
  //   <div>{`${imageUrl}`}</div><div>Haha     </div>
  //   </>
  // )

  return (
    <div  className='shadow' style={cardStyles}>
      <img src={imageUrl} alt={name} style={imageStyles} />
      <div style={textStyles}>
        <h3>{name}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

const cardStyles = {
  width: '250px', // Adjust the width as needed
  margin: '10px', // Adjust the margin as needed
  boxSizing: 'border-box',
  border: '1px solid #ddd', // Add border or other styles as needed
  borderRadius: '5px',
  overflow: 'hidden',
};

const imageStyles = {
  width: '100%',
  height: 'auto',
};

const textStyles = {
  padding: '10px',
};

export default Card;