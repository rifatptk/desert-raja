import React from 'react'
import Container from '../common/Container'
// import img1 from "/assets/images/home/overnight-desert-safari-1-740x680.webp"
// import img2 from "/assets/images/home/overnight-desert-safari-2-740x680.webp"
// import img3 from "/assets/images/home/morning-desert-safari-4-740x680.jpg"
// import img4 from "/assets/images/home/overnight-desert-safari-3-740x680.webp"
import HomeSlyder from './HomeSlyder'


const ExploreOurDesert = () => {

    const data = [
        {
            name:"Evening Desert Safari Dubai - Desert Raja",
            img:"/assets/images/home/overnight-desert-safari-1-740x680.webp",
            aed:"AED149 /person",
            unl:"unlimited",
            hours:"7 hours"
        },
        {
            name:"OverNight Desert Safari Dubai - Desert Raja",
            img:"/assets/images/home/overnight-desert-safari-2-740x680.webp",
            aed:"AED400 /person",
            unl:"unlimited",
            hours:"12 hours"
        },
        {
            name:"Morning Desert Safari Dubai - Desert Raja",
            img:"/assets/images/home/morning-desert-safari-4-740x680.jpg",
            aed:"AED150 /person",
            unl:"unlimited",
            hours:"7 hours"
        },
        {
            name:"Overnight Romantic Stay",
            img:"/assets/images/home/overnight-desert-safari-3-740x680.webp",
            aed:"AED400 /person",
            unl:"20 people",
            hours:"12 hours"
        },
    ]


  return (
    <section id='ExploreOurDesert' className=' bg-brand-light-gray py-7'>
        <Container>
            <div>
                <div className=' text-center'>
                    <h3 className='text-[28px] text-brand-dark-blue font-[500]'>Explore our Desert Safari Dubai Deals and Packages</h3>
                    <p className='text-[13px] font-normal'>Looking for the best desert safari in Dubai?… Hang on, and check our Dubai desert safari deals</p>
                </div>
                <HomeSlyder data={data}/>
            </div>
        </Container>
    </section>
  )
}

export default ExploreOurDesert