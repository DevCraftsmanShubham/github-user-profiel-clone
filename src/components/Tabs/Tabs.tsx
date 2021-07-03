import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  height: 60px;
  border-bottom-color: #f2f2f2;
  border-bottom-style: solid;
  border-bottom-width: 0.5px;
  display: flex;
  align-items: flex-end;
`;

interface TabProps {
    selected: boolean;
}

const Tab = styled.span<TabProps>`
    padding: 5px;
    color: #000;
    height: 20px;
    border-bottom-color: #FF0000;
    border-bottom-style: solid;
    border-bottom-width: 2px;
    width: 7%;
`;



const Tabs = () => {
  return (
    <Container>
        <Tab selected={false}>Overview</Tab>
        <Tab selected={false}>Repositories</Tab>
        <Tab selected={false} style={{paddingLeft: 30}}>Projects</Tab>
        <Tab selected={false}>Packages</Tab>
    </Container>
  );
};

export default Tabs;
