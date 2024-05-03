import { SxProps, TextField } from "@mui/material"
import { Controller, useFormContext } from "react-hook-form"

type TInputProps ={
    name:string
    label?:string
    type?:string
    size?: "small" | "medium" 
    fullWidth?:boolean
    sx?:SxProps
    placeholder?:string
    required?:boolean

}

const InputField = ({name,label,type,size,fullWidth,sx,placeholder,required}:TInputProps) => {
     const {control} = useFormContext()
  return (
    <Controller
    control={control}
    name={name}
    render={({ field , fieldState:{error}}) => (
        <TextField {...field} sx={{...sx}}  placeholder={label} required={required} label={label} type="text" variant="outlined" size={size} fullWidth={fullWidth} error={!!error?.message} helperText={error?.message}/>
    )}
  />
  )
}

export default InputField