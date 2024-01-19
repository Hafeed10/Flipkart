// Center.jsx

import React from 'react';
import './Center.css';
import img2 from '../../asstes/images/0.webp';
import img3 from '../../asstes/images/00.webp';
import img4 from '../../asstes/images/000.webp';

function Center() {
  return (
    <div className='center'>
      <div className="section-wrapper">
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
      </div>
    </div>
  );
}

export default Center;
