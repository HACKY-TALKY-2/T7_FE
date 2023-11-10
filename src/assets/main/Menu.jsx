import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 40vw;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 10px;
`;

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    fetchMenuItems().then((data) => {
      setMenuItems(data);
    });
  }, []);

  async function fetchMenuItems() {
    return [
      {
        id: 1,
        name: "Item 1",
        price: "1000",
        category: "Drinks",
        image: "/images/item1.jpg",
      },
      {
        id: 2,
        name: "Item 2",
        price: "1500",
        category: "Food",
        image: "/images/item2.jpg",
      },
    ];
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
        >
          <img src={item.image} style={{ width: "30vw", height: "50vh" }} />
          <div style={{ display: "flex", gap: "5vw" }}>
            <p>{item.name}</p>
            <p>{item.price}\</p>
          </div>
        </div>
      ))}
    </Wrapper>
  );
}

export default Menu;
