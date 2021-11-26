import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import Main from '../components/main';
import "../components/global/global.css"
import { Helmet } from 'react-helmet';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,600&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
}
body {
  background-color: #fff;
  overflow-x: hidden;
}
`

const Index = () => {
  return (
   <div>
     <Helmet>
        <title>DETRAN</title>
      </Helmet>
      <GlobalStyle />
     <Header/>
     <Main/>
     <Footer/>
     
   </div>
  );
};

export default Index;