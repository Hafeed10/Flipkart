import React, { useEffect, useRef } from 'react';
import './Home.css';
import SimpleImageSlider from 'react-simple-image-slider';
import image1 from '../../asstes/images/slid1.webp';
import image2 from '../../asstes/images/slid2.webp';
import image3 from '../../asstes/images/slid.webp';
import image4 from '../../asstes/images/lo.webp';
import image5 from '../../asstes/images/lp.webp';

function Home() {
  const images = [
    { url: image1 },
    { url: image2 },
    { url: image3 },
    { url: image4 },
    { url: image5 },
  ];

  // Use useRef to hold a reference to the slider component
  const sliderRef = useRef();

  // Use useEffect to start the slider after the component mounts
  useEffect(() => {
    const slider = sliderRef.current;

    if (slider) {
      // Start the slider after a short delay (adjust as needed)
      setTimeout(() => {
        slider.startSlideShow();
      }, 500);
    }
  }, []);

  return (
    <div className='home'>
      <div className='home-section' style={{ padding: '9px' }}>
        <SimpleImageSlider
          width={1513}
          height={304}
          images={images}
          showBullets={true}
          showNavs={true}
          useGPURender={true}
          time={5000}
          transitionTime={500}
          onStart={() => console.log('Slider starting')} // Adjust as needed
          onComplete={() => console.log('Slider completed')} // Adjust as needed
          ref={sliderRef}
        />
      </div>
    </div>
  );
}

export default Home;
