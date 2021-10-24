import React from 'react';
import './style.css';

const Footer = (props) => {
  return (
    <footer className="Footer">
      <section>
        Developed by {' '}
        {/* <span className="Footer__Heart">&hearts;</span> by{' '} */}
        <a
          href="https://www.linkedin.com/in/kiranparihar/"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Kiran Parihar
        </a>
      </section>
    </footer>
  );
};

export default Footer;
