import React from 'react'
import { twMerge } from 'tailwind-merge'

interface TrafficSourceCardProps{
    className?:string;
}

const TrafficSourceCard = ({className}:TrafficSourceCardProps) => {


  const tabs=[
    {
      label:'Impressions'
    },
    {
      label:'Visitors'
    },
    {
      label:'Website conversions'
    },
    {
      label:'Orders'
    }
  ]

  return (
    <article className={twMerge("bg-white p-6 border drop-shadow-[0px_1px_2px_rgba(16,24,40,0.06),0px_1px_3px_rgba(16,24,40,0.10)] border-gray-200 rounded-lg flex flex-col gap-4", className)}>
       <h3 className='text-d-xs-medium text-gray-900'>Traffic source</h3>
    </article>
  )
}

export default TrafficSourceCard