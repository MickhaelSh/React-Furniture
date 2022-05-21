import Button from './Button';
import { Link } from 'react-router-dom';
import React from 'react';

function Product({ product, addToCart }) {
  const { id, name, imageUrl, price } = product;

  return (
    <div className="fave-finds__item cart-item" data-id={id}>
      <div className="fave-finds__item-image-containter">
        <Link to={`/product/${id}`}>
          <img className="item-image" src={imageUrl} alt={name} />
        </Link>
      </div>
      <Link to={`/product/${id}`}>
        <div className="fave-finds__item-name item-name">{name}</div>
      </Link>
      <div className="fave-finds__price">
        <span className="highlighted item-price">{price}</span>
        <span className="highlighted">,00 USD</span>
      </div>
      <Button
        name="order now"
        outline={true}
        exclusiveClass="fave-finds__button item-button"
        addToCart={() => addToCart(product)}
      />
    </div>
  );
}

export default Product;
