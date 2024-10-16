import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { title: 'AWS', text: 'AWS Certified Developer' },
  { title: 'TUV', text: 'Certified Cybersecurity Technical Expert', },
  { title: 'Siemens', text: 'Star of the Future 2023', },
  { title: 'UoN', text: 'MSc Highest Academic Performance (82%)', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.title}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
