import React from 'react';
import { withRouter } from 'react-router-dom';

import './styles.scss';

function MenuItem(props) {
  const { title, imageUrl, size, linkUrl, history, match } = props;
  const style = {
    backgroundImage: `url(${imageUrl})`
  };

  return (
    <div
      className={`menu-item ${size}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div style={style} className="menu-item__image"></div>
      <div className="menu-item__content">
        <h1 className="menu-item__title">{title}</h1>
        <span className="menu-item__subtitle">Shop now</span>
      </div>
    </div>
  );
}

export default withRouter(MenuItem);
