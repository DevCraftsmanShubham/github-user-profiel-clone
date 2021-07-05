import axios from 'axios';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { storeUserDetails } from '../../redux/actions';
import UserDetails from './UserDetails';
import Overview from '../Tabs/Overview/Overview';
import Repos from '../Tabs/Repos/Repos';
import Packages from '../Tabs/Packages/Packages';
import Projects from '../Tabs/Projects/Projects';

const Container = styled.div<any>`
  height: calc(100vh -100px);
  display: grid;
  grid-template-columns: 0.25fr 1fr;
  padding-left: 10%;
  padding-right: 10%;
`;

const UserContainer = styled.div``;


const MainContainer = (props: any) => {
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          'https://api.github.com/users/shalabhsingh'
        );
        props.storeUser(response.data);
      } catch (error) {
        console.log('Main Container APi', error);
      }
    })();
  }, []);

  const renderTab = () => {
    const { selectedTab } = props.tabState;

    switch (selectedTab) {
      case 0:
        return <Overview />;
      case 1:
        return <Repos />;
      case 2:
        return <Projects />;
      case 3:
        return <Packages />;
    }
  };

  return (
    <Container>
      <UserContainer>
        <UserDetails />
      </UserContainer>
      <div style={{ height: '100%'}}>{renderTab()}</div>
    
    </Container>
  );
};

const mapStateToProps = (state: any) => {
  return {
    tabState: state.tabs,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    storeUser: (payload: any) => dispatch(storeUserDetails(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
