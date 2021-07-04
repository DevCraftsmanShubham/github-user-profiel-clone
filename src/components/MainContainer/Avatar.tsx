import { FC } from 'react';
import styled from 'styled-components';
import avatar from '../../assets/avatar.png';
const UserAvatar = styled.img`
  height: 200px;
  border-radius: 60%;
  border: 0.5px solid #f2f2f2;
`;

const UserName = styled.p`
    font-size: 18px;
    margin: 0;
`;
interface Props {
  img: string;
  username: string;
}

const Avatar: FC<Props> = ({ img, username }) => {
  return (
    <>
      <UserAvatar src={img || avatar} />
      <UserName>{username}</UserName>
    </>
  );
};

export default Avatar;
