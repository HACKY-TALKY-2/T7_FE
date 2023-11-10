import styled from "styled-components";
import Header from "../components/main/header";
import Contents from "../components/main/Contents";

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0;
`;

function MainPage() {
  return (
    <Wrapper>
      <Header />
      <Contents />
    </Wrapper>
  );
}

export default MainPage;
