import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './headers.css'; // Assuming you have a CSS file for styles

function Navbar() {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const searchbar = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      const searchTerm = input.toLowerCase();
      if (searchTerm === 'mens' || searchTerm === 'men') {
        navigate('/mens');
      } else if (searchTerm === 'womens' || searchTerm === 'women') {
        navigate('/womens');
      } else if (searchTerm === 'kids' || searchTerm === 'kid') {
        navigate('/kids');
      } else {
        alert('No matching route found');
      }
    }
  };

  return (
    <header className="containerHeader">
      <nav className="flex space-between">
        <div className="left flex items-center">
          <a href="/">
            <img
              className="myntraLogo"
              src="https://cdn.iconscout.com/icon/free/png-256/free-myntra-2709168-2249158.png?f=webp"
              alt="Myntra"
            />
          </a>
          <ul className="flex items-center justify-center upperclass semibold">
            <li className="men"><a href="/mens">Men</a></li>
            <li className="women"><a href="/womens">Women</a></li>
            <li className="kid"><a href="/kids">Kids</a></li>
            <li className="homeLiving"><a href='/home&living'>Home & Living</a></li>
            <li className="beauty"><a href='/beauty'>Beauty</a></li>
            <li className="studi"><a href='/studio'>Studio</a></li>
          </ul>
        </div>
        <div className="right flex items-center">
          <input
            className="search"
            placeholder="Search for products, brands and more"
            onChange={searchbar}
            onKeyDown={handleSearch}
            value={input}
          />
          <div className="rightBox">
            <div className="profile mx-2"><a href="/user">Profile</a></div>
            <div className="wishlist mx-2"><a href='/wishlist'>Wishlist</a></div>
            <div className="bag mx-2"><a href='/bag'>Bag</a></div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
