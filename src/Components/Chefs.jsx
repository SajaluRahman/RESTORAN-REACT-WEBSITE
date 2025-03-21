import React from 'react'
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons";


function Chefs(Props) {
 const [ref5, inView5] = useInView({
      threshold: 0.20, 
      triggerOnce: true,
    });
    const [ref7, inView7] = useInView({
        threshold: 0.20, 
        triggerOnce: true,
      });
   
  return (
    <div>
        
     
            <div
             ref={ref5}
              className={`bg-white shadow-lg rounded-lg overflow-hidden text-center p-2 group  transform ${Props.dly} duration-1000 ease-out transition-all delay-300  ${
        inView5
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-44"
      } ` }
            >
              {/* Chef Image */}
              <div className="relative w-82 h-82 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src={Props.id}
                 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Chef Details */}
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                Full Name
              </h3>
              <p className="text-gray-500 text-sm mb-4">designation</p>

              {/* Social Icons - Hidden Initially */}
              <div className="flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href="#"
                  className="h-16 w-16 flex justify-center items-center text-2xl  text-white rounded-[50%] bg-[#fea116] hover:text-orange-500 transition"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a
                  href="#"
                  className="h-16 w-16 flex justify-center items-center text-2xl  text-white rounded-[50%] bg-[#fea116] hover:text-orange-500 transition"
                >
                 <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  href="#"
                  className="h-16 w-16 flex justify-center items-center text-2xl  text-white rounded-[50%] bg-[#fea116] hover:text-orange-500 transition"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
    

    </div>
  )
}

export default Chefs