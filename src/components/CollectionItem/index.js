import React from 'react';

import './styles.scss';

function CollectionItem(props) {
  const { name, price, imageUrl } = props;
  const style = {
    backgroundImage: `url(${imageUrl})`
  };

  return (
    <div className="collection-item">
      <div className="collection-item__image-container">
        <div
          className="collection-item__image-container__image"
          style={style}
        ></div>
      </div>
      <div className="collection-item__footer">
        <span className="collection-item__footer__name">{name}</span>
        <span className="collection-item__footer__price">{price}</span>
      </div>
    </div>
  );
}

export default CollectionItem;
