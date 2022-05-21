import facebook from './img/social-facebook.png';
import youtube from './img/social-youtube.png';
import instagram from './img/social-instagram.png';
import NavLinks from './NavLinks';
import Logo from './Logo';
import Social from './Social';
import FooterForm from './FooterForm';

const footerLinks = [
  {
    '/#promotions': 'Promotions',
    '/#new-collection': '2022 Collection',
    '/#fave': 'Best designer products',
  },
  { '/#best-seling': 'Best-selling', '/#testimonials': 'Testimonials' },
];
const social = [
  { name: 'facebook', image: facebook, link: 'https://facebook.com/' },
  { name: 'instagram', image: instagram, link: 'https://instagram.com/' },
  { name: 'youtube', image: youtube, link: 'https://youtube.com/' },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content container">
        <div className="footer__logo-container">
          <Logo className="footer__logo" />
          <p className="footer__logo-slogan">
            We sell designer furniture, lamps & decor across the USA. We offer the best collections
            by American and European designers.
          </p>
        </div>
        <div className="footer__links links-left">
          {Object.keys(footerLinks[0]).map((el) => (
            <div className="footer__links-item" key={el}>
              <NavLinks link={el} name={footerLinks[0][el]} />
            </div>
          ))}
        </div>
        <div className="footer__links links-right">
          {Object.keys(footerLinks[1]).map((el) => (
            <div className="footer__links-item" key={el}>
              <NavLinks link={el} name={footerLinks[1][el]} />
            </div>
          ))}
        </div>
        <div className="footer__social">
          <div className="footer__social-title">Follow Us</div>
          <div className="footer__social-container">
            {social.map(({ name, link, image }) => (
              <Social name={name} link={link} image={image} key={name} />
            ))}
          </div>
        </div>
        <div className="footer__subscrive-form">
          <div className="footer__subscrive-title">Join our newsletter for $30 off</div>
          <FooterForm />
        </div>
      </div>
      <div className="footer__copyrights container">
        <div className="footer__copyrights-create">© Created by Michael</div>
        <div className="footer__copyrights-rights">All rights Reserved</div>
      </div>
    </footer>
  );
}

export default Footer;
