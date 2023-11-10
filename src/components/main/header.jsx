import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Wrapper = styled.div`
  width: 100vw;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: grey;
`;

function Header() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <h3 style={{ marginLeft: "7vw" }}>user.name</h3>
      <Button
        color="success"
        onClick={() => navigate("/orderlist1")}
        style={{ marginRight: "7vw" }}
      >
        order list
      </Button>
    </Wrapper>
  );
}

export default Header;
