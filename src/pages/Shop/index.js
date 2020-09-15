import React from 'react';

import CollectionsOverview from '../../components/CollectionsOverview';

import './styles.scss';

function Shop() {
  return (
    <div className="shop">
      <div className="shop__collections">
        <CollectionsOverview />
      </div>
    </div>
  );
}

export default Shop;
