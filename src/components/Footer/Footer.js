import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:+91 8892 786921'>+91 8892 786921</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:junaidap.dev@gmail.com'>junaidap.dev@gmail.com</LinkItem>
        </LinkColumn>
        <SocialIconsContainer>
          <CompanyContainer>
            <Slogan>If you can dream it. You can do it.</Slogan>
          </CompanyContainer>
          <SocialContainer>
          <SocialIcons href="https://github.com/junaidapdev">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/mohammed-junaid-228b5319a/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://twitter.com/mdjunaidap">
          <AiFillTwitterSquare size="3rem"/>
        </SocialIcons>
        </SocialContainer>
        </SocialIconsContainer>
        
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
