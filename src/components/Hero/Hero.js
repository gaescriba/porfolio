import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/>
        My personal Portfolio
      </SectionTitle>
      <SectionText>
        The purpose of this portfolio is showing my knowledge and share it to the world
      </SectionText>
      <Button onClick={()=> window.location = '#about'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;