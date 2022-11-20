import React from 'react'
import PackageHero from '../components/packagesPage/PackageHero'
import SearchBox from '../components/packagesPage/SearchBox'
import TestButton from '../components/packagesPage/TestButton'
import ToursCard from '../components/packagesPage/ToursCard'

const packages = () => {

  const data = [
    {
        head:"Travel the untraveled dunesEVENING DESERT SAFARI DUBAI – DESERT RAJA",
        title:"Evening Desert Safari Dubai – Desert Raja",
        text:"Evening Desert Safari Dubai Want to spend a memorable evening in the Dubai Desert with an evening desert safari trip? Why not? After all, it is the center of attraction in the Arabian Desert. Living a night with activities such as Camel ride, sandboarding, henna painting, and Shisha is not less than a beautiful dream […]",
        aed:"AED149",
        img:"/assets/images/packages/packages-1-800x600.webp",
        horus:"7 hours",
        limit:"Unlimited",
        to:"/tour/evening-desert-safari"
    },
    {
        head:"EVENING DESERT SAFARI DUBAI WITH SELF DRIVEN QUAD IN AN OPEN DESERT – DESERT RAJA",
        title:"Evening Desert Safari Dubai With Self Driven Quad in an OPEN Desert – Desert Raja",
        text:"Evening Desert Safari Dubai Want to spend a memorable evening in the Dubai Desert with an evening desert safari trip? Why not? After all, it is the center of attraction in the Arabian Desert. Living a night with activities such as Camel ride, sandboarding, henna painting, and Shisha is not less than a beautiful dream […]",
        aed:"AED149",
        img:"/assets/images/packages/packages-2-800x600.jpeg",
        horus:"7 hours",
        limit:"Unlimited",
        to:"/tour/evening-desert-safari-dubai-with-self-driven-quad"
    },
    {
        head:"EVENING DESERT SAFARI DUBAI W/ QUAD IN FENCED BIG DESERT – DESERT RAJA",
        title:"Evening Desert Safari Dubai w/ Quad in Fenced Big Desert – Desert Raja",
        text:"Evening Desert Safari Dubai Want to spend a memorable evening in the Dubai Desert with an evening desert safari trip? Why not? After all, it is the center of attraction in the Arabian Desert. Living a night with activities such as Camel ride, sandboarding, henna painting, and Shisha is not less than a beautiful dream […]",
        aed:"AED149",
        img:"/assets/images/packages/packages-3-800x600.jpg",
        horus:"7 hours",
        limit:"Unlimited",
        to:"/tour/evening-desert-safari-dubai-w-quad-in-fenced-big-desert-desert-raja"
    },
]

  return (
    <div>
        <PackageHero />
        <SearchBox />
        <div className='w-full h-[1px] bg-brand-light-gray'></div>
        <ToursCard data={data}/>
        {/* <TestButton /> */}
    </div>
  )
}

export default packages