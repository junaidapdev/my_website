import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        I'm Mohammed <br/>
        Junaid
      </SectionTitle>
      <SectionText>
        Frontend Developer who loves to build products and make peoples task easy.
      </SectionText>
      <Button onclick= {() => window.location ="https://twitter.com/mdjunaidap"}>Contact Me </Button>
    </LeftSection>
  </Section>
);

export default Hero;