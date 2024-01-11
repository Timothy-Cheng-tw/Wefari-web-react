// PlacePictureCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PlacePictureCarousel.css'; // Import the CSS file

const PlacePictureCarousel = ({ placeImages }) => {
    // Local image file in the public folder
    placeImages = [
        '/image1.jpg',
        '/image2.jpg',
        '/image3.jpg',
        // Add more image file paths as needed
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className='place-picture-carousel'>
            <Slider {...settings}>
                {placeImages.map((image, index) => (
                    <img src={image} alt={`Place ${index + 1}`} />
                ))}
            </Slider>
        </div>
    );
};

export default PlacePictureCarousel;
