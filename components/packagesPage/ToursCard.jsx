import React from 'react'
import Card from '../common/Card'
import Container from '../common/Container'

const ToursCard = ({data}) => {
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