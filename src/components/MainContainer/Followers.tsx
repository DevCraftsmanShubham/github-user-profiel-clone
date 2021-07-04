import { FC } from 'hoist-non-react-statics/node_modules/@types/react';
import styled from 'styled-components';
import { FollowersFollowingProps } from '../../models/UserModel';
import userGroup from '../../assets/user_group.png';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  align-items: center;
  margin-top: 15px
`;

const Text = styled.span`
  font-size: 12px;
`;

const FollowersFollowing: FC<FollowersFollowingProps> = ({
  followers,
  following,
}) => {
  return (
    <Container>
        <img src={userGroup} style={{ width: 20, height: 20}} />
      <Text> <Text style={{ fontWeight: 600, fontSize: 14}}>{followers}</Text> followers</Text>
      <Text> <Text style={{ fontWeight: 600, fontSize: 14}}>{following}</Text> following</Text> 
    </Container>
  );
};

export default FollowersFollowing;
