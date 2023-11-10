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

      {/* {
      <SpanningTable></SpanningTable> */}
    </div>
  );
}

// const data = [
//   { id: "1", lo: { code: 101, value: "right", pcode: 10 }, kind: "a" },
//   { id: "2", lo: { code: 101, value: "right", pcode: 10 }, kind: "b" },
//   { id: "3", lo: { code: 101, value: "right", pcode: 10 }, kind: "c" },
//   { id: "4", lo: { code: 102, value: "left", pcode: 10 }, kind: "d" },
//   { id: "5", lo: { code: 102, value: "left", pcode: 10 }, kind: "e" },
//   { id: "6", lo: { code: 103, value: "center", pcode: 10 }, kind: "f" },
//   { id: "7", lo: { code: 103, value: "center", pcode: 10 }, kind: "g" },
//   { id: "8", lo: { code: 103, value: "center", pcode: 10 }, kind: "h" },
//   { id: "9", lo: { code: 104, value: "bottom", pcode: 10 }, kind: "i" },
// ];

// const valueData = data.map((d) => {
//   return d.lo.value;
// });

// let uniqueValueData = [...new Set(valueData)];

// const mappedData = uniqueValueData.map((md) => {
//   const result = { lo: md, subItems: [] };
//   data.forEach((d) => {
//     if (d.lo.value === md) {
//       result.subItems.push({ id: d.id, kind: d.kind });
//     }
//   });
//   return result;
// });

// function SpanningTable() {
//   return (
//     <Paper>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>lo</TableCell>
//             <TableCell>id</TableCell>
//             <TableCell>kind</TableCell>
//             <TableCell>temp</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {mappedData.map((item) => (
//             <Fragment>
//               <TableRow>
//                 <TableCell rowSpan={item.subItems.length + 1}>
//                   {item.lo}
//                 </TableCell>
//               </TableRow>
//               {item.subItems.map((detail) => (
//                 <TableRow>
//                   <TableCell>{detail.id}</TableCell>
//                   <TableCell>{detail.kind}</TableCell>
//                 </TableRow>
//               ))}
//               <TableRow>
//                 <TableCell>hello</TableCell>
//               </TableRow>
//             </Fragment>
//           ))}
//         </TableBody>
//       </Table>
//     </Paper>
//   );
// }

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }
// const rows = [
//   createData("Frozen yoghurt", { a: 1, b: 2 }, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

// function BasicTable() {
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Dessert (100g serving)</TableCell>
//             <TableCell align="right">Calories</TableCell>
//             <TableCell align="right">Fat&nbsp;(g)</TableCell>
//             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//             <TableCell align="right">Protein&nbsp;(g)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow
//               key={row.name}
//               sx={{
//                 "&:last-child td, &:last-child th": {
//                   border: 0,
//                   flexWrap: "wrap",
//                 },
//               }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               {/* <TableCell align="right">{row.calories}</TableCell> */}
//               <TableCell align="right">
//                 {row.calories.map((r) => (
//                   <div>r</div>
//                 ))}
//               </TableCell>
//               <TableCell align="right">{row.fat}</TableCell>
//               <TableCell align="right">{row.carbs}</TableCell>
//               <TableCell align="right">{row.protein}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

export default OrderListPage1;
