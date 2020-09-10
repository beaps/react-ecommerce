import React from 'react';

import './styles.scss';

function MenuItem(props) {
  const { title, imageUrl, size } = props;
  const style = {
    backgroundImage: `url(${imageUrl})`
  };

  return (
    <div className={`menu-item ${size}`}>
      <div style={style} className="menu-item__image"></div>
      <div className="menu-item__content">
        <h1 className="menu-item__title">{title}</h1>
        <span className="menu-item__subtitle">Shop now</span>
      </div>
    </div>
    // <div style={style} className={`menu-item ${size}`}>
    //   <div className="menu-item__content">
    //     <h1 className="menu-item__title">{title}</h1>
    //     <span className="menu-item__subtitle">SHOP NOW</span>
    //   </div>
    // </div>
  );
}

export default MenuItem;
