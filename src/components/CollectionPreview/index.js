import React from 'react';

import './styles.scss';

import CollectionItem from '../CollectionItem';

function CollectionPreview(props) {
  const { title, items } = props;

  return (
    <div className="collection-preview">
      <h1 className="collection-preview__title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}

export default CollectionPreview;
