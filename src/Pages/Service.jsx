import React from 'react'
import Footer from '../Components/Footer'
import Head from '../Components/Head'
import Box from '../Components/Box'

function Service() {
  return (
    <div>
      
      <Head id=' Service'/>
      <div className="bg-gray-50 py-12">
    <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<Box id="👨‍🍳"  className="Master Chefs" dly="delay-[200ms]"/>
<Box id="🍴 " className="Quality Food" dly="delay-[400ms]"/>
<Box id="🛒 " className="Online Order" dly="delay-[600ms]"/>
<Box id=" 🎧" className="24/7 Service" dly="delay-[800ms]"/>
</div>
</div>

      <div className="bg-gray-50 py-12">
    <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<Box id="👨‍🍳"  className="Master Chefs" dly="delay-[200ms]"/>
<Box id="🍴 " className="Quality Food" dly="delay-[400ms]"/>
<Box id="🛒 " className="Online Order" dly="delay-[600ms]"/>
<Box id=" 🎧" className="24/7 Service" dly="delay-[800ms]"/>
</div>
</div>
      
      <Footer/>
      </div>
  )
}

export default Service