import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Virtual, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const brands = [
  {
    src: 'https://res2.weblium.site/res/5e2f1da2c947890021c3f194/5e34145f266ed50021f57dc8_optimized_500_e563x450-31x25?nowebp',
    alt: 'Idea',
  },
  {
    src: 'https://res2.weblium.site/res/5e2f1da2c947890021c3f194/5e34146218c4d7002106ff74_optimized_500_e584x467-42x33?nowebp',
    alt: 'ArtVan',
  },
  {
    src: 'https://res2.weblium.site/res/5e2f1da2c947890021c3f194/5e34145dbde3b40021e56cbe_optimized?nowebp',
    alt: 'IKEA',
  },
  {
    src: 'https://res2.weblium.site/res/5e2f1da2c947890021c3f194/5e34145c18c4d7002106ff5f_optimized?nowebp',
    alt: 'Vitra',
  },
  {
    src: 'https://res2.weblium.site/res/5e2f1da2c947890021c3f194/5e34145b18c4d7002106ff59_optimized?nowebp',
    alt: 'Walmart',
  },
  {
    src: 'https://res2.weblium.site/res/5e2f1da2c947890021c3f194/5e341d034982e3002131ea15_optimized?nowebp',
    alt: 'Kronheims',
  },
  {
    src: 'https://res2.weblium.site/res/5e2f1da2c947890021c3f194/5e341d04266ed50021f5ad7b_optimized?nowebp',
    alt: 'Seaman`s',
  },
];

function BrandSlider() {
  return (
    <Swiper
      modules={[Navigation, Virtual, Autoplay]}
      navigation
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      spaceBetween={0}
      slidesPerView={4}
      loop={true}>
      {brands.map((brand, index) => (
        <SwiperSlide virtualIndex={index} key={brand.alt}>
          <img src={brand.src} alt={brand.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default BrandSlider;
