import styled from "styled-components";

const EditProfileBtn = styled.button<any>`
width: 90%;
border-radius: 6px;
border: 1px solid #444c56;
cursor: pointer;
padding: 5px 16px;
font-weight: 500;
font-size: 14px;
border-width: 0;
background-color: #373e47;
color: #ffffff;
margin-top: 10px;
&:hover {
  border: 1px solid #ffffff;
  opacity: 0.8;
}
`;
const EditProfile = () => {
    return(
        <EditProfileBtn onClick={() => alert('Edit profile')}>
        Edit profile
      </EditProfileBtn>
    )
};

export default EditProfile;