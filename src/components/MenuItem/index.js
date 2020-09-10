import React from 'react';

import './styles.scss';

function MenuItem(props) {
  const { title } = props;

  return (
    <div className="menu-item">
      <div className="menu-item__content">
        <h1 className="menu-item__title">{title}</h1>
        <span className="menu-item__subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

export default MenuItem;
