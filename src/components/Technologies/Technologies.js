import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id="tech">
   <SectionDivider/>
   <br/>
   <SectionTitle>Technologies</SectionTitle>
   <SectionText>
     I've worked with amazing Technologies from UI Design to backend.
   </SectionText>
   <List>
     <ListItem>
       <DiReact size="3rem"/>
       <ListContainer>Front-end</ListContainer>
       <ListParagraph>
         Experienced with <br/>
         React.js 
       </ListParagraph>
     </ListItem>
     <ListItem>
       <DiFirebase size="3rem"/>
       <ListContainer>Back-end</ListContainer>
       <ListParagraph>
         Experienced with <br/>
         Node.js 
       </ListParagraph>
     </ListItem>
     <ListItem>
       <DiZend size="3rem"/>
       <ListContainer>UI/UX</ListContainer>
       <ListParagraph>
         Experienced with <br/>
         Figma 
       </ListParagraph>
     </ListItem>
   </List>
 </Section>
);

export default Technologies;
