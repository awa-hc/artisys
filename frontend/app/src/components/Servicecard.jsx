import React from 'react';

function serviceCard({ title, description, imageUrl, cardSize }) {
  const cardStyles = {
    width: cardSize === 'small' ? '400px' : '900px',
    height: cardSize === 'small' ? '100%' : '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    color: 'white',
    borderRadius: '12px',
    padding: '25px',
    margin: '10px',
    backdropFilter: 'blur(10px)',
    boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.1), 10px 10px 10px rgba(0, 0, 0, 0.2)',
  };

  return (
    <div style={cardStyles}>
      <img src={imageUrl} alt={title} style={{ width: '100%', height: 'auto' }} className=' rounded-xl'/>
      <h3 className=' text-[25px] py-5 font-extrabold'>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default serviceCard;
