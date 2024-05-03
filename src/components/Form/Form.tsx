import { ReactNode } from "react"
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form"

type TResolverProps ={
    resolver?:any
    defaultValues?:Record<string,any>
}


type TFormProps ={
    children:ReactNode
    onSubmit:SubmitHandler<FieldValues>
} & TResolverProps


const Form = ({children,onSubmit,resolver,defaultValues}:TFormProps) => {

     const formConfig:TResolverProps = {}

      if(resolver){
        formConfig['resolver'] = resolver
      }

      if(defaultValues){
        formConfig['defaultValues'] = defaultValues
      }


    const methods = useForm(formConfig)
    const submit:SubmitHandler<FieldValues> = (data) => {
        
        // console.log(data)
        onSubmit(data)
        methods.reset()
    
    }
  return (
    <FormProvider {...methods}>
    <form onSubmit={methods.handleSubmit(submit)}>
      {children}
    </form>
  </FormProvider>
  )
}

export default Form