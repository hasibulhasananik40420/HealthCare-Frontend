"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { Typography } from '@mui/material';
import Link from 'next/link';
import { dashboardMenuItems } from '@/utils/dashboardMenuItems';
import { UserRole } from '@/types';
import SidebarItem from './SidebarItem';
import { getUserInfo } from "@/services/auth.services";






const SidebarItems = () => {
   const [userRole, setUserRole] = React.useState("")
        
   React.useEffect(()=>{
    const userInfo = getUserInfo() as any
    // console.log(userInfo)
    setUserRole(userInfo?.role)  
   },[])
    
 

    return (
      <Box>
        <Box component={Link} href='/'>  
        
        <Typography my={2}>LOGO</Typography>
        </Box>
     
     

        <List>
            {dashboardMenuItems(userRole as UserRole).map((item, index) => (
             <SidebarItem key={index} item={item}/>
            ))}
          </List>
        



      </Box>
    )
  }
  
  export default SidebarItems