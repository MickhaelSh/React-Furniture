import { HashLink } from 'react-router-hash-link';

function NavLinks({ link, name, className, onToggleActiveModal }) {
  return (
    link && (
      <HashLink to={link} className={className} onClick={onToggleActiveModal}>
        {name}
      </HashLink>
    )
  );
}

export default NavLinks;
