import React from 'react';
import { connect } from 'react-redux';

import CollectionPreview from '../../components/CollectionPreview';

import { selectCollection } from '../../redux/shop/shop.selectors';

import './styles.scss';

function Collection(props) {
  const { id, title, items } = props.collection;

  return (
    <div className="collection">
      <CollectionPreview key={id} title={title} items={items} />
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Collection);
