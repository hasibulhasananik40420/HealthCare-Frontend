import Container from "@/components/shared/Container/Container"
import { Button } from "@mui/material"

import Image from "next/image"


type Tspecialtie = {
      id:string
      title:string
      icon:string
}


const Specialist =async () => {

    const res = await fetch("http://localhost:5000/api/v1/specialties",{
      next:{
            revalidate:30
      }
    })

    const {data:specialties} = await res.json()
//     console.log(specialties)
     




  return (
     <Container>
        <div className="py-20 ">
        <div className="bg-[url('https://prohealth-nextjs.vercel.app/images/home_1/department_bg.svg')] object-cover h-[350px] rounded-xl  z-50">
                <h1 className="text-[42px] text-center pt-24 font-bold text-white">Explore Specialist</h1>
            </div>





           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-2 px-6 justify-items-center mt-[-100px] z-50">


             {
                 specialties?.map((specialtie:Tspecialtie)=>  <>
                 
                 <div key={specialtie.id} className="w-[180px] h-[200px] rounded-md shadow flex flex-col gap-4 items-center justify-center cursor-pointer duration-300 bg-white hover:border hover:border-[#ABD2F0] hover:translate-x-2">
                  <Image className=" object-cover" src={specialtie.icon} alt="specialties icon" width={100} height={50} />

                   <h3 className="text-[20px] font-semibold">{specialtie.title}</h3>
             </div>
                 
                 </>) 
             }


           
           </div>

            <div className="flex justify-center mt-10">
            <Button variant="outlined">View All</Button>
            </div>

           












        </div>
     </Container>
  )
}

export default Specialist