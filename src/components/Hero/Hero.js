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
        Hi, I'm Tom Aston. I'm an Software Engineer from London with experience in ROMs, Kernels, & Scripts. Currently, I am working in Primebook as an Android Engineer. I'm passionate about contributing to open-source projects and helping the developer community on Facebook and Telegram.
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
