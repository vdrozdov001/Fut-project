import React from 'react';
import ReactDOM from 'react-dom/client';
import './container.css'; 

const Container = ({ children }) => {
  return (
    <div className="container">
      {children}
    </div>
  );
}

export default Container;


