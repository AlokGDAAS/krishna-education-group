import React from 'react'
import Main_slider_1 from '../components/ImageSlider'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div>
        <Main_slider_1/>
        <Hero/>
        <div className='text-center text-white text-lg py-4 font-semibold '>
            <p>Please Choose an  options given above to know about Exanations Details</p>
        </div>
    </div>
  )
}

export default Home