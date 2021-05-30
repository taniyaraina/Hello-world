import React from 'react';
import styled from 'styled-components';

const Section = styled.div`;
img {
  max-width: 150px;
  width:100%;
}
.center {
  max-width:90%;
}
`;

const Footer = () => {
  return (
    <Section>
      <footer className="footer">
      <div className="center is-small is-light is-flex is-justify-content-center">
        <div>
          <div className="columns">
            <div className="column">
              <img className="pb-5"src="https://divjoy.com/static/images/uploads/logo.svg"/>
              <p>© 2020 Company</p>
            </div>
            <div className="column">
              <div>
                <div className="is-flex is-justify-content-space-between">
                 <i class="fab fa-twitter"></i>
                 <i class="fab fa-facebook-f"></i>
                 <i class="fab fa-instagram"></i>
                 </div>
                </div>
                <div className="is-flex is-justify-content-space-between">
                  <a href="/about">About</a>
                  <a href="/faq">FAQ</a>
                  <a href="/contact">contact</a>
                  <a href="/blog">Blog</a>
                </div>
              </div> 
            </div>
        </div>
      </div>
    </footer>
    </Section>

  );
};

export default Footer;
