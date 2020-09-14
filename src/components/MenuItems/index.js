import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './styles.scss';

import MenuItem from '../MenuItem';
import { selectMenuItemsSections } from '../../redux/menuItems/menuItems.selectors';

function MenuItems(props) {
  const { sections } = props;

  return (
    <div className="menu-items">
      {sections.map((section) => {
        const { id, title, imageUrl, size, linkUrl } = section;
        return (
          <MenuItem
            key={id}
            title={title}
            imageUrl={imageUrl}
            size={size}
            linkUrl={linkUrl}
          />
        );
      })}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: selectMenuItemsSections
});

export default connect(mapStateToProps)(MenuItems);
