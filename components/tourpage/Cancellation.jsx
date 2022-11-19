import React from 'react'

const Cancellation = () => {
  return (
    <div className='my-8'>
        <h2 className='text-[24px] font-bold mb-5'>
            Cancellation Policy
        </h2>
        <p className='text-[14px] mb-5'>You can cancel up to 24 hours in advance of the experience for a full refund.</p>
        <ul className="text-[14px] ml-8">
          <li className="mb-4">
            <img
              src="/assets/images/tour/2705.svg"
              alt=""
              className="w-[14px] h-[14px] inline-block"
            />{" "}
            For a full refund, you must cancel at least 24 hours before the experience’s start time.
          </li>
          <li className="mb-4">
            <img
              src="/assets/images/tour/2705.svg"
              alt=""
              className="w-[14px] h-[14px] inline-block"
            />{" "}
             If you cancel less than 24 hours before the experience’s start time, the amount you paid will not be refunded.
          </li>
          <li className="mb-4">
            <img
              src="/assets/images/tour/2705.svg"
              alt=""
              className="w-[14px] h-[14px] inline-block"
            />{" "}
             Any changes made less than 24 hours before the experience’s start time will not be accepted.
          </li>
          <li className="mb-4">
            <img
              src="/assets/images/tour/2705.svg"
              alt=""
              className="w-[14px] h-[14px] inline-block"
            />{" "}
             Cut-off times are based on the experience’s local time.
          </li>
          <li className="mb-4">
            <img
              src="/assets/images/tour/2705.svg"
              alt=""
              className="w-[14px] h-[14px] inline-block"
            />{" "}
            This experience requires good weather. If it’s canceled due to poor weather, you’ll be offered a different date or a full refund.
          </li>
        </ul>
        <p className='text-[14px] mb-5'>Contact us for more informations.</p>
    </div>
  )
}

export default Cancellation