import React from 'react';
import CollectionItem from '../../components/CollectionItem';

import './styles.scss';

function Collection(props) {
  const { match } = props;
  console.log(match);

  return (
    <div className="collection">
      <h2>Collection PAGE</h2>
    </div>
  );
}

export default Collection;
