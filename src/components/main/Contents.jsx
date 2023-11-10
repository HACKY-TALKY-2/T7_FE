import styled from "styled-components";
import { Button } from "@mui/material";
import Left from "./Left";
import Right from "./Right";

const Wrapper = styled.div`
  width: 100vw;
  height: 90vh;
  background-color: pink;
  display: flex;
  justify-content: space-between;
`;

function Contents() {
  return (
    <Wrapper>
      <Left />
      <Right />
    </Wrapper>
  );
}

export default Contents;
