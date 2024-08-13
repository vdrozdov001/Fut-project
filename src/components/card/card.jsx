import React, { useEffect, useState } from 'react';
import './card.css';

const Card = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://drop-api.ea.com/rating/fc-24?limit=30')
      .then(response => response.json())
      .then(data => {
        console.log(data);  // Выводим данные в консоль для проверки
        setItems(data.items);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div id="box-inner">
      {items.map((item, index) => (
        <div key={index} className="content-item">
          <img src={item.shieldUrl} alt="Shield" />
        </div>
      ))}
    </div>
  );
};

export default Card;



