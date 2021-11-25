
import React from 'react';
import * as S from "./style"
import { graphql, useStaticQuery } from 'gatsby';
import  Nav  from './nav';
import Section from './section'
import Container from './container'
const Header = () => {
  return (
   <div>
     <Nav/>
     <Section/>
     <Container/>
   </div>
  );
};

export default Header;