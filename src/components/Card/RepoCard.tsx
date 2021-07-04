import styled from "styled-components";


const Card = styled.div`
    height: 100px;
    width: 80%;
    border: 1px solid #444c56;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px 15px ;

`

const Title = styled.a`
    font-weight: 700;
    font-size: 16px
`
const Subtitle = styled.span`
    font-weight: 400;
`;


const RepoCard = () => {
   return( <Card>
       <Title>sdafkjdask</Title>
       <Subtitle>sdafkjdask</Subtitle>
       <Subtitle>Javascript</Subtitle>
    </Card>)
}

export default RepoCard;
