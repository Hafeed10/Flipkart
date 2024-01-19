// Heder.js
import React, { useState } from 'react';
import logo from '../../src/asstes/Nav/filp.svg';
import { loginli, loop } from '../../src/componenet/data/index';
import Home from './home/Home';
import Middle from '../../src/componenet/Middle/Middle';
import './Heder.css';
import Middlehome from './Middlehome';
import Pages from '../../src/componenet/pages/pages';
import Center from '../../src/componenet/Center/Center';
import Last from '../componenet/Last/Last';
import Footer from '../componenet/Footer/Footer'; // Adjust the import path


function Heder() {
  const [isLoginDropdownOpen, setLoginDropdownOpen] = useState(false);
 
  // isSellerDropdownOpen, 

  return (
    <div className='container'>
      <div className='container-setion'>
        <img src={logo} alt="Flipkart Logo" className='h-8 mr-2' />
        <form className='form'>
          <div className='flip'>
            <ion-icon name="search-outline" className='mop'></ion-icon>
            <input type="text" placeholder='  Search for Products, Brands and More' className='outline-none border-none' />
          </div>
        </form>

        <div className='container-icons'>
          <div className='pop'>
           

            <div
              className="dropdown"
              onMouseEnter={() => setLoginDropdownOpen(true)}
              onMouseLeave={() => setLoginDropdownOpen(false)}
            >
              <div className='jok'>
              <ion-icon name="person-circle-outline"></ion-icon>
              <h5>Login</h5>
              <ion-icon name="chevron-down-outline"></ion-icon>
              </div>
              {isLoginDropdownOpen && (
                <ul>
                  {loginli.map((item, index) => (
                    <li key={index}>
                      <p>{item.icon} {item.des}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <ion-icon name="fast-food-outline"></ion-icon>
            <h5>Card</h5>
            <ion-icon name="barcode-outline"></ion-icon>
            <h5>Become a Seller</h5>
            <div
              className="dropdown"
            >
             <div className='kop'>
              <ion-icon name="ellipsis-vertical-outline"></ion-icon>
             </div>
            </div>
          </div>
        </div>
      </div>
      <Middlehome/>
      <Home/>
      <Middle/>
      <Pages/>
      <Center/>
      <Last/>
      <Footer />
    </div>
  );
}

export default Heder;
