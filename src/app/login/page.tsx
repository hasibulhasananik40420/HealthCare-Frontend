"use client"

import { userLogin } from "@/services/actions/userLogin"
import { storeUserInfo } from "@/services/auth.services"
import { Box, Container,Grid,Stack, Typography,TextField ,Button } from "@mui/material"
import Link from "next/link"
import { FieldValues } from "react-hook-form"
import { toast } from "sonner"
import { useRouter } from 'next/navigation'
import Form from "@/components/Form/Form"
import InputField from "@/components/Form/InputField"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"





export const validationSchema = z.object({
    email:z.string().email("Please enter a valid email"),
    password:z.string().min(6,"Must be at least 6 characters")
})






const LoginPage = () => {

  const [error, setError] = useState("")

  const router = useRouter()

  
  

  const handleLogin = async(values:FieldValues) => {

   
        //  console.log(values)
    try {

        const res =await userLogin(values)
        // console.log(res)

        if(res?.data?.accessToken){
           toast.success(res?.message,{duration:2000})
          storeUserInfo({accessToken: res?.data?.accessToken})
            router.push("/dashboard")
        }

        else{
          setError(res?.message)
          toast.error(res?.message,{duration:2000})

          // console.log(res)
        }


     
    }
      
    catch (error:any) {
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
                <Typography variant="h6" fontWeight="600" > Login</Typography>
               </Box>

               <Box>
                 

                 <Form onSubmit={handleLogin} resolver={zodResolver(validationSchema)} defaultValues={{
                   email:"",
                   password:""
                 }}>
                 <Grid container spacing={2} my={2}>
               

                  <Grid item md={6} sm={12}>
                  <InputField name="email" label="Email" type="email"  size="small" fullWidth={true} />
                  </Grid>

                  <Grid item md={6} sm={12}>
                  <InputField name="password" label="Password" type="password" size="small" fullWidth={true} />
                  </Grid>


                </Grid>

                <Typography mb={1} component="p" fontWeight="300" textAlign="end" color="red"> Forgot Password </Typography>
                 
                 <Button type="submit" sx={{margin:"10px 0px"}} fullWidth={true}>Login</Button>
                

                 <Typography component="p" fontWeight="300" >Don&apos;t have an account ? <Link className="text-red-400 font-medium" href="/register">Register</Link></Typography>

                 </Form>


               </Box>

           </Stack>
        </Box>
    </Stack>
  </Container>
  )
}

export default LoginPage