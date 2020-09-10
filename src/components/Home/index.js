import React from 'react';

import './styles.scss';

function Home() {
  return (
    <div className="home">
      <div className="menu-items">
        <div className="menu-item">
          <div className="menu-item__content">
            <h1 className="menu-item__title">HATS</h1>
            <span className="menu-item__subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="menu-item__content">
            <h1 className="menu-item__title">JACKETS</h1>
            <span className="menu-item__subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="menu-item__content">
            <h1 className="menu-item__title">SNEAKERS</h1>
            <span className="menu-item__subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="menu-item__content">
            <h1 className="menu-item__title">WOMEN</h1>
            <span className="menu-item__subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="menu-item__content">
            <h1 className="menu-item__title">MEN</h1>
            <span className="menu-item__subtitle">SHOP NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
