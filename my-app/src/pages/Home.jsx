import React from 'react'
import Hero_2 from '../components/Hero_2'
import Courses from '../components/Courses'
import VisionMission from '../components/VisionMission'
import Pcspre2025q from '../components/Pcspre2025q'

const Home = () => {
  return (
    <div>
      <Hero_2/>
      {/* <Pcspre2025q/> */}
      <Courses/>
      <VisionMission/>

    </div>
  )
}

export default Home
