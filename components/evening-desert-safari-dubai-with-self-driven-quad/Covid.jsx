import React from 'react'

const Covid = () => {
  return (
    <div className='my-8'>
        <h2 className='text-[24px] font-bold mb-5'>
        Covid-19 Precautions
        </h2>
        <p className='text-[14px] mb-5'>You must book this activity online because the ticket office is closed</p>
        <p className='text-[14px] mb-5'>Safety measures in place</p>
        <ul className="text-[14px] ml-8">
          <li className="mb-4">
            <img
              src="/assets/images/tour/2705.svg"
              alt=""
              className="w-[14px] h-[14px] inline-block"
            />{" "}
            We’re enforcing extra health and safety measures for GetYourGuide Originals
          </li>
          <li className="mb-4">
            <img
              src="/assets/images/tour/2705.svg"
              alt=""
              className="w-[14px] h-[14px] inline-block"
            />{" "}
             All areas that customers touch are frequently cleaned
          </li>
          <li className="mb-4">
            <img
              src="/assets/images/tour/2705.svg"
              alt=""
              className="w-[14px] h-[14px] inline-block"
            />{" "}
              You must keep social distance while in vehicles
          </li>
          <li className="mb-4">
            <img
              src="/assets/images/tour/2705.svg"
              alt=""
              className="w-[14px] h-[14px] inline-block"
            />{" "}
              The number of visitors is limited to reduce crowds
          </li>
        </ul>
        <p className='text-[14px] mb-5'>Traveler requirements</p>
        <ul className="text-[14px] ml-8">
          <li className="mb-4">
            <img
              src="/assets/images/tour/2705.svg"
              alt=""
              className="w-[14px] h-[14px] inline-block"
            />{" "}
            You are required to bring and wear a mask
          </li>
          <li className="mb-4">
            <img
              src="/assets/images/tour/2705.svg"
              alt=""
              className="w-[14px] h-[14px] inline-block"
            />{" "}
             You will receive a mandatory temperature check
          </li>
        </ul>
    </div>
  )
}

export default Covid