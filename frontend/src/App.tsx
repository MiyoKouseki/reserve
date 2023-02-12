import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridToolbar, jaJP} from '@mui/x-data-grid';
import { createTheme, ThemeProvider } from '@mui/material/styles'

function App() {
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'Name',headerName: '項目名',width: 150},
    { field: 'status', headerName: '使用状況', width: 150},
  ];
  
  const rows = [
    { id: 1, Name: '体育館', status: 'available'},
    { id: 2, Name: '卓球室', status: 'available'},
    { id: 3, Name: '会議室', status: 'used'},
    { id: 4, Name: '会議室2', status: 'available'},
  ];

  return (
    <Box sx={{ height: 600, width: '100%'}}>
      <DataGrid
        rows={rows}　columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        components={{ Toolbar: GridToolbar }}
        localeText={jaJP.components.MuiDataGrid.defaultProps.localeText} 
      />
    </Box>
  );
}

export default App;