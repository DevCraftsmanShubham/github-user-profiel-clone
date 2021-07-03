import { FC } from "react";
import styled from "styled-components";
import avatar from '../../assets/avatar.png';
const UserAvatar = styled.img`
    height: 200px;
    border-radius: 60%;
    border: 0.5px solid #f2f2f2;
`
interface Props {
    img: string;
}

const Avatar: FC<Props> = ({ img }) => {
return (
    <UserAvatar src={img || avatar } />
)
}

export default Avatar;