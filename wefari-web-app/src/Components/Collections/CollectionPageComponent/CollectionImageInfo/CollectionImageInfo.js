import React from 'react';
import './CollectionImageInfo.css'; // Import your CSS file

const CollectionImageInfo = ({ imageUrl, title, placeCount }) => {
  return (
    <div className="collection-image-block">
      {/* <img className="collection-image" src={'image1.jpg'} alt="Collection" /> */}
      <div className="collection-info">
        <div className="place-count">{`${placeCount} places`}</div>
        <div className="collection-title">{title}Costa Rica</div>
      </div>
    </div>
  );
};

export default CollectionImageInfo;