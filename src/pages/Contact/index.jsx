import { useState } from 'react'

// import './App.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";
import { FaBook, FaExchangeAlt, FaEye, FaFistRaised, FaFlagUsa, FaGlobe, FaGlobeAfrica, FaGlobeAmericas, FaPeopleArrows, FaRegHandshake, FaRunning, FaVoteYea } from "react-icons/fa";
import { BiDonateHeart } from "react-icons/bi";
import { MdFormatListBulleted, MdSettingsVoice } from "react-icons/md";
import { AiOutlineRise } from "react-icons/ai";
// import required modules
import { Pagination, Navigation, Autoplay, } from "swiper"
import Nav from '../../components/navigation/Navigation';
import Footer from "../../components/footer";

function Contact() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <main>
        <section className="relative h-[489px] w-full flex items-center justify-center text-center bg-cover bg-center bg-[url('../public/img/contact-hero.png')] mb-20">
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-800/10 opacity-75"></div>

          <div className="px-4 sm:px-6 lg:px-8 z-10">
            <div className="text-center">
              <h2 className="text-4xl tracking-tight leading-10  sm:text-5xl text-[#FDEB9A] sm:leading-none md:text-6xl font-bold">
                Contact Us
              </h2>
              <p className="mt-3 text-white sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5">
               Need support ? Contact us via our help-line or email.
              </p>
              {/* <div className="mt-5 sm:mt-8 sm:flex justify-center">
            <div className="rounded-md shadow">
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-regular rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:px-10">
                Get started
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-regular rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:px-10">
                Live demo
              </a>
            </div>
          </div> */}
            </div>
          </div>
        </section>
        <section className="flex flex-col md:justify-center md:items-center md:mx-auto p-5 mb-20">
          <div className="text-center mb-16">
            <p className="mt-4 text-sm leading-7 text-gray-500 font-regular uppercase">
              Contact
            </p>
            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
              Get In Touch
            </h3>
            <p className="mt-3 text-gray-900 sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5">
              Contact us via email through <span className='text-blue-500'>spcf@something.com</span> or our support line <span className='text-[#fcd733] text-bold'>(555) 555-5555</span>
            </p>
          </div>

          <form className="flex flex-col md:justify-center md:items-center space-y-4 bg-white shadow-lg">
            <div className="w-full  px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Full Name
              </label>
              <input
                className="appearance-none block w-full md:w-[388px] bg-[#F5F5F5] text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              />
            </div>

            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2"
                htmlFor="grid-password"
              >
                Email Address
              </label>
              <input
                className="appearance-none block w-full md:w-[388px] bg-[#F5F5F5] text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-email"
                type="email"
                placeholder="********@*****.**"
              />
            </div>
            <div className="w-full  px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Subject
              </label>
              <input
                className="appearance-none block w-full md:w-[388px] bg-[#F5F5F5] text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Subject"
              />
            </div>

            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2"
                htmlFor="grid-password"
              >
                Your Message
              </label>
              <textarea
                rows="10"
                className="appearance-none block w-full md:w-[388px] bg-[#F5F5F5] text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
            <div className="flex justify-between w-full px-3">
              <button
                className="shadow w-full bg-[#FF8B1F] py-3 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </section>
        <section>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin"
            width="600"
            height="450"
        className='w-full'
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Contact
