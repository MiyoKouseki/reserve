import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './App.css';

function createData(
    id: string,
    name: string,    
    status: string,
) {
    return { id, name, status};
}

const initialRows = [
    createData('1','体育館', 'available'),
    createData('2','会議室１', 'used'),
    createData('3','会議室２', 'available'),
    createData('4','卓球室', 'used'),
    createData('5','柔剣道室', 'used'),
];

function App() {
  return (
  <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>項目</TableCell>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">状態</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {initialRows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );    
}

export default App;