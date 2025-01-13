import React from 'react'
import { BrowserRouter as  Router, Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Service from './Pages/Service'
import Menu from './Pages/Menu'
import Booking from './Pages/Booking'
import OurTeam from './Pages/OurTeam'
import Testimonial from './Pages/Testimonial'
import Contatc from './Pages/Contatc'

function App() {
  return (
    <div>

      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Service' element={<Service/>}/>
          <Route path='/Menu' element={<Menu/>}/>
          <Route path='/Booking' element={<Booking/>}/>
          <Route path='/OurTeam' element={<OurTeam/>}/>
          <Route path='/Testimonial' element={<Testimonial/>}/>
          <Route path='/Contatc' element={<Contatc/>}/>
        </Routes>
      </Router>

    </div>
  )
}

export default App