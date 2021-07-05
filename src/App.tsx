import React from 'react';
import { useState } from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import MainContainer from './components/MainContainer/MainContainer';
import Tabs from './components/Tabs/Tabs';
import store from './redux/store';

const Header = styled.div`
  height: 60px;
  background-color: #373e47;
`;

const Footer = styled.div`
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: #f2f2f2;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items:center;

`;

function App() {
  return (
    <Provider store={store}>
      <div style={{ height: '100vh'}}>
        <Header />
        <Tabs />
        <MainContainer />
        <Footer>
          <span>@ copyright</span>
        </Footer>
      </div>
    </Provider>
  );
}

export default App;
