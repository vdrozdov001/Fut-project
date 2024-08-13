import React, { useEffect, useState } from 'react';
import './card.css';

const Card = ({ card }) => {
  return (
    <div className="content-item">
      <img src={card.shieldUrl} alt="Shield" />
    </div>
  );
};

export default Card;



