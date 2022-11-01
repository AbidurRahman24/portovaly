import React from 'react'
import Catagories from './Catagories'
import Slider from './Slider'
import './Home.css'

const Home = () => {
  return (
    <>
        <section className="home">
            <div className="container d_flex">
                <Catagories />
                {/* <SlideCard /> */}
                <Slider />
            </div>
        </section>
    </>
  )
}

export default Home