import arrow from './img/brands-carousel-arrow.png';
import cart from './img/about-us-cart.svg';
import money from './img/about-us-money.svg';
import warranty from './img/about-us-warranty.svg';
import payment from './img/about-us-payments.svg';
import { useState } from 'react';

const faq = [
  {
    question: `How to make an order?`,
    answer: `Specify the name of the preferred product in our contact form and provide all the
needed details. Our manager will contact you soon after checking the stock status.`,
  },
  {
    question: `Dispatch v Delivery`,
    answer: `On the product page, you can see a dispatch estimate e.g. 'within 2-3 weeks'.
Dispatch is when we send the item to our delivery partner, not the date it is
delivered to your door. If you need more accurate delivery times, check it with the
manager.`,
  },
  {
    question: `Returns & Refunds`,
    answer: `If you won't like the product, you can return it to us within 14 days for a full
refund. Simply contact us and we will assist you with your return. Remember that
you'll need to disassemble the item and repackage it, in order for us to collect the
product and return it to the warehouse.`,
  },
];

const features = [
  {
    img: cart,
    title: `Next-day Delivery`,
    description: `Free next-day delivery to any corner of the USA for all orders over $300.`,
  },
  {
    img: money,
    title: `100% Money back`,
    description: ` If you won't like the product, return in to us in 14 days and get the full refund.`,
  },
  {
    img: warranty,
    title: `Warranty handling`,
    description: `If you find a defect in the product or a breakdown occurs, we will fix it for free.`,
  },
  {
    img: payment,
    title: `Payment methods`,
    description: `We accept payment by cash, Visa and MasterCard, PayPal and many other options.`,
  },
];

function AboutUs() {
  const [active, setActive] = useState({ 0: '', 1: '', 2: '' });
  function toggleFaq(idx) {
    active[idx] === ''
      ? setActive((prevState) => ({ ...prevState, [idx]: 'active' }))
      : setActive((prevState) => ({ ...prevState, [idx]: '' }));
  }
  return (
    <section className="about-us container">
      <div className="about-us__content">
        <div className="about-us__text-container">
          <h2 className="about-us__title">About Us</h2>
          <h3 className="about-us__slogan">
            We sell designer furniture, lamps & decor across the USA
          </h3>
        </div>
        <div className="about-us__faq">
          {faq.map((el, idx) => (
            <div className="about-us__faq-item" key={idx}>
              <div className="about-us__faq-question" onClick={() => toggleFaq(idx)}>
                <div className="about-us__faq-question-text">{el.question}</div>
                <div
                  className={`about-us__faq-question-button ${
                    active[idx] === 'active' ? 'active' : ''
                  }`}>
                  <img src={arrow} alt="show more" />
                </div>
              </div>
              <div className={`about-us__answer-panel ${active[idx] === 'active' ? 'active' : ''}`}>
                <p className="about-us__faq-ansver">{el.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="about-us__video-container">
        <iframe
          src="https://www.youtube.com/embed/QacK3mGU11o"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
      </div>
      <div className="about-us__features">
        {features.map((el, idx) => (
          <div className="about-us__features-item" key={idx}>
            <div className="about-us__features-image">
              <img src={el.img} alt={el.title} />
            </div>
            <div className="about-us__features-name">{el.title}</div>
            <div className="about-us__features-description">{el.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutUs;
