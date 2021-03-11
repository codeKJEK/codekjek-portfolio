import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p>
            <form className="contactForm" name="contact" method="POST" data-netlify-recaptcha="true" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <p>
                <label>Name: <input type="text" name="name" /></label>
              </p>
              <p>
                <label>Email: <input type="text" name="email" /></label>
              </p>
              <p>
                <label>Message: <textarea name="message"></textarea></label>
              </p>
              <div data-netlify-recaptcha="true"></div>
              <p>
                <button className="cta-btn cta-btn--resume" type="submit">Send</button>
              </p>
            </form>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
