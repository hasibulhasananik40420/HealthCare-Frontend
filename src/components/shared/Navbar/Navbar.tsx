"use client"

import { Stack, Typography } from "@mui/material"
import Link from "next/link"
import Container from "../Container/Container"

import dynamic from "next/dynamic";


const Navbar = () => {
  const AuthButton = dynamic(() => import('@/components/ui/AuthButton/AuthButton'), { ssr: false })

  return (
    <Container>
        <Stack py={2} direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h4" component="h1" fontSize={48} fontWeight={700}>Easmin-Center</Typography>
        
        
         <Stack direction="row" justifyContent="space-between" alignItems="center" gap={4}>
         <Typography component={Link} href="/consultation" >Consultation</Typography>
         <Typography  component={Link} href="/health-plans">Health Plans</Typography>
         <Typography component={Link} href="/medicine">Medicine</Typography>
         <Typography component={Link} href="/diagnostics">Diagnostics</Typography>
         <Typography component={Link} href="/ngos">NGOs</Typography>
         <Typography component={Link} href="/dashboard">Dashboard</Typography>
          
         </Stack>

         <AuthButton/>


        
      </Stack>
    </Container>
  )
}

export default Navbar