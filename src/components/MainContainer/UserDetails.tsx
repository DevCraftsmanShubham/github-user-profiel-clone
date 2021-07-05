import { FC } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Avatar from './Avatar';
import EditProfile from './EditProfile';
import FollowersFollowing from './Followers';
const Container = styled.div`
  height: 100%;
  flex-direction: column;
`;

const Divider = styled.div`
    border-bottom-width: 1px;
    border-bottom-color: #f2f2f2;
    border-bottom-style: solid;
    margin: 20px 0px;
`
const UserDetails: FC<{ userDetails: any }> = ({ userDetails }) => {
  if (userDetails.data) {
    const { login, avatar_url, followers, following, repos_url, organizations_url, starred_url } = userDetails.data;
    return (
      <Container>
        <Avatar username={login} img={avatar_url} />
        <EditProfile />
        <FollowersFollowing followers={followers} following={following} />
        <Divider />
        <p style={{ fontSize: 16, fontWeight: 'bold' }}>Organizations</p>
      </Container>
    );
  }
  return <div>Loading...</div>;
};

const mapStateToProps = (state: any) => {
  return {
    userDetails: state.user,
  };
};

export default connect(mapStateToProps)(UserDetails);
