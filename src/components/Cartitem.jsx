import { Link } from 'react-router-dom';
import arrow from './img/quntity-arrow.png';

function Cartitem({
  product,
  currency,
  count,
  onPlusProduct,
  onMinusProduct,
  deleteFromCart,
  closeCart,
  uahRate,
}) {
  const { id, name, imageUrl, price } = product;
  return (
    <div className="modal-basket-product-container cart-item" data-id={id}>
      <div className="modal-basket-product-img-container">
        <Link
          to={`/product/${id}`}
          onClick={() => {
            closeCart();
          }}>
          <img className="item-image" src={imageUrl} alt={name} />
        </Link>
      </div>
      <div className="modal-basket-product-info">
        <Link
          to={`/product/${id}`}
          onClick={() => {
            closeCart();
          }}>
          <div className="modal-basket-product-name item-name">{name}</div>
        </Link>
        <div className="items counter-wrapper modal-basket-product-quantity">
          <div className="items__control modal-basket-product-button down">
            <img src={arrow} data-action="minus" alt="minus" onClick={() => onMinusProduct(id)} />
          </div>
          <div className="items__current" data-counter>
            {count}
          </div>
          <div className="items__control modal-basket-product-button up">
            <img src={arrow} data-action="plus" alt="plus" onClick={() => onPlusProduct(product)} />
          </div>
        </div>
      </div>
      <p className="dollar-or-uah">{currency}</p>
      <div className="modal-basket-product-price">{price}</div>
      <div className="modal-basket-product-price-total active">
        {count * price * (currency === '$' ? 1 : uahRate)}
      </div>
      <button
        className="modal-basket-product-delete"
        data-action="delete"
        onClick={() => deleteFromCart(id)}></button>
    </div>
  );
}

export default Cartitem;
