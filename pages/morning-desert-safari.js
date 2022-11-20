import React from 'react'
import PackageHero from '../components/packagesPage/PackageHero'
import SearchBox from '../components/packagesPage/SearchBox'
import TestButton from '../components/packagesPage/TestButton'
import ToursCard from '../components/packagesPage/ToursCard'


function Morning() {

    const data = [
        {
            head:"Travel the untraveled dunesMORNING DESERT SAFARI DUBAI – DESERT RAJA",
            title:"Morning Desert Safari Dubai – Desert Raja",
            text:"Morning Desert Safari Dubai Excitement knows no bounds in the Arab sands as you set out on an adventure so enthralling and memorable. What better way to spend a morning in the beautiful city of Dubai than opt for the desert safari? If you’re touring Dubai, the morning desert safari is one experience you simply […]",
            aed:"AED150",
            img:"/assets/images/packages/morning-desert-safari-4-740x680.jpg",
            horus:"7 hours",
            limit:"Unlimited",
            to:"/tour/morning-desert-safari"
        },
    ]

  return (
    <div>
        <PackageHero />
        <SearchBox />
        <div className='w-full h-[1px] bg-brand-light-gray'></div>
        <ToursCard data={data}/>
    </div>
  )
}

export default Morning