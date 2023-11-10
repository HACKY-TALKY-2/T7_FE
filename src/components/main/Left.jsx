import styled from "styled-components";
import { useState } from "react";
import { Button } from "@mui/material";
import Menu from "../../assets/main/Menu";

const Wrapper2 = styled.div`
  width: 70vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MenuBox = styled.div`
  width: 70vw;
  overflow-y: auto;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

function Left() {
  const [number, setNumber] = useState(1);
  const [name, setName] = useState("");
  const [id, setId] = useState(0);
  const [category, setCategory] = useState("");
  const [totalPrice, setTotalPrice] = useState(1000);

  const handleMenuItemClick = (price, name, id, category) => {
    setNumber(1);
    setTotalPrice(price);
    setName(name);
    setId(id);
    setCategory(category);
  };

  return (
      <Wrapper2>
          <MenuBox>
              <div>
                  <Button color="success">coffee</Button>
                  <Button color="success">tea</Button>
                  <Button color="success">ade</Button>
                  <Button color="success">others</Button>
              </div>
              <div
                  style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                  }}
              >
                  <Menu onMenuItemClick={handleMenuItemClick} />
              </div>
          </MenuBox>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ display: "flex" }}>
                  <Button
                      color="success"
                      onClick={() => {
                          number !== 1 ? setNumber(number - 1) : setNumber(1);
                          number !== 1
                              ? setTotalPrice((totalPrice * (number - 1)) / number)
                              : setTotalPrice(totalPrice);
                      }}
                  >
                      -
                  </Button>
                  <h3>{number}</h3>
                  <Button
                      color="success"
                      onClick={() => {
                          setNumber(number + 1);
                          setTotalPrice((totalPrice * (number + 1)) / number);
                      }}
                  >
                      +
                  </Button>
              </div>
              <h3>price: {totalPrice}\</h3>
              <Button color="success">add</Button>
          </div>
      </Wrapper2>
  );
}

export default Left;
