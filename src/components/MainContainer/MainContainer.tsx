import styled from 'styled-components';
const Container = styled.div`
  height: calc(100vh - 60px);
  display: grid;
  grid-template-columns: 0.5fr 1fr;
`;

const Divider = styled.div`
    height: 0.5px
    border : 1px solid #000;
`;

const MainContainer = (props: any) => {
  return (
    <Container>
      <div>
        
      </div>
      <div>
        
      </div>
    </Container>
  );
};

export default MainContainer;
