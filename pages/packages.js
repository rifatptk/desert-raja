import React from 'react'
import PackageHero from '../components/packagesPage/PackageHero'
import SearchBox from '../components/packagesPage/SearchBox'
import ToursCard from '../components/packagesPage/ToursCard'

const packages = () => {
  return (
    <div>
        <PackageHero />
        <SearchBox />
        <div className='w-full h-[1px] bg-brand-light-gray'></div>
        <ToursCard />
    </div>
  )
}

export default packages