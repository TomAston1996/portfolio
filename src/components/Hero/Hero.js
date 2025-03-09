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
        Hi, I’m Tom 👋 I’m a Software Engineer based in London with 3+ years of experience in developing cloud-based applications in AWS and simulation / mathematical-modelling technology 🚀
  
        I’ve worked at Siemens Mobility, contributing to cutting-edge engineering projects within their Central Engineering and Innovation teams. I thrive in data-driven environments where I can apply my creativity to solve complex problems and drive innovation💡
        </SectionText>
        <Button onClick={(e) => {
          e.preventDefault();
          // window.location.href = '/files/resume.pdf';
          window.open('/files/resume.pdf')
        }}
        disabled={true}
        >My Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
