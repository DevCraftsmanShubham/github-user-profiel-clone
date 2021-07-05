import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  border-top-width: 1px;
  border-top-style: solid;
  height: 100px;
  padding: 10px 0px;
  align-items: center;
`;

const LanguageContainer = styled.div`
    display: flex;
    justify-content: space-around;

`;

const Title = styled.span`

`;

const RepoItem = (props: any) => {
  const { name, updated_at, language } = props;
  return (
    <Container>
      <div>
        <Title>{name}</Title>
        <LanguageContainer>
          <p>{language}</p>
          <p>{updated_at}</p>
        </LanguageContainer>
      </div>
    </Container>
  );
};

export default RepoItem;
