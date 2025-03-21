

import React from 'react'
import { useInView } from "react-intersection-observer";




function Box( Props) {
      
  const [ref, inView] = useInView({   
    threshold: 0.10, 
    triggerOnce: true,
  });    
  
  return (
    <div>
      
       
          <div
            ref={ref}
            className={`group bg-white border border-gray-200 rounded-lg shadow-md p-16  hover:bg-yellow-400 hover:text-white overflow-hidden  ${Props.dly} opacity-0 transform duration-700 ease-out transition-all ${inView? "opacity-100 translate-y-0" : "translate-y-80" }`}
          >
           
            <div className="text-yellow-500 text-6xl mb-4 group-hover:text-white ">
            {Props.id}
              
            </div>
            
            <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-white">
           {Props.className}
            </h3>
            
            <p className="text-xl text-gray-600 group-hover:text-white mt-2">
              Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
                          </p>
          </div>
    
      </div>
 
  )
}

export default Box 