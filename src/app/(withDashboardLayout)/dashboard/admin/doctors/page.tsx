"use client"
import { Stack ,Box,Button,TextField} from "@mui/material"
import DoctorModal from "./components/DoctorModal"
import {useState} from 'react'
import { useGetAllDoctorsQuery } from "@/redux/api/doctorApi"
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Skeleton from '@mui/material/Skeleton';
import Image from 'next/image'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { toast } from "sonner"

const DoctorsPage = () => {
  const [isModalOpen, setIsModalOpen] =useState<boolean>(false);
   const {data, isLoading} = useGetAllDoctorsQuery({})
  //  console.log(data)

  const doctors = data?.doctors
  const meta = data?.meta
    //  console.log(doctors)

   const handleDelete = ()=>{
       
   }





    const columns: GridColDef[] = [
      { field: 'name', headerName: 'Name', flex:1 },
      { field: 'email', headerName: 'Email', flex:1 },
      { field: 'contactNumber', headerName: 'Contact Number', flex:1 },

      { field: 'Image', headerName: 'Image', flex:1, headerAlign:'center', align:'center', renderCell:({row})=>{
         return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%',}}>
             <Image src={row?.profilePhoto} style={{ borderRadius: '100%' }} alt="profilePhoto" width={40} height={40}/>
         </Box>
      } },

      { field: 'gender', headerName: 'Gender', flex:1 },
      { field: 'apointmentFee', headerName: 'appintmentFee', flex:1 },


      { field: 'action', headerName: 'Action', flex:1, headerAlign:'center', align:'center', renderCell:({row})=>{
        return (
           <IconButton  aria-label="delete">
         <DeleteIcon />
        </IconButton>
        )
      
     } },
     
    ];






    return (


      <Box>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
          <Button onClick={()=>setIsModalOpen(true)} size="small">Create Doctor</Button>

           <DoctorModal open={isModalOpen} setOpen={setIsModalOpen}/>
        
      
          <TextField size='small'  placeholder='Search Specialties' variant="outlined" />
      </Stack>



      <Box my={4}>
           <h1>Display all Specialties</h1>



        {!isLoading ? 
           <div style={{ height: 500, width: '100%', marginTop:'20px' }}>
        <DataGrid
        rows={doctors}
        columns={columns}
        
       
      />
    </div>

    :
    
    <Box sx={{ width: 1000 }}>
    <Skeleton />
    <Skeleton animation="wave" />
    <Skeleton animation={false} />
  </Box>
}




        </Box>

    </Box>

    
    )
  }
  
  export default DoctorsPage