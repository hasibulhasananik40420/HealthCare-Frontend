import { USER_ROLE } from "@/contants/role"
import { SvgIconTypeMap } from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent"

export type IMeta ={
    page:number
    limit:number
    total:number
}

export type ResponseSuccessType ={
    data:any
    meta?:IMeta
}

export type IGenericErrorResponse ={
     statusCode:number
     message:string
     errorMessages:IGenericErrorMessage[]
}

export type IGenericErrorMessage ={
    path: string | number
    message:string
}



export type UserRole = keyof typeof USER_ROLE;



export interface TDashboardMenuItems {
    title: string;
    path: string;
    parentPath?: string;
    icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
    child?: TDashboardMenuItems[];
  }

  export const Gender = ["MALE", "FEMALE"];