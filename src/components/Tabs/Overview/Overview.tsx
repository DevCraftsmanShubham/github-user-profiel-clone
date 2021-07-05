import styled from 'styled-components';
import RepoCard from '../../Card/RepoCard';

const Container = styled.div`
height: 100vh
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 25px;
`;

const Overview = () => {
  return (
    <Container>
      <h3>Popular Repositories</h3>
      <CardsContainer>
        <RepoCard />
        <RepoCard />
        <RepoCard />
        <RepoCard />
      </CardsContainer>
    </Container>
  );
};

export default Overview;
