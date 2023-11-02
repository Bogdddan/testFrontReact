import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import photo1 from '../../photo/IMG.jpg';


const SponsorCarousel = () => {
  const sponsors = [
    { id: 1, name: 'Sponsor 1', image: photo1 },
    { id: 2, name: 'Sponsor 2', image: photo1 },
    { id: 3, name: 'Sponsor 3', image: photo1 },
    { id: 4, name: 'Sponsor 1', image: photo1 },
    { id: 5, name: 'Sponsor 2', image: photo1 },
    { id: 6, name: 'Sponsor 3', image: photo1 },
    { id: 7, name: 'Sponsor 1', image: photo1 },
    { id: 8, name: 'Sponsor 2', image: photo1 },
    { id: 9, name: 'Sponsor 3', image: photo1 },
    { id: 10, name: 'Sponsor 1', image: photo1 },
    { id: 11, name: 'Sponsor 2', image: photo1 },
    { id: 12, name: 'Sponsor 3', image: photo1 },
    // Додайте більше спонсорів за потребою
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 10,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const imageStyle = {
    width: '200px',  // Встановлюємо ширину на 100px
    height: '100px', // Встановлюємо висоту на 100px
  };

  return (
    <div>
      <h2>Спонсори</h2>
      <Slider {...settings}>
        {sponsors.map(sponsor => (
          <div key={sponsor.id}>
            <img src={sponsor.image} alt={sponsor.name} style={imageStyle} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SponsorCarousel;
