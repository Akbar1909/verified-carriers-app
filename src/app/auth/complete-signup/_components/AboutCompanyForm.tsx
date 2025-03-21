import Button from '@/components/Button';
import RichText from '@/components/RichText';
import React from 'react'
import { Controller, useForm } from 'react-hook-form'

interface AboutCompanyFormProps{
    nextStep:(nextStep?:number)=>void
}

const AboutCompanyForm = ({nextStep}:AboutCompanyFormProps) => {

  const {handleSubmit, control} = useForm();

  const onSubmit=handleSubmit(()=>{
    nextStep(2)
  })

  return (
    <form onSubmit={onSubmit} className='flex flex-col gap-6'>
        <Controller control={control} name='' render={({field})=><RichText/>} />
        <Button size='lg' fullWidth> Continue </Button>
    </form>
  )
}

export default AboutCompanyForm