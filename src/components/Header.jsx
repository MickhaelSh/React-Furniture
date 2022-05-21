import { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalMenu from './ModalMenu';
import { useLocation } from 'react-router-dom';
import Button from './Button';
import NavLinks from './NavLinks';
import Logo from './Logo';
import HeaderMainTitle from './HeaderMainTitle';

const links = {
  '/React-Furniture/#promotions': 'Promotions',
  '/React-Furniture/#best-seling': 'Best-seling',
  '/React-Furniture/#new-collection': 'New Collection',
  '/React-Furniture/#testimonials': 'Testimonials',
  '/React-Furniture/#contact': 'Contact us',
};

function Header() {
  const [activeModal, setActiveModal] = useState(false);
  const path = useLocation().pathname;

  function onToggleActiveModal() {
    setActiveModal(activeModal === true ? false : true);
  }

  return (
    <header className={`header ${path === '/' ? 'header-main' : ''}`}>
      <div className="header___top-container container">
        <Logo className="header__img-container" />
        <div
          className={`header__burger-container ${activeModal ? 'active' : ''}`}
          onClick={onToggleActiveModal}>
          <span className="header__burger"></span>
        </div>
        <nav className="header__nav">
          {Object.keys(links).map((el) => (
            <NavLinks link={el} name={links[el]} key={el} className={'header__nav-element'} />
          ))}
          <Link to="/React-Furniture/all-products">
            <Button name="shop now" outline={true} exclusiveClass="header__button" />
          </Link>
        </nav>
      </div>
      {path === '/React-Furniture/' ? <HeaderMainTitle /> : ''}
      <ModalMenu open={activeModal} onToggleActiveModal={onToggleActiveModal} links={links} />
    </header>
  );
}

export default Header;
