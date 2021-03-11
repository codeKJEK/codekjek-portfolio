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
            <form className="contactForm" name="contact" netlify>
              <p>
                <label>Name <input type="text" name="name" /></label>
              </p>
              <p>
                <label>Email <input type="email" name="email" /></label>
              </p>
              <p>
                <label>Comment <textarea type="text" name="comment" /></label>
              </p>
              <p>
                <button class="cta-btn cta-btn--resume" type="submit">Send</button>
              </p>
            </form>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
