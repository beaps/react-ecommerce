import React from 'react';

import './styles.scss';

function Contact() {
  return (
    <div className="contact">
      <div className="contact__name">
        <h1>Bea P. Santana</h1>
        <p>Web Developer</p>
      </div>
      <div className="contact__links">
        <p>
          <span className="icon">&#10141;</span>
          <a
            href="https://github.com/beaps"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </p>
        <p>
          <span className="icon">&#10141;</span>
          <a
            href="https://codepen.io/beaps/pens/public"
            target="_blank"
            rel="noopener noreferrer"
          >
            CodePen
          </a>
        </p>
        <p>
          <span className="icon">&#10141;</span>

          <a
            href="https://github.com/beaps/react-ecommerce"
            target="_blank"
            rel="noopener noreferrer"
          >
            Project code{' '}
            <span role="img" aria-label="Woman Technologist">
              👩‍💻
            </span>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
