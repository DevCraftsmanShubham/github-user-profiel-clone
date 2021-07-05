import { FC } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { tabsProps } from '../../models/TabModels';
import { changeTab } from '../../redux/actions';

const Container = styled.div`
  height: 60px;
  border-bottom-color: #f2f2f2;
  border-bottom-style: solid;
  border-bottom-width: 0.5px;
  display: grid;
  grid-template-columns: 0.25fr 1fr;
  padding-left: 10%;
  padding-right: 10%;
`;

interface TabProps {
  selected: boolean;
}

const Tab = styled.span<TabProps>`
  padding: 5px;
  color: #000;
  height: 20px;
  font-weight: ${props => props.selected ?  'bold' : 'normal'};
  border-bottom-color: ${props => props.selected ? '#ff0000' : `transparent` };
  border-bottom-style: solid;
  border-bottom-width: 2px;
  width: 7%;
  
`;

const TabsContainer = styled.div`
  display: flex;
  width: 100%;
  display: flex;
  height: 60px;
  align-items: flex-end;
  cursor: pointer;
`;
const EmptyContainer = styled.div`
  display: flex;
  width: 100%;
`;


const Tabs:FC<tabsProps> = ({ changeTab, tabs }) => {
    const { selectedTab } = tabs;
    console.log(tabs)
  return (
    <Container>
      <EmptyContainer />
      <TabsContainer>
        <Tab onClick={() => changeTab({selectedTab: 0})} selected={selectedTab === 0}>Overview</Tab>
        <Tab onClick={() => changeTab({selectedTab: 1})} selected={selectedTab === 1}>Repositories</Tab>
        <Tab onClick={() => changeTab({selectedTab: 2})} selected={selectedTab === 2} style={{ paddingLeft: 30 }}>Projects</Tab>
        <Tab onClick={() => changeTab({selectedTab: 3})} selected={selectedTab === 3}>Packages</Tab>
      </TabsContainer>
    </Container>
  );
};

const mapStateToProps = (state: any) => {
    return { 
        tabs: state.tabs,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return { 
        changeTab: (payload: any) => dispatch(changeTab(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
