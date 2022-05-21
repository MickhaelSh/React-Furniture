import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

import Button from '../Button';
import ProductPageSlider from '../ProductPageSlider';
import { addProductToCart } from '../redux/actions/cart';

function ProductPage() {
  const dispatch = useDispatch();
  const addToCart = React.useCallback((product) => dispatch(addProductToCart(product)), [dispatch]);

  const data = useSelector(({ products }) => products.products);
  const { productID } = useParams();
  const element = data.filter((el) => el.id === +productID)[0];

  return (
    element && (
      <main className="product-main container">
        <Link to="/all-products" className="store-anchor">
          Store homepage
        </Link>
        <article className="product-container" data-id={element.id}>
          <ProductPageSlider image={element.imageUrl} />
          <div className="product-container__text-container">
            <div className="product-container__title-container">
              <div className="product-container__stock highlighted">In stock</div>
              <h1 className="product-container__title item-name">{element.name}</h1>
            </div>
            <div className="product-container__price-container">
              <p className="product-container__price item-price">{element.price}</p>
              <p>,00 $</p>
              <p className="product-container__currency"></p>
            </div>
            <Button
              name="order now"
              filled={true}
              exclusiveClass={'product-button item-button'}
              addToCart={() => addToCart(element)}
            />
            <div className="product-container__description-container">
              <div className="product-container__description-title">Descriprion</div>
              <div className="product-container__description">{element.description}</div>
            </div>
          </div>
        </article>
      </main>
    )
  );
}

export default ProductPage;
