import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './styles.scss';

import CollectionPreview from '../../components/CollectionPreview';
import { selectCollections } from '../../redux/shop/shop.selectors';

function Shop(props) {
  const { collections } = props;

  return (
    <div className="shop">
      <div className="shop__collections">
        {collections.map((collection) => (
          <CollectionPreview
            key={collection.id}
            title={collection.title}
            items={collection.items}
          />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(Shop);
