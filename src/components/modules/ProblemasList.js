// ProblemasList.js
import React from 'react';
import ProblemCard from './ProblemCard';

const ProblemasList = ({ problemas }) => {
  return (
    <div>
      {problemas.map((problem) => (
        <ProblemCard key={problem.id} problem={problem} />
      ))}
    </div>
  );
};

export default ProblemasList;