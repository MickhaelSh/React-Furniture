import Brands from '../Brands';
import FaveFinds from '../FaveFinds';
import FeedBackSlider from '../FeedBackSlider';
import Product from '../Product';
import AboutUs from '../AboutUs';
import ContactForm from '../ContactForm';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProductToCart } from '../redux/actions/cart';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Home() {
  const data = useSelector(({ products }) => products.products);
  const dispatch = useDispatch();
  const onClickAddProduct = React.useCallback(
    (object) => {
      dispatch(addProductToCart(object));
    },
    [dispatch],
  );

  return (
    <main className="main">
      <section className="collections" id="promotions">
        <div className="collections__list container">
          <div className="collections__list-item">
            <div className="collections__list-image-container">
              <img
                className="collections__list-image"
                src="//res2.weblium.site/res/5e2f1da2c947890021c3f194/5e31895ca948e70023c284a7_optimized_1140?nowebp"
                alt="collection"
              />
            </div>
            <h3 className="collections__list-title">
              <span className="highlighted">15% off</span> on Tables & Cabinets
            </h3>
            <div className="collections__list-anchor">
              <Link to="/React-Furniture/">learn more</Link>
            </div>
          </div>
          <div className="collections__list-item">
            <div className="collections__list-image-container">
              <img
                className="collections__list-image"
                src="//res2.weblium.site/res/5e2f1da2c947890021c3f194/5e31893b01cea70021e7407b_optimized_1395_c1395x930-0x0?nowebp"
                alt="collection"
              />
            </div>
            <h3 className="collections__list-title">All-White Collection in Store</h3>
            <div className="collections__list-anchor">
              <Link to="/React-Furniture/">learn more</Link>
            </div>
          </div>
          <div className="collections__list-item">
            <div className="collections__list-image-container">
              <img
                className="collections__list-image"
                src="//res2.weblium.site/res/5e2f1da2c947890021c3f194/5e334f7786cda400222d1564_optimized_1396?nowebp"
                alt="collection"
              />
            </div>
            <h3 className="collections__list-title">
              <span className="highlighted">NEW!</span> Modern Collection by ARM
            </h3>
            <div className="collections__list-anchor">
              <Link to="/React-Furniture/">learn more</Link>
            </div>
          </div>
        </div>
        <div className="collections__title-container">
          <h2 className="collections__title container big-tittle">
            <span className="highlighted">Top Collections</span> of Designer Cushioned Furniture
          </h2>
        </div>
      </section>
      <section className="best-seling container" id="best-seling">
        <div className="best-seling__title-container">
          <h2 className="best-seling__title">Best-selling Products</h2>
          <div className="best-seling__title-text">Our customers' faves of the week</div>
        </div>
        <div className="best-seling__items-container">
          {data &&
            data.map((el) =>
              el.category === 'Best-seling' ? (
                <Product product={el} key={el.id} addToCart={onClickAddProduct} />
              ) : null,
            )}
        </div>
      </section>
      <section className="spring-collection" id="new-collection">
        <div className="container">
          <div className="spring-collection__text-container">
            <h2 className="spring-collection__tittle big-tittle">
              Spring <span className="highlighted">2022</span> collection
            </h2>
            <div className="spring-collection__text">
              Best styles for your home or office in the most trending colors of 2020. Shop
              cushioned furniture, lamps, coffee tables and accessories here.
            </div>
            <HashLink
              to="/React-Furniture/#fave"
              className="button button-filled spring-collection-button">
              our faves
            </HashLink>
          </div>
          <div className="spring-collection__empty"></div>
        </div>
      </section>
      <section className="black-white-blocks container">
        <div className="black-white-blocks__white">
          <div className="black-white-blocks__text-container">
            <div className="black-white-blocks__slogan white-slogan">
              Bring brightness to the interior
            </div>
            <h3 className="black-white-blocks__tittle white-tittle">
              Get 15% off on colorful 2022 furniture collections.
            </h3>
            <p className="black-white-blocks__text white-text">
              Set bright accents in your interior.
              <br />
              Shop the collections of selected designers.
            </p>
            <HashLink to="/React-Furniture/#fave" className="button button-filled white-anchor">
              learn more
            </HashLink>
          </div>
        </div>
        <div className="black-white-blocks__black">
          <div className="black-white-blocks__text-container">
            <div className="black-white-blocks__slogan black-slogan">
              Bring brightness to the interior
            </div>
            <h3 className="black-white-blocks__tittle black-tittle">
              Get 15% off on colorful 2022 furniture collections.
            </h3>
            <p className="black-white-blocks__text black-text">
              Set bright accents in your interior. <br />
              Shop the collections of selected designers.
            </p>
            <HashLink to="/React-Furniture/#fave" className="button button-filled black-anchor">
              learn more
            </HashLink>
          </div>
        </div>
      </section>
      <FaveFinds data={data} addToCart={onClickAddProduct} />
      <Brands />
      <div className="container">
        <FeedBackSlider />
      </div>
      <AboutUs />
      <section className="contacts container">
        <ContactForm clas={'contacts__form'} />
        <div className="contacts__text-map" id="contact">
          <div className="contacts__text-container">
            <h2 className="contacts__title">Contacts</h2>
            <p className="contacts__text">
              We are always happy to chat with you. Contact us in any convenient way and we will
              answer all your questions.
            </p>
            <div className="contacts__item">
              <div className="contacts__item-title">Address</div>
              <div className="contacts__item-text">
                93-40 Queens Blvd, Flushing,
                <br />
                NY 11374, USA
              </div>
            </div>
            <div className="contacts__item">
              <div className="contacts__item-title">Hours</div>
              <div className="contacts__item-text">
                Monday - Saturday: 11 AM - 9 PM
                <br />
                Sunday: 11 AM - 7 PM
              </div>
            </div>
            <div className="contacts__item">
              <div className="contacts__item-title">Contacts</div>
              <div className="contacts__item-text tel-mail">
                <a href="tel:+12345678900">+1 (234) 567 89 00</a> <br />
                <a href="mailto:sofa@email.com">sofa@email.com</a>
              </div>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2571.790204786235!2d23.940408366896953!3d49.86518543476371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ade6d292a8b5f%3A0xdad12f1cd9eccb27!2z0LLRg9C70LjRhtGPINCo0LXQstGH0LXQvdC60LAsIDMxMywg0JvRjNCy0ZbQsiwg0JvRjNCy0ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCDQo9C60YDQsNGX0L3QsCwgNzkwMDA!5e0!3m2!1suk!2shu!4v1647169828371!5m2!1suk!2shu"
            loading="lazy"
            title="Modern Bedroom"></iframe>
        </div>
      </section>
    </main>
  );
}

export default Home;
