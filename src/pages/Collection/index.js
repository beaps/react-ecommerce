import React from 'react';
import { connect } from 'react-redux';

import CollectionPreview from '../../components/CollectionPreview';

import { selectCollection } from '../../redux/shop/shop.selectors';

import './styles.scss';

function Collection(props) {
  const { collection } = props;

  return (
    <div className="collection">
      <CollectionPreview
        key={collection.id}
        title={collection.title}
        items={collection.items}
      />
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Collection);
