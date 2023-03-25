import { useState } from 'react'

// import './App.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";
import { FaBook, FaExchangeAlt, FaEye, FaFilter, FaFistRaised, FaFlagUsa, FaGlobe, FaGlobeAfrica, FaGlobeAmericas, FaPeopleArrows, FaRegHandshake, FaRunning, FaTwitter, FaVoteYea } from "react-icons/fa";
import { BiDonateHeart, BiMap } from "react-icons/bi";
import { MdFormatListBulleted, MdSettingsVoice } from "react-icons/md";
import { AiOutlineRise } from "react-icons/ai";
// import required modules
import { Pagination, Navigation, Autoplay, } from "swiper"
import Nav from '../../components/navigation/Navigation';
import Footer from "../../components/footer";
import { BsSearch } from 'react-icons/bs';

function Center() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <main>
        <section className="mb-20">
          <div className="relative h-[617px] w-full flex flex-col items-center justify-center text-center bg-cover bg-center bg-[url('../public/img/centers-bg.jpg')] ">
            <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-800 opacity-75"></div>

            <div className="px-4 sm:px-6 lg:px-8 z-10">
              <div className="text-center">
                <h2 className="lg:text-7xl tracking-tight leading-10 font-bold  text-center text-white sm:leading-none text-3xl md:text-[53px] ">
                  Available
                  <span className="text-[#FBCF09]"> centers</span> for <br />
                  our feeding programme.
                </h2>
                <p className="mt-3 text-white sm:mt-5 text-lg  text-center md:mt-5 ">
                  Lets make the world a better place by contributing to the <br/>
                  lives of the needy in little ways.
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
          </div>
          <div className="md:mx-40 mx-5 shadow-xl   bg-white  -mt-12 z-20 relative px-5 md:py-5 py-5  rounded-lg">
            <div className="flex items-center gap-12">
              <div className="md:w-1/3">
                <div className="relative flex items-center">
                  <input
                    id="twitter"
                    type="text"
                    className="appearance-none  px-3 py-4 block w-full  text-base text-appBlack bg-[#F5F5F5]  focus:bg-white peer relative h-10 leading-tight focus:outline-none   pl-8 pr-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out  focus:drop-shadow-lg"
                  />
                  <span className="flex items-center material-symbols-outlined absolute left-2 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                    {" "}
                    <BsSearch className={`text-xl text-[#908D7E] mr-2`} />
                  </span>
                </div>
              </div>
              <div className="md:w-2/3  flex ">
                <div className="bg-[#F2F2F2] px-4 py-3 rounded-lg flex items-center gap-2">
                  <h1 className="text-lg text-[#908D7E]">Filter</h1>
                  <FaFilter className="text-[#908D7E]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white  lg:px-40 w-full lg:mt-5 lg:max-w-[1920px] px-4 mb-20">
          <div className="flex flex-col  lg:mx-auto lg:grid lg:grid-cols-2 lg:gap-12 lg:py-8 ">
            <div className="grid md:grid-cols-2 md:gap-20 gap-6">
              <div class="  w-full ">
                <img
                  src="https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
                  alt=""
                  class="rounded-lg w-full h-[125px] object-cover"
                />
                <div class="p-6 shadow-lg">
                  <h2 class="font-bold mb-2 text-2xl text-[#2C2917]">
                    Ikorodu
                  </h2>
                  <p class="text-[#908D7E] mb-2">
                    69 Road off kachala street, opp shoprite Lagos state.
                  </p>
                  <div className="flex items-center">
                    <div className='flex items-center gap-2'>
                        <BiMap className='text-2xl  fill-[#FF8B1F]'/>
                      <p className='text-xl text-black font-bold'>Locate</p>
                    </div>
                    <div className='flex grow'>
                     
                    </div>
                    <div className='flex justify-end '>
                      <button className='p-2  bg-[#FF8B1F] text-white'>View</button>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div class="  w-full ">
                <img
                  src="https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
                  alt=""
                  class="rounded-lg w-full h-[125px] object-cover"
                />
                <div class="p-6 shadow-lg">
                  <h2 class="font-bold mb-2 text-2xl text-[#2C2917]">
                    Ikorodu
                  </h2>
                  <p class="text-[#908D7E] mb-2">
                    69 Road off kachala street, opp shoprite Lagos state.
                  </p>
                  <div className="flex items-center">
                    <div className='flex items-center gap-2'>
                        <BiMap className='text-2xl  fill-[#FF8B1F]'/>
                      <p className='text-xl text-black font-bold'>Locate</p>
                    </div>
                    <div className='flex grow'>
                     
                    </div>
                    <div className='flex justify-end '>
                      <button className='p-2  bg-[#FF8B1F] text-white'>View</button>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div class="  w-full ">
                <img
                  src="https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
                  alt=""
                  class="rounded-lg w-full h-[125px] object-cover"
                />
                <div class="p-6 shadow-lg">
                  <h2 class="font-bold mb-2 text-2xl text-[#2C2917]">
                    Ikorodu
                  </h2>
                  <p class="text-[#908D7E] mb-2">
                    69 Road off kachala street, opp shoprite Lagos state.
                  </p>
                  <div className="flex items-center">
                    <div className='flex items-center gap-2'>
                        <BiMap className='text-2xl  fill-[#FF8B1F]'/>
                      <p className='text-xl text-black font-bold'>Locate</p>
                    </div>
                    <div className='flex grow'>
                     
                    </div>
                    <div className='flex justify-end '>
                      <button className='p-2  bg-[#FF8B1F] text-white'>View</button>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div class="  w-full ">
                <img
                  src="https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
                  alt=""
                  class="rounded-lg w-full h-[125px] object-cover"
                />
                <div class="p-6 shadow-lg">
                  <h2 class="font-bold mb-2 text-2xl text-[#2C2917]">
                    Ikorodu
                  </h2>
                  <p class="text-[#908D7E] mb-2">
                    69 Road off kachala street, opp shoprite Lagos state.
                  </p>
                  <div className="flex items-center">
                    <div className='flex items-center gap-2'>
                        <BiMap className='text-2xl  fill-[#FF8B1F]'/>
                      <p className='text-xl text-black font-bold'>Locate</p>
                    </div>
                    <div className='flex grow'>
                     
                    </div>
                    <div className='flex justify-end '>
                      <button className='p-2  bg-[#FF8B1F] text-white'>View</button>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div class="  w-full  ">
                <img
                  src="https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
                  alt=""
                  class="rounded-lg w-full h-[125px] object-cover"
                />
                <div class="p-6 shadow-lg">
                  <h2 class="font-bold mb-2 text-2xl text-[#2C2917]">
                    Ikorodu
                  </h2>
                  <p class="text-[#908D7E] mb-2">
                    69 Road off kachala street, opp shoprite Lagos state.
                  </p>
                  <div className="flex items-center">
                    <div className='flex items-center gap-2'>
                        <BiMap className='text-2xl  fill-[#FF8B1F]'/>
                      <p className='text-xl text-black font-bold'>Locate</p>
                    </div>
                    <div className='flex grow'>
                     
                    </div>
                    <div className='flex justify-end '>
                      <button className='p-2  bg-[#FF8B1F] text-white'>View</button>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div class="  w-full ">
                <img
                  src="https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
                  alt=""
                  class="rounded-lg w-full h-[125px] object-cover"
                />
                <div class="p-6 shadow-lg">
                  <h2 class="font-bold mb-2 text-2xl text-[#2C2917]">
                    Ikorodu
                  </h2>
                  <p class="text-[#908D7E] mb-2">
                    69 Road off kachala street, opp shoprite Lagos state.
                  </p>
                  <div className="flex items-center">
                    <div className='flex items-center gap-2'>
                        <BiMap className='text-2xl  fill-[#FF8B1F]'/>
                      <p className='text-xl text-black font-bold'>Locate</p>
                    </div>
                    <div className='flex grow'>
                     
                    </div>
                    <div className='flex justify-end '>
                      <button className='p-2  bg-[#FF8B1F] text-white'>View</button>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="w-full md:h-screen">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin"
            width="600"
           
        className='w-full md:h-screen'
            allowfullscreen=""
            loading="lazy"
          ></iframe>
            </div>
          </div>
        </section>
       
      </main>
      <Footer />
    </>
  );
}

export default Center
