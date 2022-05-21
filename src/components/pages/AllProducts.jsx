import { useSelector, useDispatch } from 'react-redux';
import { addProductToCart } from '../redux/actions/cart';
import React from 'react';
import Product from '../Product';

function AllProducts() {
  const data = useSelector(({ products }) => products.products);
  const dispatch = useDispatch();
  const onClickAddProduct = React.useCallback(
    (product) => dispatch(addProductToCart(product)),
    [dispatch],
  );

  return (
    <main className="store-main container">
      <h1 className="store__title">Store homepage</h1>
      <div className="store__products-container">
        <div className="store__products-title"></div>
        <div className="store__products">
          {data.map((el) => (
            <Product product={el} key={el.id} addToCart={onClickAddProduct} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default AllProducts;
