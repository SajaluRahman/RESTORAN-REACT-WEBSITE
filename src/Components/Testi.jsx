import React, { useEffect, useState }  from 'react'
import { useInView } from "react-intersection-observer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation,Autoplay } from "swiper/modules";
import test1 from'../Images/testimonial-1.jpg'
import test2 from'../Images/testimonial-2.jpg'
import test3 from'../Images/testimonial-3.jpg'
import test4 from'../Images/testimonial-4.jpg'


function Testi() {
    

  const testimonials = [
    {
      id: 1,
      name: "Client Name 1",
      profession: "Profession ",
      img: test1,
    },
    {
      id: 2,
      name: "Client Name 2",
      profession: "Profession ",
      img: test2,
    },
    {
      id: 3,
      
      name: "Client Name 3",
      profession: "Profession ",
      img: test3,
    },
    {
      id: 4,
      
      name: "Client Name 4",
      profession: "Profession ",
      img: test4,
    },
  ];
    
  const [activeIndex, setActiveIndex] = useState(0); // Track active slide
  const [isMobileOrLarge, setIsMobileOrLarge] = useState(false); // Track screen size

  // Check screen size on mount and resize
  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      setIsMobileOrLarge(width >= 640 ); // sm and lg sizes in Tailwind
    };
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);
  const [ref6, inView6] = useInView({
    threshold: 0.20, 
    triggerOnce: true,
  });
  
  return (
    <div>
        
    <section ref={ref6} className={`py-16 bg-gray-50transform duration-1000 ease-out transition-all delay-300 overflow-hidden ${
        inView6
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-44"
      }  `}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h3 className="text-orange-500 text-lg font-semibold mb-2">
            Testimonial
          </h3>
          <h2 className="text-4xl font-bold text-gray-800">Our Clients Say!!!</h2>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Navigation,Autoplay]}
          spaceBetween={30}
          slidesPerView={3} // Show 3 slides
          loop={true} // Enable looping of slides
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          
          onSlideChange={(swiper) =>
            isMobileOrLarge
              ? setActiveIndex(swiper.realIndex + 1) // Apply special logic for sm and lg screens
              : setActiveIndex(swiper.realIndex) // Default behavior for other sizes
          }
          speed={600} // Smooth transition
          breakpoints={{
            0: { slidesPerView: 1 }, // 1 item for small screens
            768: { slidesPerView: 2 }, // 2 items for medium screens
            1024: { slidesPerView: 3 }, // 3 items for larger screens
          }}
          className="pb-10"
        >
          {testimonials.map((testimonial, index) => {
            const isActive =
              index === activeIndex ||
              (activeIndex === testimonials.length - 0 && index === 0); // Special case for last slide activating first

            return (
              <SwiperSlide key={testimonial.id}>
                <div
                  className={`p-6  shadow-md  ${
                    isActive ? "bg-orange-500 text-white" : "bg-white"
                  } transition-all duration-500`}
                >
                  <div >
                   <p className={`text-9xl  ${isActive ? "text-white" : "text-orange-500"}`}> ❝</p>
                   <p className="mb-6 text-xl">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p> 
                  </div>
                  
                  <div className="flex items-center justify-center gap-4">
                    <img
                      src={testimonial.img}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <h4 className="text-lg font-semibold">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm">{testimonial.profession}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
    </div>
  )
}

export default Testi