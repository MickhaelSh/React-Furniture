import { Link } from 'react-router-dom';

function Logo({ className }) {
  return (
    <Link to="/" className="header__nav-element">
      <img
        className={className}
        src={
          className === 'header__img-container'
            ? 'https://res2.weblium.site/res/5e2f1da2c947890021c3f194/5e33277186cda400222c9970_optimized_259?nowebp'
            : 'https://res2.weblium.site/res/5e2f1da2c947890021c3f194/5e332770198fdb0021a86911_optimized_266?nowebp'
        }
        alt="sofa logo"
      />
    </Link>
  );
}

export default Logo;
