// ProblemCard.js
import React from 'react';

const ProblemCard = ({ problem }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>{problem.titulo}</h3>
      <p>{problem.descripcion}</p>
    </div>
  );
};

export default ProblemCard;