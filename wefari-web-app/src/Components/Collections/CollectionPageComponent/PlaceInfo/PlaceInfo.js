// PlaceInfo.js
import React from 'react';
import './PlaceInfo.css'; // Import your CSS file
import PlacePictureCarousel from './PlacePictureCarousel/PlacePictureCarousel';

const PlaceInfo = ({ placeName, placeType, googleMapsLink, description }) => {
  return (
    <div className="place-info">
      <div className="place-title">
        <h3 className="place-name">{placeName}</h3>
        <h4 className="place-type">{placeType}</h4>
      </div>
      <div className="place-body">
        <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" className="google-maps-link">
          <img src='Google_Maps_icon.png'></img>
          <p>Open in Google Maps</p>
        </a>
        <div className="place-description">{description}</div>
        <PlacePictureCarousel />
      </div>
      {/* <div className='place-info-end-line'></div> */}
    </div>
  );
};

export default PlaceInfo;