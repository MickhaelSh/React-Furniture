import { HashLink } from 'react-router-hash-link';

function HeaderMainTitle() {
  return (
    <section className="header__title container">
      <div className="header__title-text-container">
        <h1 className="header__title-title big-tittle">
          <span className="highlighted">Furniture</span> for Home & Office
        </h1>
        <div className="header__title-text">
          500+ models of cushioned furniture, lamps and accessories.
        </div>
        <HashLink to="/#best-seling" className="button header__button-title button-filled">
          Best-selling products{' '}
        </HashLink>
      </div>
      <div className="header__empty"></div>
    </section>
  );
}

export default HeaderMainTitle;
