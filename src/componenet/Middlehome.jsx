import React from 'react';
import './Middlehome.css';
import log from '../../src/asstes/images/38a459d6d1fc930a.webp';
import log2 from '../asstes/images/38d4fbb64c70a3ff.webp';
import log3 from '../asstes/images/629b0a6f61037ae6.webp';
import log4 from '../asstes/images/74f0eb6cc10e2743.webp';
import log5 from '../asstes/images/711174cfe1d2fa75.webp';
import log6 from '../asstes/images/83de409bda2f3834.webp';
import log7 from '../asstes/images/f2802fac96dffea9.webp';
import log8 from '../asstes/images/f925cfe5ecdf6acf.webp';
import log9 from '../asstes/images/fef14e08ec83a6d7.webp';
// import Middle from './Middle/Middle';

function Middlehome(props) {
  const imgArray = [
    { pixl: "Mobiles & Tablets", img: log },
    {  pixl:"TV screens", img: log2 },
    { pixl:"Applications", img: log3 },
    { pixl:"Fashion", img: log4 },
    {  pixl:"Beautiful", img: log5 },
    {  pixl:"Home & Kitchen", img: log6 },
    { pixl:"Functions", img: log7 },
    {  pixl:"Flights", img: log8 },
    {  pixl:"Grocery", img: log9 },
    // Add other items as needed
  ];

  return (
    <div className='middle'>
      <div className='middle-section'>
        {imgArray.map((item, index) => (
          <div key={index}>
            <img src={item.img} alt="" />
            <p>{item.pixl}</p>
          </div>
        ))}
      </div>
      {/* <Middle/> */}
    </div>
  );
}

export default Middlehome;
