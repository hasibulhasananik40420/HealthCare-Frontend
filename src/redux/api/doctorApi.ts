import { IMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";
import { IDoctor } from "@/types/doctor";




const doctorApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createDoctor: build.mutation({
      query: (data) => ({
            url:'/user/create-doctor',
            method:'POST',
            contentType:'multipart/form-data',
            data
      }),
      invalidatesTags:[tagTypes.doctor]
    }),

    getAllDoctor: build.query({
        query: () => ({
              url:'/doctor',
              method:'GET',
              
        }),
        transformResponse:(response:IDoctor[], meta:IMeta)=>{

        },
        providesTags:[tagTypes.doctor]
      }),

   
    

    
  







  }),
 

})


export const { useCreateDoctorMutation} = doctorApi
