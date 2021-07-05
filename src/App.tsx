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

const Footer = styled.div``;

function App() {
  return (
    <Provider store={store}>
      <>
        <Header />
        <Tabs />
        <MainContainer />
      </>
    </Provider>
  );
}

export default App;
