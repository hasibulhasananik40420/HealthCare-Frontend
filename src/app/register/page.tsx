"use client"

import { registerPatient } from "@/services/actions/registerPatient"
import { modifyPayload } from "@/utils/modifyFormData"
import { Box, Container,Grid,Stack, Typography,TextField ,Button } from "@mui/material"
import Link from "next/link"
import { FieldValues } from "react-hook-form"
import { toast } from "sonner"
import { useRouter } from 'next/navigation'
import { userLogin } from "@/services/actions/userLogin"
import { storeUserInfo } from "@/services/auth.services"
import Form from "@/components/Form/Form"
import InputField from "@/components/Form/InputField"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"

export const patientValidationSchema = z.object({
  name:z.string().min(1,"Name is required"),
  email:z.string().email("Please enter a valid email"),
  contactNumber:z.string().regex(/^\d{11}$/,"Please provide a valid number"),
  address:z.string().min(1,"Please enter your address")

})

export const valodationSchema =z.object({
  password:z.string().min(6,"Must be at least 6 characters"),
  patient:patientValidationSchema
})



export const defaultValues= ({
  password:"",
  patient:{
    name:"",
    email:"",
    contactNumber:"",
    address:""
  }
})



const RegisterPage = () => {


 const [error, setError]= useState("")

    const router = useRouter()

  const handleRegister = async(values:FieldValues) => {

     const data = modifyPayload(values)
    // console.log(data)


     try {

       const res = await registerPatient(data)
      //  console.log(res)

        if(res?.data?.id){
          toast.success(res?.message,{duration:2000})
           
          // auto login

          const userRes =await userLogin({password:values.password, email:values.patient.email})
          // console.log(res)
  
          if(userRes?.data?.accessToken){
            
            storeUserInfo({accessToken: userRes?.data?.accessToken})
              router.push("/dashboard")
          }


        }


        else{
          setError(res?.message)
          // console.log(res)
          toast.error('Something went wrong',{duration:2000})
        }

       
     } catch (error:any) {
      console.error(error.message)
     }

      
  }





  return (
    <Container>
      <Stack sx={{justifyContent:"center", alignItems:"center", height:"100vh"}}>
          <Box sx={{maxWidth:600, width:"100%", boxShadow:1, borderRadius:1, p:4, textAlign:"center",}}>
             <Stack sx={{justifyContent:"center", alignItems:"center"}}>
                 <Box>
                     image added
                 </Box>

                 <Box>
                  <Typography variant="h6" fontWeight="600" >patient Register</Typography>
                 </Box>

                 <Box>
                   

                   <Form onSubmit={handleRegister} resolver={zodResolver(valodationSchema)} defaultValues={defaultValues}>
                   <Grid container spacing={2} my={3}>
                    <Grid item md={12}>
                    <InputField label="Name" type="text" size="small" fullWidth={true} name="patient.name"/>
                    </Grid>

                    <Grid item md={6} sm={12}>
                    <InputField label="Email" type="email" size="small" fullWidth={true} name="patient.email"/>
                    </Grid>

                    <Grid item md={6} sm={12}>
                    <InputField label="Password" type="password"  size="small" fullWidth={true} name="password" />
                    </Grid>



                    <Grid item md={6} sm={12}>
                    <InputField label="Contact Number" type="tel" size="small" fullWidth={true} name="patient.contactNumber"/>
                    </Grid>

                    <Grid item md={6} sm={12}>
                    <InputField label="Address" type="text" size="small" fullWidth={true} name="patient.address" />
                    </Grid>




                  </Grid>
                   
                   <Button type="submit" sx={{margin:"10px 0px"}} fullWidth={true}>Register</Button>

                   <Typography component="p" fontWeight="300" >Allready have an account ? <Link className="text-red-400 font-medium" href="/login">login</Link></Typography>

                   </Form>


                 </Box>

             </Stack>
          </Box>
      </Stack>
    </Container>
  )
}

export default RegisterPage