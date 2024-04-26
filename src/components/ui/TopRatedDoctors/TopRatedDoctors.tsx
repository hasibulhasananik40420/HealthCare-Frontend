import Container from "@/components/shared/Container/Container"
import { Button } from "@mui/material"
import DocterCard from "./DocterCard"

const TopRatedDoctors = async() => {
  const res = await fetch("http://localhost:5000/api/v1/doctor?page=1&limit=4")
  const {data:doctors} = await res.json()
  //  console.log(doctors)
  


  return (
    <div className="py-20 bg-slate-100">
        <Container>
             <p className="text-[20px] font-normal text-center ">Our Team</p>
             <h1 className="text-[40px] font-bold text-center mt-2">Meet Our Experienced Doctors
               For The Best Treatment</h1>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mt-16">



               {
                 doctors?.map((doctor:any)=> <DocterCard key={doctor.id} doctor={doctor}/>)
               }



             </div>

             <div className="flex justify-center mt-10">
            <Button variant="outlined">View All</Button>
            </div>
        </Container>
    </div>
  )
}

export default TopRatedDoctors