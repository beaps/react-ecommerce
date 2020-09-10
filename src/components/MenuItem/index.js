import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

function MenuItem(props) {
  const { title, imageUrl, size, linkUrl } = props;
  const style = {
    backgroundImage: `url(${imageUrl})`
  };

  return (
    <Link to={linkUrl} className="links-menu-items">
      <div className={`menu-item ${size}`}>
        <div style={style} className="menu-item__image"></div>
        <div className="menu-item__content">
          <h1 className="menu-item__title">{title}</h1>
          <span className="menu-item__subtitle">Shop now</span>
        </div>
      </div>
    </Link>
  );
}

export default MenuItem;
