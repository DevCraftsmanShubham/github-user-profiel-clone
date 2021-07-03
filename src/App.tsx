import React from 'react';
import styled from 'styled-components';
import MainContainer from './components/MainContainer/MainContainer';
import Tabs from './components/Tabs/Tabs';
const Header = styled.div`
  height: 60px;
  background-color:#FF0000;
`

const Footer = styled.div`

`;


function App() {
  return (
    <>
    <Header />
    <Tabs />
      <MainContainer />
    </>
  );
}

export default App;
