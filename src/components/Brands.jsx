import React from 'react';
import BrandSlider from './BrandSlider';

function Brands() {
  return (
    <section className="brands container">
      <BrandSlider />
      <div className="brands__top-brands">
        <div className="brands__brand-container kuko-brand">
          <div className="brands__text-container">
            <h2 className="brands__title">Our Top Brands</h2>
            <h3 className="brands__collection-name">Colorful Collections by KUKO</h3>
            <p className="brands__collection-description">
              KUKO is one of the new-wave furniture manufacturers. They are located in California,
              USA. Inspired by the sun and ocean, they create unique products bringing joy to your
              home or office. Our store presents the best KUKO sofas and armchairs from the
              collections of 2018-2020.
            </p>
            <a href="#fave" className="button button-outline">
              shop kuko
            </a>
          </div>
          <div className="brands__image-container">
            <img
              src="https://res2.weblium.site/res/5e2f1da2c947890021c3f194/5e32ba9c86cda4002229ea0d_optimized_1560_c1560x1170-0x0?nowebp"
              alt="kuko collection"
            />
          </div>
        </div>
        <div className="brands__brand-container landstrom-brand">
          <div className="brands__text-container">
            <h2 className="brands__title">Our Top Brands</h2>
            <h3 className="brands__collection-name">Classics by Landstrom Design</h3>
            <p className="brands__collection-description">
              Landstrom Design, founded in Copenhagen, creates universal pieces of cushioned
              furniture. Its sofas and armchairs look good in any interior styles, from minimalism
              to shabby chic. Such furniture will never go out of style and will catch the eye of
              your guests.
            </p>
            <a href="#fave" className="button button-outline">
              shop landstrom
            </a>
          </div>
          <div className="brands__image-container">
            <img
              src="https://res2.weblium.site/res/5e2f1da2c947890021c3f194/5e32bb1e86cda4002229ec5e_optimized_1560_c1560x1138-0x0?nowebp"
              alt="landstrom collection"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brands;
