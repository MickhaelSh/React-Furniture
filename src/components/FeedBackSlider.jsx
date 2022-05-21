import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Virtual, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const feedbacks = [
  {
    img: 'https://res2.weblium.site/res/5d53eaaa7869d3002334807a/5d6e2201c3611e0024e502b6_optimized_1920_c888x1332-456x774?nowebp',
    name: 'Judy Peterson',
    city: 'New York',
    feedback: `I'm very pleased with our new sofa! It fits perfectly into the interior.
The assemblage of the furniture was super fast!`,
    date: `October 28, 2021`,
  },
  {
    img: `https://res2.weblium.site/res/5d5b9f803e7f2900231c0846/5d5bbd711ff8a40023d98957_optimized_1920_c644x429-652x265?nowebp`,
    name: `Kyle Hudson`,
    city: `Houston`,
    feedback: `Thank you for helping me choose new armchairs in the living room. They look great
and fit perfectly into my interior`,
    date: `June 24, 2021`,
  },
  {
    img: `https://res2.weblium.site/res/5e2f1da2c947890021c3f194/5e32bc25198fdb0021a5dcc3_optimized_1816_c987x1316-373x451?nowebp`,
    name: `Hanna Levy`,
    city: `Boston`,
    feedback: `Next-day delivery surprised me a lot! I thought I would have to wait for weeks!
Thank you for the quick processing of my order!`,
    date: `October 04, 2021`,
  },
  {
    img: `https://res2.weblium.site/res/5d53998c90502f0023b81c9d/5d6382bd80f1f70024f0334a_optimized_1920_c1185x790-457x212?nowebp`,
    name: `Jim Mockeen`,
    city: `Chicago`,
    feedback: `I not only found the perfect sofa at a reasonable price but also stylish lamps
which were exactly what I wanted. Thank you, SOFA!`,
    date: `January 18, 2022`,
  },
  {
    img: `https://res2.weblium.site/res/5e2f1da2c947890021c3f194/5e32bbd520679f0023be05c7_optimized_1920_c1021x680-705x49?nowebp`,
    name: `Karen Morning`,
    city: `Washington`,
    feedback: `			 My order arrived really quickly and I was amazed by the quality - PERFECT. I would
and have recommended SOFA to others.`,
    date: `February 03, 2020`,
  },
];

function FeedBackSlider() {
  return (
    <section className="custumers " id="testimonials">
      <div className="custumers__title-container ">
        <h2 className="custumers__title">What Our Customers Say</h2>
        <p className="custumers__title-text">We love your feedback on our products!</p>
      </div>
      <Swiper
        modules={[Navigation, Virtual, Pagination]}
        navigation
        pagination
        spaceBetween={24}
        loop={true}
        breakpoints={{
          640: {
            width: 640,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 2,
          },
          900: {
            width: 900,
            slidesPerView: 3,
          },
          1200: {
            width: 1200,
            slidesPerView: 4,
          },
        }}>
        {feedbacks.map((custumer, index) => (
          <SwiperSlide virtualIndex={index} key={index}>
            <div className="custumers__photo">
              <img src={custumer.img} alt={custumer.name} />
            </div>
            <div className="custumers__name">{custumer.name}</div>
            <div className="custumers__town">{custumer.city}</div>
            <div className="cusumers__feedback">{custumer.feedback}</div>
            <div className="custumers__feedback-date">{custumer.date}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default FeedBackSlider;
