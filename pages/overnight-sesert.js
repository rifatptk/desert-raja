import React from 'react'
import PackageHero from '../components/packagesPage/PackageHero'
import SearchBox from '../components/packagesPage/SearchBox'
import TestButton from '../components/packagesPage/TestButton'
import ToursCard from '../components/packagesPage/ToursCard'

const OverNight = () => {

    const data = [
        {
            head:"OVERNIGHT DESERT STAY DUBAI – DESERT RAJA",
            title:"Overnight Desert Stay Dubai – Desert Raja",
            text:"Best Overnight Safari Dubai The stunning desert safari in Dubai with the majestic sand dunes, private tent, a camel ride, and an overnight stay make the Overnight Desert Safari in Dubai one of the most fulfilling Arabian adventures. Lasting for over 12 hours, the safari instills numerous fun activities starting from dune bashing on the […]",
            aed:"AED400",
            img:"/assets/images/packages/overnight-desert-safari-2-800x600.webp",
            horus:"12 hours",
            limit:"Unlimited",
            to:"/tour/overnight-desert-safari"
        },
        {
            head:"OVERNIGHT ROMANTIC STAY",
            title:"Overnight Romantic Stay",
            text:"Overnight Romantic Desert Stay in Dubai Overview Timings: 07:30 PM to 08:30 AM Batch size: 30 to 35 passengers in SIC / 6 to 7 passengers in 4*4 Pick-up/ Drop locations: Free 4*4 Pick-up Round trip transfers from hotel in a 4 *4. Grab an experience to spend a night in the grandiose Red Dunes of Dubai, […]",
            aed:"AED400",
            img:"/assets/images/packages/overnight-desert-safari-4-800x600.webp",
            horus:"12 hours",
            limit:"20 people",
            to:"/tour/overnight-romantic-stay"
        },
    ]

  return (
    <div>
        <PackageHero />
        {/* <SearchBox /> */}
        <div className='w-full h-[1px] bg-brand-light-gray'></div>
        <ToursCard data={data}/>
    </div>
  )
}

export default OverNight