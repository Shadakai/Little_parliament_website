import { DataGrid } from '@mui/x-data-grid'
import { useState, useEffect } from 'react'
import '../styles/admin.css'


export default function AdminPanel() {

  const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'Name',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
  {
    field: 'Description',
    headerName: 'Description',
    width: 150,
    editable: true,
  },
  {
    field: 'Price',
    headerName: 'Price',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: "edit",
    headerName: "Edit",
    width: 150,
    renderCell: (params)=> {
      return(
        <button className="editItem">Edit</button>
      )
    }
  },
  {
    field: "delete",
    headerName: "Delete",
    width: 150,
    renderCell: (params)=> {
      return(
        <button className="deleteItem">Delete</button>
      )
    }
  },
];

const rows = [
  { id: 1, Name: 'Snow', Description: 'Jon', price: 35 },
  { id: 2, Name: 'Lannister', Description: 'Cersei', price: 42 },
  { id: 3, Name: 'Lannister', Description: 'Jaime', price: 45 },
  { id: 4, Name: 'Stark', Description: 'Arya', price: 16 },
  { id: 5, Name: 'Targaryen', Description: 'Daenerys', price: null },
  { id: 6, Name: 'Melisandre', Description: null, price: 150 },
  { id: 7, Name: 'Clifford', Description: 'Ferrara', price: 44 },
  { id: 8, Name: 'Frances', Description: 'Rossini', price: 36 },
  { id: 9, Name: 'Roxie', Description: 'Harvey', price: 65 },
];

  const [data, setData] = useState({})
  const { title, description, sale_price } = data
  const productDetails = {title, description, sale_price}

  useEffect(async () => {
    const response = await fetch(`https://gentle-fortress-16563.herokuapp.com/products`)
    const result = await response.json()
    setData(result)
  }, [])

  return (
    <div className="adminpanel">
        <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}
