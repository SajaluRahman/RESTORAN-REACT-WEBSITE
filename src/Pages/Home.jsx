import React, { useEffect, useState }  from 'react'
import Nav from '../Components/Nav'
import img1 from '../Images/hero.png'

import { useInView } from "react-intersection-observer";
import Box from '../Components/Box'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Footer from '../Components/Footer'
import Abouts from '../Components/Abouts'
import Chefs from '../Components/Chefs';

import team1 from '../Images/team-1.jpg'
import team2 from '../Images/team-2.jpg'
import team3 from '../Images/team-3.jpg'
import team4 from '../Images/team-4.jpg'
import Menus from '../Components/Menus';
import Book from '../Components/Book';
import Testi from '../Components/Testi';
import { Link } from 'react-router-dom';



function Home() {
   
  const [show, setShow] = useState(false);
    useEffect(() => {
      // Trigger the animation after the component mounts
      const timer = setTimeout(() => setShow(true), 100); // Add slight delay for smoother effect
      return () => clearTimeout(timer); // Cleanup if component unmounts
    }, []);

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const [ inView] = useInView({
      threshold: 0.20, 
    });
   

  
    

   // Function to animate the count
   const animateCount1 = () => {
    if (inView && count1 < 50) {
      const interval = setInterval(() => {
        setCount1((prevCount) => {
          if (prevCount < 50) {
            return prevCount + 1;
          } else {
            clearInterval(interval);
            return prevCount;
          }
        });
      }, 30);
    }
  };

  

  const animateCount2 = () => {
    if (inView && count2 < 15) {
      const interval = setInterval(() => {
        setCount2((prevCount) => {
          if (prevCount < 15) {
            return prevCount + 1;
          } else {
            clearInterval(interval);
            return prevCount;
          }
        });
      }, 100); 
    }
  };

  useEffect(() => {
    animateCount1();
    animateCount2(); 
    return () => {
      setCount1(0);
      setCount2(0); 
    };
  }, [inView]);




  
  return (
    
    <div className='overflow-x-hidden'>
       
        <div className=" text-white">
    
      <section
        className="bg-cover bg-center relative "
        style={{backgroundImage:"url('src/Images/bg-hero.jpg')", }} >
        
        <div className="bg-[#0F172B] bg-opacity-90 h-full">
        <Nav/>
          <div className="container mx-auto px-6 py-2 flex flex-col-reverse lg:flex-row items-center">
           
          <div
      className={`lg:w-1/2 transform duration-1000 ease-out transition-all ${
        show
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-44"
      }`}>

              
              <h1 
             
              className={`lg:text-8xl text-5xl font-bold mb-4  ` }>
                Enjoy Our Delicious Meal
              </h1>
              <p className="lg:text-2xl mb-6 leading-relaxed">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
                lorem sit clita duo justo magna dolore erat amet.
              </p>
              <a href="#"className="bg-yellow-500 hover:bg-yellow-600 text-white lg:px-20 mt-6  lg:py-6 lg:text-3xl text-xl py-3 px-3 rounded-lg font-semibold">
              <Link to={'Booking'}> Book a Table</Link>
              </a>
            </div>
           
            <div className={`lg:w-1/2 flex justify-center transform duration-1000 ease-out transition-all overflow-hidden ${
        show
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-44"
      } `}>
              <img
                src={img1}
                
                className="rounded-lg  animate-[spin_40s_linear_infinite] " 
              />
            </div>
          </div>
        </div>
      </section>
    </div>

    <div className="bg-gray-50 py-12">
    <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<Box id="👨‍🍳"  className="Master Chefs" dly="delay-[200ms]"/>
<Box id="🍴 " className="Quality Food" dly="delay-[400ms]"/>
<Box id="🛒 " className="Online Order" dly="delay-[600ms]"/>
<Box id=" 🎧" className="24/7 Service" dly="delay-[800ms]"/>
</div>
</div>

<Abouts/>
    
    <Menus/>

    <Book/>
    <section  className={`py-28 bg-gray-100 `}>
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
 
    
    
       <Testi/>



    
     <Footer/>


    </div>
  )
}

export default Home