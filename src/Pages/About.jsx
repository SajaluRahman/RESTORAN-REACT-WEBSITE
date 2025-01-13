import React from 'react'

import Footer from '../Components/Footer'
import Head from '../Components/Head'
import Abouts from '../Components/Abouts'
import Chefs from '../Components/Chefs'
import team1 from '../Images/team-1.jpg'
import team2 from '../Images/team-2.jpg'
import team3 from '../Images/team-3.jpg'
import team4 from '../Images/team-4.jpg'

function About() {
  return (
    <div>
      <Head id='About us'/>
     <Abouts/>
     <section  className={`py-16 bg-gray-100 `}>
      <div className="max-w mx-auto px-16">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h3 className="text-orange-500 text-lg font-semibold mb-2">
            Team Members
          </h3>
          <h2 className="text-4xl font-bold text-gray-800">Our Master Chefs</h2>
        </div>

        {/* Chef Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
          
    
  <Chefs id={team1} dly="delay-[200ms]"/>
  <Chefs id={team2} dly="delay-[400ms]"/>
  <Chefs id={team3} dly="delay-[500ms]"/>
  <Chefs id={team4} dly="delay-[600ms]"/>
        
  </div>
      </div>
    </section>
      
      
      <Footer/>
      </div>
  )
}

export default About