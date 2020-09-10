import React from 'react';

import './styles.scss';

function CollectionPreview(props) {
  const { title, items } = props;

  return (
    <div className="collection-preview">
      <h1 className="collection-preview__title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <div key={item.id}>{item.name}</div>
          ))}
      </div>
    </div>
  );
}

export default CollectionPreview;
