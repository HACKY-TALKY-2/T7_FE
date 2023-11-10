import styled from "styled-components";
import React, { Fragment } from "react";
import OrderList from "./OrderList";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function OrderListPage1() {
  return (
    <div>
      <OrderList admin={false}></OrderList>
    </div>
  );
}

export default OrderListPage1;
