import FullScreenModal from "@/components/shared/CustomModal/FullScreenModal"
import FileUploader from '@/components/Form/FileUploader'
import Form from '@/components/Form/Form'
import InputField from '@/components/Form/InputField'
import { Button, Grid } from '@mui/material'
import {FieldValues } from "react-hook-form"
import { toast } from "sonner"
import SelectField from "@/components/Form/SelectField"
import { Gender } from "@/types"
import { modifyPayload } from '@/utils/modifyFormData'
import { useCreateDoctorMutation } from "@/redux/api/doctorApi"

type TProps ={
  open:boolean
  setOpen:React.Dispatch<React.SetStateAction<boolean>>

}



const DoctorModal = ({open,setOpen}:TProps)=>{

  const [createDoctor] = useCreateDoctorMutation()


    const handleFormSubmit =async (values:FieldValues)=>{
      // console.log(values)
       values.doctor.experience = Number(values.doctor.experience) 
       values.doctor.apointmentFee = Number(values.doctor.apointmentFee)
      const data =  modifyPayload(values)

        try{
           

             const res = await createDoctor(data).unwrap()

             if(res?.id){
              toast.success('Doctor create successfully')
              setOpen(false)
            }
            else{
              if(!res?.id){
                toast.error('Something went wrong!!!')
                setOpen(false)
              }
            }


            // console.log(res)



        }
         catch(err:any){
          console.log(err)
         }

    }


  const defaultValues = {
    doctor: {
      email: "",
      name: "",
      contactNumber: "",
      address: "",
      registrationNumber: "",
      gender: "",
      experience: 0,
      apointmentFee: 0,
      qualification: "",
      currentWorkingPlace: "",
      designation: "",
      profilePhoto: "",
    },
    password: "",
  };




    return (
          <div>
             <FullScreenModal open={open} setOpen={setOpen} title='Create a new doctor'>
             <Form onSubmit={handleFormSubmit} defaultValues={defaultValues}>

        <Grid container spacing={2} sx={{ my: 5 }}>
          <Grid item xs={12} sm={12} md={4}>
            <InputField
              name="doctor.name"
              label="Name"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <InputField
              name="doctor.email"
              type="email"
              label="Email"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <InputField
              name="password"
              type="password"
              label="Password"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <InputField
              name="doctor.contactNumber"
              label="Contract Number"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <InputField
              name="doctor.address"
              label="Address"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <InputField
              name="doctor.registrationNumber"
              label="Registration Number"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <InputField
              name="doctor.experience"
              type="number"
              label="Experience"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <SelectField
              items={Gender}
              name="doctor.gender"
              label="Gender"
              sx={{ mb: 2 }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <InputField
              name="doctor.apointmentFee"
              type="number"
              label="ApointmentFee"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <InputField
              name="doctor.qualification"
              label="Qualification"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <InputField
              name="doctor.currentWorkingPlace"
              label="Current Working Place"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <InputField
              name="doctor.designation"
              label="Designation"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <FileUploader
             name='file' label='File Upload'
              sx={{ mb: 2 ,width:'100%'}}
             
            />
          </Grid>
        </Grid>

        <Button type="submit" fullWidth>Create</Button>
                 </Form>
             </FullScreenModal>
          </div>
    )
}

export default DoctorModal