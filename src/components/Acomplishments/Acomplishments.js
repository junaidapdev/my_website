import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 5, text: 'Projects'},
  { number: 60, text: 'Twitter Threads', },
  { number: 7200, text: 'Twitter Followers', },
  { number: 2, text: 'Ebooks', },
  { number: 10, text: 'Blogs', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>My Accomplishments</SectionTitle>
    <Boxes>
    {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
