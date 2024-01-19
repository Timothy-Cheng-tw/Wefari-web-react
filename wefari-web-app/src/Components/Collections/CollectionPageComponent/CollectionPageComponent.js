import React from 'react';
import CollectionImageInfo from './CollectionImageInfo/CollectionImageInfo';
import UserProfile from './UserProfile/UserProfile'
import CollectionDescription from './CollectionImageInfo/CollectionDescription';
import PlaceInfo from './PlaceInfo/PlaceInfo';

import './CollectionPageComponent.css';

const whiteBGstyle={
    backgroundColor: 'white',
}

const CollectionPageComponent = () => {
    return (
        <div className='collection-page-component'>


            <div className="background-element">
                <img src={'image1.jpg'} alt="Collection" />
            </div>
            <div style={whiteBGstyle}>
                <div className='collection-page-header'>
                    <CollectionImageInfo />
                    <div className='collection-page-user-block'>
                        <UserProfile />
                        <CollectionDescription />
                    </div>
                </div>
                <div className='collection-page-body'>
                    <PlaceInfo
                        placeName="City Park"
                        placeType="Park"
                        googleMapsLink="https://maps.google.com/?q=City+Park"
                        description="Visiting a waterfall is on almost every traveler’s wish list. But for those heading to the northwestern part of Costa Rica, especially the beaches of Guanacaste, finding one of these magnificent cascades can be difficult. That’s because this region of the country is known to be more flat and dry, not exactly ideal conditions for a waterfall. Luckily though, there are some spectacular waterfalls hidden away. In this post, we’ll tell you about one gem near Liberia, the Llanos de Cortez Waterfall."
                    />
                    <PlaceInfo
                        placeName="City Park"
                        placeType="Park"
                        googleMapsLink="https://maps.google.com/?q=City+Park"
                        description="Visiting a waterfall is on almost every traveler’s wish list. But for those heading to the northwestern part of Costa Rica, especially the beaches of Guanacaste, finding one of these magnificent cascades can be difficult. That’s because this region of the country is known to be more flat and dry, not exactly ideal conditions for a waterfall. Luckily though, there are some spectacular waterfalls hidden away. In this post, we’ll tell you about one gem near Liberia, the Llanos de Cortez Waterfall."
                    />
                    <PlaceInfo
                        placeName="City Park"
                        placeType="Park"
                        googleMapsLink="https://maps.google.com/?q=City+Park"
                        description="Visiting a waterfall is on almost every traveler’s wish list. But for those heading to the northwestern part of Costa Rica, especially the beaches of Guanacaste, finding one of these magnificent cascades can be difficult. That’s because this region of the country is known to be more flat and dry, not exactly ideal conditions for a waterfall. Luckily though, there are some spectacular waterfalls hidden away. In this post, we’ll tell you about one gem near Liberia, the Llanos de Cortez Waterfall."
                    />
                </div>
            </div>
        </div>
    );
};

export default CollectionPageComponent;
