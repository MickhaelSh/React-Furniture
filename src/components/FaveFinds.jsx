import { useState } from 'react';
import Product from './Product';

const categories = ['Armchairs', 'Lamps', 'Tables'];

function FaveFinds({ data, addToCart }) {
  const [category, setCategory] = useState(0);
  const onChangeCategory = (id) => {
    setCategory(id);
  };
  return (
    <section className="fave-finds container" id="fave">
      <div className="fave-finds__title-container">
        <h2 className="fave-finds__title">Our Fave Finds</h2>
        <p className="fave-finds__text">The best designer products from the 2022 collections. </p>
      </div>
      <div className="fave-finds__tabs-container">
        <div className="fave-finds__tabs">
          {categories.map((el, id) => (
            <div
              className={`fave-finds__tab ${category === id ? 'active' : ''}`}
              key={id}
              id={id}
              onClick={() => onChangeCategory(id)}>
              {el}
            </div>
          ))}
        </div>
        <div className="fave-finds__items-container">
          {data &&
            data.map((el) =>
              el.category === categories[category] ? (
                <Product product={el} key={el.id} addToCart={addToCart} />
              ) : null,
            )}
        </div>
      </div>
    </section>
  );
}

export default FaveFinds;
