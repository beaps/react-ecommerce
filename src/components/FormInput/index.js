import React from 'react';

import './styles.scss';

function FormInput(props) {
  const { id, handleChange, label, ...otherProps } = props;
  return (
    <div className="form-group">
      <input
        id={id}
        className="form-group__input"
        onChange={handleChange}
        type="text"
      />
      {label ? (
        <label
          htmlFor={id}
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-group__label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}

export default FormInput;
