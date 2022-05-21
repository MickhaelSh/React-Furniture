import { useState, useEffect } from 'react';
import CartButton from './CartButton';
import Cartitem from './Cartitem';
import { deleteItem } from './redux/actions/cart';
import {
  addProductToCart,
  minusCartItem,
  setCurrency,
  setRate,
  orderSucseed,
} from './redux/actions/cart';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import ContactForm from './ContactForm';

function Cart() {
  const { products, totalCount, totalPrice, currencyTag, uahRate } = useSelector(
    ({ cart }) => cart,
  );
  const [open, setOpen] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [custumerName, setCustumerName] = useState('Dear Custumer');

  const dispatch = useDispatch();

  useEffect(() => {
    if (totalCount === 0) {
      setTimeout(onCloseCart, 2000);
    }
  }, [totalCount]);

  useEffect(() => {
    async function fetchRate() {
      const response = await fetch(
        'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json',
      );
      const curency = await response.json();
      const usdRate = parseInt(curency.filter((el) => el.cc === 'USD')[0].rate);
      dispatch(setRate(usdRate));
    }
    fetchRate();
  }, [dispatch]);

  useEffect(() => {
    function submited() {
      if (submit) {
        dispatch(orderSucseed());
        setTimeout(() => {
          onCloseCart();
          setSubmit(false);
        }, 3000);
      }
    }
    submited();
  }, [submit, dispatch]);

  const deleteProduct = React.useCallback(
    (id) => {
      dispatch(deleteItem(id));
    },
    [dispatch],
  );

  const onPlusProduct = React.useCallback(
    (object) => {
      dispatch(addProductToCart(object));
    },
    [dispatch],
  );

  const onMinusProduct = React.useCallback(
    (id) => {
      dispatch(minusCartItem(id));
    },
    [dispatch],
  );

  const onchangeCurrency = React.useCallback(
    (object) => {
      dispatch(setCurrency(object.id));
    },
    [dispatch],
  );

  function onCloseCart() {
    setOpen(false);
  }

  function onOpenCart() {
    setOpen(true);
  }

  function onSubmit(name) {
    setCustumerName(name);
    setSubmit(true);
  }

  open ? document.body.classList.add('lock') : document.body.classList.remove('lock');
  return (
    <div className={`modal-basket-container ${open ? 'active' : ''}`}>
      <div className="modal-basket active">
        <div className=" modal-basket-header ">
          <div className="modal-basket-mane">Shopping cart</div>
          <button className="modal-basket-close" onClick={onCloseCart}>
            x
          </button>
        </div>
        <div className={`modal-basket-empty ${totalCount < 1 && !submit ? 'active' : ''}`}>
          <div className="modal-basket-empty-heading">Shopping cart is empty</div>
          <div className="modal-basket-empty-text">
            Continue shopping to add product to your cart
          </div>
        </div>
        <div className={`modal-basket-thanks ${submit ? 'active' : ''}`}>
          <div className=" modal-basket-thanks-heading"> {custumerName}, thanks for purchasing</div>
          <div className="modal-basket-thanks-text">We will contact you soon</div>
        </div>
        <div
          className={`modal-basket-products-wrapper ${totalCount > 0 && !submit ? 'active' : ''}`}>
          <div className="modal-basket-products">
            <div className="modal-basket-products-heading">
              <div className="modal-basket-products-title modal-form-title">Products</div>
              <div className="modal-basket-checkbox">
                <input
                  className="curencytoggle USD"
                  type="radio"
                  id="USD"
                  name="curency"
                  checked={currencyTag === '$' ? true : false}
                  readOnly
                />
                <label htmlFor="USD" id="$" onClick={(e) => onchangeCurrency(e.target)}>
                  USD
                </label>
                <input
                  className="curencytoggle UAH"
                  type="radio"
                  id="UAH"
                  name="curency"
                  checked={currencyTag === '₴' ? true : false}
                  readOnly
                />
                <label htmlFor="UAH" id="₴" onClick={(e) => onchangeCurrency(e.target)}>
                  UAH
                </label>
              </div>
            </div>
          </div>
          <div className="modal-basket-product-list">
            {products &&
              Object.values(products).map((product, idx) => (
                <Cartitem
                  product={product.products[0]}
                  key={idx}
                  currency={currencyTag}
                  count={product.products.length}
                  deleteFromCart={deleteProduct}
                  onPlusProduct={onPlusProduct}
                  onMinusProduct={onMinusProduct}
                  closeCart={onCloseCart}
                  uahRate={uahRate}
                />
              ))}
          </div>
          <div className="modal-basket-total-price">
            Total:<p className="dollar-or-uah-total">{currencyTag}</p>
            <p className="total-price">{totalPrice * (currencyTag === '$' ? 1 : uahRate)}</p>
          </div>
          <div className="modal-basket-form-wraper">
            <div className="modal-basket-form-title modal-form-title">Place an order</div>
            <ContactForm
              clas={'modal-basket'}
              onSubmit={onSubmit}
              order={{ products, totalCount, totalPrice }}
            />
          </div>
        </div>
      </div>
      <CartButton openCart={onOpenCart} isOpen={open} count={totalCount} />
    </div>
  );
}

export default Cart;
