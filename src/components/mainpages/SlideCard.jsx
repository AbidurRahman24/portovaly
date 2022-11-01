import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import Sdata from './Sdata';

const SlideCard = () => {

  return (
    <>
     
     <Carousel >
        {
          Sdata.map((data) => {
            return(
            <div key={data.id} >
              <img  src={data.cover} />
              <div className='carouselText'>
              <p className="legend">{data.title}</p>
              </div>
            </div>
            )
            
          })
        }
        </Carousel>
    </>
  )
}

export default SlideCard