import React from 'react'
import { useInView } from "react-intersection-observer";



function Footer() {
    const [ref7, inView7] = useInView({
        threshold: 0.20, 
        triggerOnce: true,
      });
  return (
    <div><footer ref={ref7}  className={`bg-gray-900 text-gray-300 py-12 transform duration-1000 ease-out transition-all delay-300 overflow-hidden ${
        inView7
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-34"
      } `}>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Section */}
        <div>
          <h3 className="text-[#fea116] text-3xl font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Reservation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-[#fea116] text-3xl font-semibold mb-4">Contact</h3>
          <p>123 Street, New York, USA</p>
          <p>+012 345 67890</p>
          <p>info@example.com</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-orange-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-orange-500">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-orange-500">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="hover:text-orange-500">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Opening Hours Section */}
        <div>
          <h3 className="text-[#fea116] text-3xl font-semibold mb-4">Opening</h3>
          <p>Monday - Saturday</p>
          <p>09AM - 09PM</p>
          <p className="mt-2">Sunday</p>
          <p>10AM - 08PM</p>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-[#fea116] text-3xl font-semibold mb-4">
            Newsletter
          </h3>
          <p className="mb-4 ">
            Dolor amet sit justo amet elitr clita ipsum elitr est.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-5 rounded-l bg-white text-white focus:outline-none"
            />
            <button className="bg-orange-500 px-4 py-5  rounded-r text-white hover:bg-orange-600">
              SIGNUP
            </button>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
        <p>
          © Your Site Name, All Rights Reserved. Designed By{" "}
          <a href="#" className="text-orange-500 hover:underline">
            HTML Codex
          </a>
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-white">
            Home
          </a>
          <a href="#" className="hover:text-white">
            Cookies
          </a>
          <a href="#" className="hover:text-white">
            Help
          </a>
          <a href="#" className="hover:text-white">
            FAQs
          </a>
        </div>
      </div>

      {/* Back to Top Button */}
      <a
        href="#"
        className="fixed bottom-4 right-4 bg-orange-500 text-white p-3 rounded hover:bg-orange-600"
      >
        ↑
      </a>
    </footer>
</div>
  )
}

export default Footer