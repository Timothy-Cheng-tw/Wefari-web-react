// CollectionDescription.js
import React from 'react';
import './CollectionDescription.css'; // Import your CSS file

const CollectionDescription = ({ description }) => {
  return (
    <div className="collection-description">
      <p>{description}Welcome to my selection of Costa Rica's most amazing Nature</p>
    </div>
  );
};

export default CollectionDescription;
