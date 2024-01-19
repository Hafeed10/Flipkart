import React from 'react';
import './Footer.css';

function Footer() {
  const footerData = [
    {
      _id: 1,
      title: "About",
      items: ["Contact Us", "About Us", "Careers", "Flipkart Stories"]
    },
    {
      _id: 2,
      title: "About",
      items: ["Contact Us", "About Us", "Careers", "Flipkart Stories"]
    },
    {
      _id: 8,
      title: "About",
      items: ["Contact Us", "About Us", "Careers", "Flipkart Stories"]
    },
    {
      _id: 7,
      title: "About",
      items: ["Contact Us", "About Us", "Careers", "Flipkart Stories"]
    },
    {
      _id: 6,
      title: "About",
      items: ["Contact Us", "About Us", "Careers", "Flipkart Stories"]
    },
    {
      _id: 5,
      title: "About",
      items: ["Contact Us", "About Us", "Careers", "Flipkart Stories"]
    },
  ];

  return (
    <div className='footer'>
      {footerData.map(item => (
        <div key={item._id}>
          <h3>{item.title}</h3>
          <ul>
            {item.items.map((li, index) => (
              <li key={index}>
                <strong>{li}</strong>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}


export default Footer;

