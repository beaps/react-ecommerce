import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

import CollectionItem from '../CollectionItem';

function CollectionPreview(props) {
  const { title, items, numberItems } = props;
  const value = numberItems ? numberItems : Number.MAX_VALUE;

  return (
    <div className="collection-preview">
      <h1 className="collection-preview__title">
        {numberItems ? (
          <Link to={`shop/${title.toLowerCase()}`}>{title}</Link>
        ) : (
          title
        )}
      </h1>
      <div className="preview">
        {items
          .filter((item, index) => index < value)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}

export default CollectionPreview;
