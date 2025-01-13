import React, { useEffect, useState } from "react";
import img2 from "../Images/about-1.jpg";
import img3 from "../Images/about-2.jpg";
import img4 from "../Images/about-3.jpg";
import img5 from "../Images/about-4.jpg";
import { useInView } from "react-intersection-observer";

function Abouts() {

  
  const [ref1, inView1] = useInView({
    threshold: 0.2,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.2,
  });

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    let interval1;
    if (inView1 && count1 < 50) {
      interval1 = setInterval(() => {
        setCount1((prevCount) => {
          if (prevCount < 50) return prevCount + 1;
          clearInterval(interval1);
          return prevCount;
        });
      }, 30);
    }

    return () => clearInterval(interval1); 
  }, [inView1]);

  useEffect(() => {
    let interval2;
    if (inView2 && count2 < 15) {
      interval2 = setInterval(() => {
        setCount2((prevCount) => {
          if (prevCount < 15) return prevCount + 1;
          clearInterval(interval2);
          return prevCount;
        });
      }, 100);
    }

    return () => clearInterval(interval2); 
  }, [inView2]);

  return (
    <div>
      <section>
        <div className="bg-white py-12">
          <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-8">
          
            <div className="grid grid-cols-2 gap-4 w-full lg:w-1/2">
              <img
                ref={ref1}
                src={img2}
                className={`w-full transition-transform ease-in-out delay-200 overflow-hidden duration-[240ms] shadow-2xl ${
                  inView1 ? "scale-100" : "scale-50"
                }`}
                alt="About 1"
              />
              <img
                src={img3}
                className={`sm:w-4/5 w-3/4 mt-auto transition-transform ease-in-out delay-300 overflow-hidden duration-[700ms] shadow-2xl ${
                  inView1 ? "scale-100" : "scale-50"
                }`}
                alt="About 2"
              />
              <img
                src={img4}
                className={`sm:w-4/5 w-3/4 ml-auto transition-transform delay-500 ease-in-out overflow-hidden duration-[900ms] ${
                  inView1 ? "scale-100" : "scale-50"
                }`}
                alt="About 3"
              />
              <img
                src={img5}
                className={`w-full transition-transform ease-in-out delay-700 duration-1000 overflow-hidden shadow-2xl ${
                  inView1 ? "scale-100" : "scale-50"
                }`}
                alt="About 4"
              />
            </div>

    
            <div
              className={`w-full lg:w-1/2 transform duration-1000 ease-out transition-all ${
                inView2 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-44"
              }`}
              ref={ref2}
            >
              <h2 className="text-yellow-500 font-semibold text-2xl">About Us</h2>
              <h1 className="text-6xl font-bold text-gray-800 my-4">
                Welcome to <span className="text-yellow-500">🍴 Restoran</span>
              </h1>
              <p className="text-2xl text-gray-600 leading-relaxed">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem
                sit.
              </p>
              <p className="text-2xl text-gray-600 leading-relaxed mt-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem
                sit.
              </p>
              <div className="flex flex-wrap items-center gap-8 mt-6">
                <div className="flex border-l-8 border-[#fea116] py-1">
                  <h2 className="text-6xl font-bold text-yellow-500 pl-3">
                    <span>{count2}</span>
                  </h2>
                  <p className="text-2xl text-gray-600 pl-12">
                    Years of <br />
                    <span className="font-bold text-black">EXPERIENCE</span>
                  </p>
                </div>
                <div className="flex border-l-8 border-[#fea116] py-1">
                  <h2 className="text-6xl font-bold text-yellow-500 pl-6">
                    <span>{count1}</span>
                  </h2>
                  <p className="text-2xl text-gray-600 pl-12">
                    Popular <br />
                    <span className="font-bold text-black">MASTER CHEFS</span>
                  </p>
                </div>
              </div>
              <button className="mt-8 px-12 py-6 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Abouts;
