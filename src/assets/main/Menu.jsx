import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Wrapper = styled.div`
  width: 40vw;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 10px;
`;

function Menu({ onMenuItemClick }) {
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    fetchMenuItems();
  }, []);

  async function fetchMenuItems() {
    return await axios
      .get("http://13.58.200.222:3001/order/menu", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setMenuItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Wrapper>
      {menuItems.map((item) => (
        <div
          key={item.id}
          style={{
            margin: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          onClick={() => onMenuItemClick(item.price)}
        >
          <img src={item.image} style={{ width: "30vw", height: "50vh" }} />
          <div style={{ display: "flex", gap: "2vw" }}>
            <p>{item.name}</p>
            <p>{item.price}\</p>
          </div>
        </div>
      ))}
    </Wrapper>
  );
}

export default Menu;
