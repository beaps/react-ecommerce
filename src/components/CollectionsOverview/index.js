import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../CollectionPreview';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import './styles.scss';

function CollectionsOverview(props) {
  const { collections } = props;

  return (
    <div className="collections-overview">
      {collections.map((collection) => (
        <CollectionPreview
          key={collection.id}
          title={collection.title}
          items={collection.items}
          numberItems={4}
        />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
