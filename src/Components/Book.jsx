import React from 'react'
import { useInView } from "react-intersection-observer";


function Book() {

     const [ref4, inView4] = useInView({
          threshold: 0.20, 
          triggerOnce: true,
        });
  return (
    <div><section
    ref={ref4} className={` min-h-screen lg:h-screen flex items-center justify-center transform duration-1000 ease-out transition-all overflow-hidden ${
        inView4
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-44"
      } `}>
      <div className="w-full grid h-[80%]  grid-cols-1 lg:grid-cols-2">
       
        <div className="relative h-full">
          <img
            src="src/Images/video.jpg"
            alt="Dining"
            className="w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-[#fea116] text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 3.293a1 1 0 011.414 0l8 8a1 1 0 010 1.414l-8 8a1 1 0 11-1.414-1.414L11.586 10 4.293 4.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Right Side: Booking Form */}
        <div className="bg-gray-900 text-white p-8 lg:p-12">
          <div className={`transform duration-1000 ease-out transition-all delay-300 overflow-hidden ${
        inView4
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-44"
      } `}>

          <p className='text-[#fea116] text-2xl'>Reservation</p>
          <h2 className="text-6xl font-bold mb-6">Book A Table Online</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-8 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#fea116]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-8 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#fea116]"
              />
            </div>  

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="datetime-local"
                placeholder="Date & Time"
                className="w-full p-8 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#fea116]"
              />
              <select
                className="w-full p-8 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#fea116]"
              >
                <option>No Of People</option>
                <option>People 1</option>
                <option>People 2</option>
                <option>People 3</option>
                <option>People 4</option>
              </select>
            </div>

            <textarea
              placeholder="Special Request"
              rows="4"
              className="w-full p-8  rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#fea116]"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#fea116] hover:bg-orange-500 text-white font-bold py-3 rounded transition duration-300"
            >
              BOOK NOW
            </button>
          </form>

          </div>
        </div>
      </div>
    </section></div>
  )
}

export default Book