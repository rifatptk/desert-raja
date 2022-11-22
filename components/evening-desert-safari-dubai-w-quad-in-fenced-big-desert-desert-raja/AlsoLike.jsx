import React from 'react'
import {TbClock} from "react-icons/tb"
import {AiTwotoneThunderbolt} from "react-icons/ai"
import {BsFillHeartFill} from "react-icons/bs"
import { useRouter } from 'next/router'

function AlsoLike() {

  const router = useRouter()

  const data = [
    {
      name: 'Evening Desert Safari Dubai With Self Driven Quad in an OPEN Desert – Desert Raja',
      img: '/assets/images/home/overnight-desert-safari-1-740x680.webp',
      aed: 'AED149',
      hours: '7 hours',
      to:"/tour/evening-desert-safari",
    },
    {
      name: 'Morning Desert Safari Dubai – Desert Raja',
      img: '/assets/images/home/overnight-desert-safari-2-740x680.webp',
      aed: 'AED400',
      hours: '12 hours',
      to:"/tour/morning-desert-safari",
    },
    {
      name: 'Overnight Desert Stay Dubai – Desert Raja',
      img: '/assets/images/home/morning-desert-safari-4-740x680.jpg',
      aed: 'AED150',
      hours: '7 hours',
      to:"/tour/overnight-desert-safari",
    },
    {
      name: 'Overnight Romantic Stay',
      img: '/assets/images/home/overnight-desert-safari-3-740x680.webp',
      aed: 'AED400 ',
      hours: '12 hours',
      to:"/tour/overnight-romantic-stay",
    },
  ];

 

  return (
    <div className='md:mb-[70px] lg:mb-[110px] mb-[20px]'>
        <div className='text-center'>
          <h2 className='text-[28px] font-semibold mb-6'>You might also like</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-4'>
          {data?.map((item,index)=>{
            return(
              <div key={index} className='min-h-[365px] border border-brand-light-gray' onClick={()=>router.push(`${item.to}`)}>
                <div className=" overflow-hidden h-[200px] relative">
                  <img src={item.img} alt="" className='w-full h-full transition-all duration-300 hover:scale-110 cursor-pointer'/>
                  <BsFillHeartFill className=' absolute top-5 right-5 text-[25px] text-brand-gray'/>
                </div>
                <div className='p-[15px]'>
                  <h2 className='text-[16px] font-semibold cursor-pointer hover:text-brand-orange hover:underline mb-3'>{item.name}</h2>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <TbClock />
                        <p className='text-[14px] text-[#5e6d77]'>{item.hours}</p>
                    </div>
                    <div className='flex items-center gap-1'>
                      <AiTwotoneThunderbolt className='text-brand'/>
                      <p className='text-[14px] text-[#5e6d77]'>from</p>
                      <h3 className=''>{item.aed}</h3>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default AlsoLike