import React, { useEffect, useState }  from 'react'
import Nav from './Nav'

 


function Head(Props) {
    const [show, setShow] = useState(false);

    useEffect(() => {
      // Trigger the animation after the component mounts
      const timer = setTimeout(() => setShow(true), 100); // Add slight delay for smoother effect
      return () => clearTimeout(timer); // Cleanup if component unmounts
    }, []);
  return (
    <div>
        <div>
         
          <div className='bg-cover bg-center relative h-[60vh] ' style={{
          backgroundImage:
            "url('src/Images/bg-hero.jpg')",
        }}>
            <section
        className="bg-[#0F172B] bg-opacity-90 h-full"
        
      >
      
      <Nav/>

      
      
        
        

        
        <div className=" text-center text-white flex flex-col justify-center items-center h-2/4 z-10">
          <h1 className={` text-6xl sm:text-8xl font-bold mb-4 transform duration-1000 ease-out transition-all overflow-hidden ${
        show
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-44"
      }  `}>{Props.id}</h1>
          <nav>
            <ul className="flex justify-center space-x-4 text-lg">
              <li>
                <a href="#" className=" text-orange-500">
                  HOME
                </a>
              </li>
              <li>/</li>
              <li>
                <a href="#" className="text-orange-500">
                  PAGES
                </a>
              </li>
              <li>/</li>
              <li >{Props.id}</li>
            </ul>
          </nav>
        </div>
      </section>
    </div>
        </div>
    </div>
  )
}

export default Head