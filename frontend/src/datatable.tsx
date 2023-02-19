import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridToolbar, jaJP } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'title', headerName: '項目名', width: 150 },
    { field: 'description', headerName: '備考', width: 150 },
    { field: 'owner_id', headerName: '所有者', width: 150 },
];

const DataTable = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('http://localhost:8080/items', { method: 'GET' })
            .then(res => res.json())
            .then(data => {
                setPosts(data)
            })
    }, [])

    return (
        <Box sx={{ height: 600, width: '100%' }}>
            <DataGrid
                rows={posts} columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
                components={{ Toolbar: GridToolbar }}
                localeText={jaJP.components.MuiDataGrid.defaultProps.localeText}
            />
        </Box>
    );
};


export default DataTable;

