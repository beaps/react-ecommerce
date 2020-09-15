import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/CollectionsOverview';
import Collection from '../Collection';

import './styles.scss';

function Shop(props) {
  const { match } = props;

  return (
    <div className="shop">
      <div className="shop__collections">
        <Route path={`${match.path}`} exact component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={Collection} />
      </div>
    </div>
  );
}

export default Shop;
