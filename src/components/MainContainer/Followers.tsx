import { FC } from 'hoist-non-react-statics/node_modules/@types/react';
import styled from 'styled-components';
import { FollowersFollowingProps } from '../../models/UserModel';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
`;

const Text = styled.span`
  font-size: 10px;
  
`;

const FollowersFollowing: FC<FollowersFollowingProps> = ({
  followers,
  following,
}) => {
  return (
    <Container>
      <Text>{followers} followers</Text>
      <Text>{following} following</Text> 
    </Container>
  );
};

export default FollowersFollowing;
