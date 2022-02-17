import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Analytics } from '@segment/analytics-next';
import { Cta } from '../../styles/Cta';

import { Container } from './Contact.styles';
import { contactData } from '../../source/Data';

const Contact: React.FC = () => {
  const [analytics] = useState<Analytics | undefined>(undefined);

  return (
    <Container id="Contact">
      <Fade duration={1000} delay={300} distance="30px">
        <h1>{contactData.title}</h1>
      </Fade>
      <div>
        <Fade bottom duration={1000} delay={300} distance="30px">
          <p>{contactData.description}</p>
          <Cta
            href={contactData.mailTo}
            target="_blank"
            onClick={() => analytics?.track('Mailto button clicked')}
          >
            E-mail
          </Cta>
        </Fade>
      </div>
    </Container>
  );
};

export default Contact;
