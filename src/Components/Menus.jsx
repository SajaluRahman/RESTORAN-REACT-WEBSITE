import React, {  useState }  from 'react'
import Burger from '../Images/Burger.jpg'
import Steak from '../Images/Steak.jpg'
import Salad from '../Images/Salad.jpg'
import Pizza from '../Images/Pizza.jpg'
import Grilled from '../Images/chickengrilled.jpg'
import Pasta from '../Images/Pasta.jpg'
import { useInView } from "react-intersection-observer";


function Menus() {
  const [ref, inView] = useInView({
      threshold: 0.20, 
      triggerOnce: true,
    });
     const [ref3, inView3] = useInView({
          threshold: 0.20, 
          triggerOnce: true,
        });
    const menuItems = [
        { id: 1, name: "Chicken Burger", price: "$115", image: Burger, category: "Breakfast" },
        { id: 2, name: "Pizza", price: "$115", image: Pizza, category: "Lunch" },
        { id: 3, name: "Pasta", price: "$115", image: Pasta, category: "Dinner" },
        { id: 4, name: "Steak", price: "$115", image: Steak, category: "Lunch" },
        { id: 5, name: "Salad", price: "$115", image: Salad, category: "Breakfast" },
        { id: 6, name: "Grilled Chicken", price: "$115", image: Grilled, category: "Dinner" },
      ];
    
      // State to manage the current category
      const [selectedCategory, setSelectedCategory] = useState("All");
  return (
    <div>
        
                
<section>
<div
ref={ref} 
className={ `md:p-8 mx-auto flex flex-col justify-center items-center transform duration-1000 ease-out  transition-all overflow-hidden ${
        inView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-44"
      } `}>

 
    <p className='text-xl text-[#fea116]' >Food Menu</p>
     <h3 className='md:text-5xl text-3xl font-bold font-[Nunito,sans-serif] ' >Most Popular Items</h3>
 

</div>

<div 
ref={ref3} 
 className={` min-h- py-12 transform duration-1000 ease-out transition-all overflow-hidden ${
        inView3
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-44"
      } `}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Our Menu</h2>
          <p className="text-gray-500 mt-2">Delicious Breakfast, Lunch & Dinner</p>
        </div>

        
      <div className="flex justify-center space-x-4 mb-8">
          {["All", "Breakfast", "Lunch", "Dinner"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded ${
                selectedCategory === category
                  ? "bg-[#fea116] text-white"
                  : "bg-gray-300 text-gray-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

       
        <div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {menuItems.map((item) => (
            <div
              key={item.id}
              className={`flex items-center justify-between border-b pb-4 ${
                selectedCategory === "All" || selectedCategory === item.category
                  ? "opacity-100"
                  : "opacity-20"
              } transition-opacity duration-500`}
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                 
                  className="w-24 h-24 object-cover "
                />
                <div>
                  <h3 className="text-2xl font-bold">{item.name}</h3>
                  <p className="text-gray-500 text-lg italic">Lorem ipsum dolor sit amet</p>
                </div>
              </div>
              <span className="text-[#fea116] text-2xl font-bold">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>

    </div>
  )
}

export default Menus