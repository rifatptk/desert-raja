import React from 'react'
import Card from '../common/Card'
import Container from '../common/Container'

const ToursCard = () => {

    const data = [
        {
            head:"Travel the untraveled dunesEVENING DESERT SAFARI DUBAI – DESERT RAJA",
            title:"Evening Desert Safari Dubai – Desert Raja",
            text:"Evening Desert Safari Dubai Want to spend a memorable evening in the Dubai Desert with an evening desert safari trip? Why not? After all, it is the center of attraction in the Arabian Desert. Living a night with activities such as Camel ride, sandboarding, henna painting, and Shisha is not less than a beautiful dream […]",
            aed:"AED149",
            img:"/assets/images/packages/packages-1-800x600.webp"
        },
        {
            head:"EVENING DESERT SAFARI DUBAI WITH SELF DRIVEN QUAD IN AN OPEN DESERT – DESERT RAJA",
            title:"Evening Desert Safari Dubai With Self Driven Quad in an OPEN Desert – Desert Raja",
            text:"Evening Desert Safari Dubai Want to spend a memorable evening in the Dubai Desert with an evening desert safari trip? Why not? After all, it is the center of attraction in the Arabian Desert. Living a night with activities such as Camel ride, sandboarding, henna painting, and Shisha is not less than a beautiful dream […]",
            aed:"AED149",
            img:"/assets/images/packages/packages-2-800x600.jpeg"
        },
        {
            head:"EVENING DESERT SAFARI DUBAI W/ QUAD IN FENCED BIG DESERT – DESERT RAJA",
            title:"Evening Desert Safari Dubai w/ Quad in Fenced Big Desert – Desert Raja",
            text:"Evening Desert Safari Dubai Want to spend a memorable evening in the Dubai Desert with an evening desert safari trip? Why not? After all, it is the center of attraction in the Arabian Desert. Living a night with activities such as Camel ride, sandboarding, henna painting, and Shisha is not less than a beautiful dream […]",
            aed:"AED149",
            img:"/assets/images/packages/packages-3-800x600.jpg"
        },
    ]

  return (
    <section>
        <Container>
            <div className='py-[80px]'>
                <div className='mb-[30px]'>
                    <h2 className='text-[24px] font-bold'>3 TOURS FOUND</h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                    {
                        data?.map((item,i)=>{
                            return(
                                <Card key={i} item={item}/>
                            )
                        })
                    }
                </div>

            </div>
        </Container>
    </section>
  )
}

export default ToursCard