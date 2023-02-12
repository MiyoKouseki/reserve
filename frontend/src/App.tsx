import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams ,GridToolbar} from '@mui/x-data-grid';
import './App.css';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'Name',
    headerName: '項目名',
    width: 150,
    editable: true,
  },
  {
    field: 'status',
    headerName: '使用状況',
    width: 150,
    editable: true,
  },
];

const rows = [
  { id: 1, Name: '体育館', status: 'available'},
  { id: 2, Name: '卓球室', status: 'available'},
  { id: 3, Name: '会議室', status: 'used'},
  { id: 4, Name: '会議室2', status: 'available'},
];

function App() {
  return (
    <Box sx={{ height: 400, width: '60%'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        components={{ Toolbar: GridToolbar }} 
      />
    </Box>
  );
}

export default App;