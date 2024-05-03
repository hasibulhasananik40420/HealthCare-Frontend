"use client"
import { Stack ,Box,Button,TextField} from "@mui/material"
import DoctorModal from "./components/DoctorModal"
import {useState} from 'react'

const DoctorsPage = () => {
  const [isModalOpen, setIsModalOpen] =useState<boolean>(false);
    return (
      <Box>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
          <Button onClick={()=>setIsModalOpen(true)} size="small">Create Doctor</Button>

           <DoctorModal open={isModalOpen} setOpen={setIsModalOpen}/>
        
      
          <TextField size='small'  placeholder='Search Specialties' variant="outlined" />
      </Stack>
      </Box>
    )
  }
  
  export default DoctorsPage