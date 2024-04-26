import Container from "../Container/Container"
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";


const Footer = () => {
  return (
    <div className="bg-[#071B3C] py-16">
      <Container>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
           <div>
               <div className="text-[24px] font-medium text-white">logo</div>
                <p className="text-[16px] font-normal leading-6 text-white mt-4">Since 1997, Sano has worked diligently to provide the best in vision services to each patients.</p>
                 
                  <div className="flex gap-4 mt-6">

                     <span className="size-10 rounded-full bg-zinc-100 flex justify-center items-center cursor-pointer hover:translate-y-2 duration-300">
                     <FaInstagram className="size-5"/>
                     </span>

                     <span className="size-10 rounded-full bg-zinc-100 flex justify-center items-center cursor-pointer hover:translate-y-2 duration-300">
                     <FaFacebookF className="size-5"/>
                     </span>

                     <span className="size-10 rounded-full bg-zinc-100 flex justify-center items-center cursor-pointer hover:translate-y-2 duration-300">
                     <FaXTwitter className="size-5"/>
                     </span>

                     <span className="size-10 rounded-full bg-zinc-100 flex justify-center items-center cursor-pointer hover:translate-y-2 duration-300">
                     <FaLinkedinIn className="size-5"/>
                     </span>
                     
                  </div>
          
           </div>


             <div>
                <h1 className="text-[24px] font-medium text-white border-b pb-4">Useful Links</h1>
                  <div className="flex flex-col gap-4 mt-4">

                  <span className="flex gap-2 items-center cursor-pointer">
                 <IoIosArrowForward className="size-4 text-white"/>
                 <p className="text-[16px] font-normal text-white">FAQs</p>
                 </span>

                 <span className="flex gap-2 items-center cursor-pointer">
                 <IoIosArrowForward className="size-4 text-white"/>
                 <p className="text-[16px] font-normal text-white">Blog</p>
                 </span>

                 <span className="flex gap-2 items-center cursor-pointer">
                 <IoIosArrowForward className="size-4 text-white"/>
                 <p className="text-[16px] font-normal text-white">Weekly timetable</p>
                 </span>

                 <span className="flex gap-2 items-center cursor-pointer">
                 <IoIosArrowForward className="size-4 text-white"/>
                 <p className="text-[16px] font-normal text-white">Terms & Conditions</p>
                 </span>

                 


                  </div>
             </div>


             <div>
                <h1 className="text-[24px] font-medium text-white border-b pb-4">Departments</h1>
                  <div className="flex flex-col gap-4 mt-4">

                  <span className="flex gap-2 items-center cursor-pointer">
                 <IoIosArrowForward className="size-4 text-white"/>
                 <p className="text-[16px] font-normal text-white">Rehabilitation</p>
                 </span>

                 <span className="flex gap-2 items-center cursor-pointer">
                 <IoIosArrowForward className="size-4 text-white"/>
                 <p className="text-[16px] font-normal text-white">Laboratory Analysis</p>
                 </span>

                 <span className="flex gap-2 items-center cursor-pointer">
                 <IoIosArrowForward className="size-4 text-white"/>
                 <p className="text-[16px] font-normal text-white">Face Lift Surgery</p>
                 </span>

                 <span className="flex gap-2 items-center cursor-pointer">
                 <IoIosArrowForward className="size-4 text-white"/>
                 <p className="text-[16px] font-normal text-white">Liposuction</p>
                 </span>

                 


                  </div>
             </div>


             <div>
                <h1 className="text-[24px] font-medium text-white border-b pb-4">Contacts</h1>
                  <div className="flex flex-col gap-4 mt-4">

                  <span className="flex gap-2 cursor-pointer">
                  <p className="text-[16px] font-medium text-white">Address:</p>
                 <p className="text-[16px] font-normal text-white">1223 Rajshahi Bangladesh</p>
                 </span>

                 <span className="flex gap-2 cursor-pointer">
                  <p className="text-[16px] font-medium text-white">Email:</p>
                 <p className="text-[16px] font-normal text-white">hasibulhasan40420@gmail.com</p>
                 </span>

                 <span className="flex gap-2 cursor-pointer">
                  <p className="text-[16px] font-medium text-white">Phone:</p>
                 <p className="text-[16px] font-normal text-white">01790170749</p>
                 </span>

                

                 


                  </div>
             </div>





         </div>


         <div className="border-b w-full mt-16">
           
         </div>

          <div className="flex justify-between pt-12">

            <p className="text-[16px] font-normal text-white">Copyright 2024. Design by Laralink</p>

            <span className="size-10 rounded-full bg-zinc-100 flex justify-center items-center cursor-pointer">
                     <MdKeyboardDoubleArrowUp className="size-5"/>
                     </span>

          </div>


      </Container>
    </div>
  )
}

export default Footer