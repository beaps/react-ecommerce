import React from 'react';
import { connect } from 'react-redux';

import './styles.scss';

import CustomButton from '../CustomButton';
import { addItem } from '../../redux/cart/cart.actions';

function CollectionItem(props) {
  const { item, addItem } = props;
  const { name, price, imageUrl } = item;
  const style = {
    backgroundImage: `url(${imageUrl})`
  };

  return (
    <div className="collection-item">
      <div className="collection-item__image-container">
        <div
          className="collection-item__image-container__image"
          style={style}
        ></div>
      </div>
      <div className="collection-item__footer">
        <span className="collection-item__footer__name">{name}</span>
        <span className="collection-item__footer__price">{price}</span>
      </div>
      <div className="collection-item__button-container">
        <CustomButton onClick={() => addItem(item)} inverted>
          Add to cart
        </CustomButton>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
