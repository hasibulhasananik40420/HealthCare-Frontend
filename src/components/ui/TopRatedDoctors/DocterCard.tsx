import { Button } from "@mui/material"
import Image from "next/image"
import { CiLocationOn } from "react-icons/ci";


const DocterCard = ({doctor}:any) => {
  // console.log(doctor)

  return (
    <div className="w-[300px]  bg-white rounded-xl shadow ">

    <div className="w-full p-3">
    <Image className="rounded-md w-full h-[210px] object-cover" src={doctor?.profilePhoto} alt="docter image" width={300} height={210} blurDataURL="blur"/>
    </div>

     <div className="px-3">
     <h3 className="text-[24px] font-semibold">{doctor?.name}</h3>
     <p className="text-[16px] font-normal">{doctor?.qualification}, {doctor?.designation}</p>
     </div>

      <div className="px-2">
        <span className="flex gap-2 items-center mt-1">
         <CiLocationOn className="size-4"/>
          <p className="text-[12px] font-normal">{doctor?.address}</p>
        </span>
      </div>

      <div className="flex justify-between items-center px-3 mt-8 mb-3">
        <Button variant="contained" size="small">Book Now</Button>
        <Button variant="outlined" size="small">View Profile</Button>
      </div>
     
     
  </div>
  )
}

export default DocterCard