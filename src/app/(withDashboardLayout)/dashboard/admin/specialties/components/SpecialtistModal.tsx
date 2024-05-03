import FileUploader from '@/components/Form/FileUploader'
import Form from '@/components/Form/Form'
import InputField from '@/components/Form/InputField'
import CustomModal from '@/components/shared/CustomModal/CustomModal'
import { useCreateSpecialityMutation } from '@/redux/api/specialtiesApi'
import { modifyPayload } from '@/utils/modifyFormData'
import { Button, Grid } from '@mui/material'
import {FieldValues } from "react-hook-form"
import { toast } from "sonner"

type TProps ={
    open:boolean
    setOpen:React.Dispatch<React.SetStateAction<boolean>>
}

const SpecialtistModal = ({open,setOpen}:TProps) => {

   const [createSpeciality] = useCreateSpecialityMutation()

  const handleFromSubmit =async (values:FieldValues)=>{
  
    const data = modifyPayload(values)

     try{
       const res = await createSpeciality(data).unwrap()
        
       if(res?.id){
         toast.success('Specialties create successfully')
         setOpen(false)
       }

          
     }
     catch(err:any){
        console.log(err)
     }
  
  }
    
  return (
    <div>
        <CustomModal open={open} setOpen={setOpen} title='Create a new Specialties'>
          <Form onSubmit={handleFromSubmit}>

            <Grid container spacing={2}>

             <Grid item md={6}>
             <InputField name="title" label="Title" size='small'/>
             </Grid>

             <Grid item md={6}>
              <FileUploader name='file' label='File Upload'/>
             </Grid>
              
            </Grid>
            <Button type='submit' sx={{marginTop:'14px'}}>
              Create
            </Button>
          </Form>
        </CustomModal>
    </div>
  )
}

export default SpecialtistModal