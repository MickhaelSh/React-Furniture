import React from 'react';
import NavLinks from './NavLinks';
import Button from './Button';
import { Link } from 'react-router-dom';

function ModalMenu({ open, onToggleActiveModal, links }) {
  open ? document.body.classList.add('lock') : document.body.classList.remove('lock');
  return (
    <div className={`modal-menu ${open ? 'active' : ''}`}>
      <div className="modal-menu__header">
        <div className="modal-menu__logo-container ">
          <Link
            to="/React-Furniture/"
            className="modal-menu__nav-element"
            onClick={onToggleActiveModal}>
            <img
              src="https://res2.weblium.site/res/5e2f1da2c947890021c3f194/5e33277186cda400222c9970_optimized_259?nowebp"
              alt="sofa logo"
            />
          </Link>
        </div>
      </div>
      <nav className="modal-menu__nav">
        {Object.keys(links).map((el) => (
          <NavLinks
            link={el}
            name={links[el]}
            key={el}
            onToggleActiveModal={onToggleActiveModal}
            className={'modal-menu__nav-element'}
          />
        ))}
        <Link to="/React-Furniture/all-products" onClick={onToggleActiveModal}>
          <Button name="shop now" outline={true} exclusiveClass="header__button" />
        </Link>
      </nav>
    </div>
  );
}

export default ModalMenu;
