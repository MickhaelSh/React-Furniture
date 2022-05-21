import cart from './img/shopping-basket.svg';

function CartButton({ openCart, isOpen, count }) {
  return (
    <div className={`shoping-basket ${count > 0 && !isOpen ? 'active' : ''}`} onClick={openCart}>
      <div className={`shoping-basket-counter ${count > 0 ? 'active' : ''}`}>{count}</div>
      <img className=" shoping-basket-img" src={cart} alt="shoping basket" />
    </div>
  );
}

export default CartButton;
