import React, {useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridToolbar, jaJP} from '@mui/x-data-grid';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useForm, SubmitHandler } from 'react-hook-form';
import Modal from "react-modal";

function App() {
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'title',headerName: '項目名',width: 150},
    { field: 'description',headerName: '備考',width: 150},
    { field: 'owner_id', headerName: '所有者',width: 150},
  ];
  
  const [posts, setPosts] = useState([])
  const [modal, setModal] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8080/items', {method: 'GET'})
    .then(res => res.json())
    .then(data => {
        setPosts(data)
    })
  },[modal])

  type Inputs = {
    title: string;
    description: string;
    owner_id: string;
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data: any) => { 
      fetch(`http://localhost:8080/users/${data.owner_id}/items/`, 
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        }
          )
          console.log(data)
          console.log(data.owner_id)
        setModal(false);
      };
  
  const openModal = () => {
      setModal(true);
  };
  const closeModal = () => {
      setModal(false);
  };
  
  return (
    <>

    <button onClick={openModal}>アイテムの登録</button>
    
    <Modal isOpen={modal} ariaHideApp={false}>      
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="test" {...register('title')} />
        <input {...register('description')} />
        <input {...register('owner_id', { required: true })} />
        {errors.description && (
        <span style={{ color: 'red' }}>This field is required</span>
        )}
      <input type="submit" />      
      </form>
      <button onClick={closeModal}>close</button> 
    </Modal>

    <Box sx={{ height: 600, width: '100%'}}>
      <DataGrid
        rows={posts}　columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        components={{ Toolbar: GridToolbar }}
        localeText={jaJP.components.MuiDataGrid.defaultProps.localeText} 
      />
    </Box>
    </>  
  );
}

export default App;