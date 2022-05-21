import React from 'react';

function Social({ link, image, name }) {
  return (
    <div className="footer__social-item">
      <a href={link} target="_blank" rel="noreferrer">
        <img className="footer__social-item" src={image} alt={name} />
      </a>
    </div>
  );
}

export default Social;
