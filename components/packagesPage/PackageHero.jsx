import React from 'react'
import Container from "../common/Container"

const PackageHero = () => {
  return (
    <section id='PackageHero' className='h-[350px] overflow-hidden relative'>
    <Container className="h-full">
    <div className='h-[100%] flex items-center justify-center md:justify-start'>
        <h2 className=' z-10 mt-[100px] text-white text-[36px] font-[600]'>Packages</h2>
      </div>
    </Container>
    </section>
  )
}

export default PackageHero