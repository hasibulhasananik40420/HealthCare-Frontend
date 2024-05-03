"use client"
import { Stack ,Box,Button,TextField} from "@mui/material"
import SpecialtistModal from "./components/SpecialtistModal"
import {useState} from 'react'
import { useGetAllSpecialityQuery,useDeleteSpecialityMutation } from "@/redux/api/specialtiesApi"
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Skeleton from '@mui/material/Skeleton';
import Image from 'next/image'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { toast } from "sonner"

const SpecialtiesPage = () => {
  const [isModalOpen, setIsModalOpen] =useState<boolean>(false);
  
    const {data,isLoading} = useGetAllSpecialityQuery({})
    // console.log(data)


    const [deleteSpeciality]= useDeleteSpecialityMutation()

     const handleDelete =async (id:string)=>{
         try{
              const res = await deleteSpeciality(id).unwrap()
               if(res?.id){
                toast.success('Specialtiy delete successfully')
               }
              // console.log(res)
         }
         catch(err:any){
          console.log(err?.message)
         }
        
     }




    const columns: GridColDef[] = [
      { field: 'title', headerName: 'Title', width: 400 },

      { field: 'icon', headerName: 'Icon', flex:1, headerAlign:'center', align:'center', renderCell:({row})=>{
         return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
             <Image src={row?.icon} alt="icon" width={30} height={30}/>
         </Box>
      } },


      { field: 'action', headerName: 'Action', flex:1, headerAlign:'center', align:'center', renderCell:({row})=>{
        return (
           <IconButton onClick={()=>handleDelete(row?.id)} aria-label="delete">
         <DeleteIcon />
        </IconButton>
        )
      
     } },
     
    ];








  return (
   
    <Box>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
          <Button onClick={()=>setIsModalOpen(true)} size="small">Create Specialties</Button>
          <SpecialtistModal open={isModalOpen} setOpen={setIsModalOpen}/>
      
          <TextField size='small'  placeholder='Search Specialties' variant="outlined" />
      </Stack>


        <Box my={4}>
           <h1>Display all Specialties</h1>



        {!isLoading ? 
           <div style={{ height: 500, width: '100%', marginTop:'20px' }}>
        <DataGrid
        rows={data}
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

export default SpecialtiesPage