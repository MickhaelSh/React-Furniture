import React from 'react';

function Button({ name, outline, filled, exclusiveClass, addToCart }) {
  return (
    <button
      className={`button ${outline ? 'button-outline' : ''}${
        filled ? 'button-filled' : ''
      } ${exclusiveClass}`}
      onClick={addToCart}>
      {name}
    </button>
  );
}

export default Button;
