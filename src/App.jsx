import { useState } from "react";
import { Routes, Route } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "@mui/material/Button";
import Display from "./display";
import Flex from "./flex";

function App() {
  const topics = [
    { orderOrder: 1, nickname: "asdd", menu: "a" },
    { orderOrder: 2, nickname: "asdsd", menu: "a" },
  ];

  const [Topics, setTopics] = useState(topics);

  // orderList = [];
  // for (let i = 0; i < topics.length; i++) {
  //   orderList.push(
  //     <Flex
  //       topic={topics[i]}
  //       onChangeMode={(nickname) => {
  //         const lst = [];
  //         for (let i = 0; i < topics.length; i++) {
  //           if (nickname !== nickname) {
  //             lst.push(topics[i]);
  //           }
  //         }
  //         setTopics(lst);
  //       }}
  //     ></Flex>
  //   );
  // }

  return (
    <>
      {/* <div>{orderList}</div> */}

      <Flex
        topic={topics[0]}
        onChangeMode={(nickname) => {
          const lst = [];
          for (let i = 0; i < topics.length; i++) {
            if (nickname !== nickname) {
              lst.push(topics[i]);
            }
          }
          setTopics(lst);
        }}
      ></Flex>
      <Flex topic={topics[1]}></Flex>
    </>
  );
}

export default App;
