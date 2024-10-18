import React from 'react';

import { Section, SectionText, SectionTitle, Link } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Tom Aston
        </SectionTitle>
        <SectionText>
        Hi, I’m Tom! I’m a Software Engineer based in London with 3+ years of professional experience. Currently, I’m working for Siemens Mobility within Central Engineering and Innovation. I have experience in cloud-based web development, mathematical model development (simulations) and cybersecurity. I enjoy working in data-driven environments where I can apply my creativity to help boost innovation!
        </SectionText>
        <Button onClick={(e) => {
          e.preventDefault();
          window.location.href = '/files/resume.pdf';
        }}>My Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
