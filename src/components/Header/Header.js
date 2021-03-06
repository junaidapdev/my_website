import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display:'flex', alignItems:'center', color:'white', fontSize:'2rem', marginBottom:'2rem'}}>
          <DiCssdeck size="3rem"/> <span>Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
      <Link href="#projects">
        <NavLink> Projects
        </NavLink>
      </Link>
      </li>

      <li>
      <Link href="#projects">
        <NavLink> Technologies
        </NavLink>
      </Link>
      </li>

      <li>
      <Link href="#projects">
        <NavLink> About
        </NavLink>
      </Link>
      </li>
    </Div2>
    <Div3>
    <SocialIcons href="https://github.com/junaidapdev">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/mohammed-junaid-228b5319a/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://twitter.com/mdjunaidap">
          <AiFillTwitterSquare size="3rem"/>
        </SocialIcons>
      </Div3>
    
  </Container>
);

export default Header;
