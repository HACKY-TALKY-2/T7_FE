import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "@mui/material/Button";
import MainPage from "./pages/MainPage";
import OrderListPage1 from "./pages/OrderListPage1";
import OrderListPage2 from "./pages/OrderListPage2";

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/orderlist1" element={<OrderListPage1 />} />
        <Route path="/orderlist2" element={<OrderListPage2 />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
