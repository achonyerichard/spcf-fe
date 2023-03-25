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

function Career() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <main>
        <section className="relative h-[617px] w-full flex items-center justify-center text-center bg-cover bg-center bg-[url('../public/img/career-bg.jpg')] mb-20">
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-800 opacity-75"></div>

          <div className="px-4 sm:px-6 lg:px-8 z-10">
            <div className="text-center">
              <h2 className="lg:text-7xl tracking-tight leading-10 font-bold  text-center text-white sm:leading-none text-3xl md:text-[53px] ">
                Join Our
                <span className="text-[#FBCF09]">Team</span> in <br />
                Impacting a Change.
              </h2>
              <p className="mt-3 text-white sm:mt-5 text-lg sm:max-w-xl text-center md:mt-5 ">
                Lets make the world a better place by contributing to the lives
                of the needy in little ways.
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
        <section className="bg-white p-8 lg:px-40 w-full lg:mt-28 lg:max-w-[1920px] ">
          <div className="lg:flex flex-wrap text-center justify-center lg:px-40">
            <div className="w-full  px-4">
              <h2 className="lg:text-5xl text-3xl font-semibold text-black">
                <span className="text-[#FBCF09]">Benefits</span><br/> of working with
                Us
              </h2>
              <p className="md:text-lg text-sm font-medium leading-relaxed m-4 text-[#605B47]">
                {" "}
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center lg:mx-auto lg:grid lg:grid-cols-2 lg:gap-12 lg:py-8 lg:px-20">
            <div className="flex ">
              <ul className="list-none mt-6 space-y-10">
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold  flex items-center justify-center uppercase rounded-full text-pink-600 bg-[#FFFAE6] w-[70px] h-[70px] mr-3">
                        <img src={"public/img/rice.png"} />
                      </span>
                    </div>
                    <div>
                      <h2 className="text-black text-xl font-bold">
                        Competitive salary
                      </h2>
                      <p className="text-[#605B47] md:w-4/5">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold  flex items-center justify-center uppercase rounded-full text-pink-600 bg-[#FFE7E7] w-[70px] h-[70px] mr-3">
                        <img src={"public/img/rice.png"} />
                      </span>
                    </div>
                    <div>
                      <h2 className="text-black text-xl font-bold">
                        Paid Vacation
                      </h2>
                      <p className="text-[#605B47] md:w-4/5">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold  flex items-center justify-center uppercase rounded-full text-pink-600 bg-[#F8E4FF] w-[70px] h-[70px] mr-3">
                        <img src={"public/img/rice.png"} />
                      </span>
                    </div>
                    <div>
                      <h2 className="text-black text-xl font-bold">
                        Monthly Visits
                      </h2>
                      <p className="text-[#605B47] md:w-4/5">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex w">
              <ul className="list-none mt-6 space-y-10">
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold  flex items-center justify-center uppercase rounded-full text-pink-600 bg-[#FFE7E7] w-[70px] h-[70px] mr-3">
                        <img src={"public/img/rice.png"} />
                      </span>
                    </div>
                    <div>
                      <h2 className="text-black text-xl font-bold">
                        Make Donations
                      </h2>
                      <p className="text-[#605B47] md:w-4/5">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold  flex items-center justify-center uppercase rounded-full text-pink-600 bg-[#EBFDE6] w-[70px] h-[70px] mr-3">
                        <img src={"public/img/rice.png"} />
                      </span>
                    </div>
                    <div>
                      <h2 className="text-black text-xl font-bold">
                        Health & Dentals
                      </h2>
                      <p className="text-[#605B47] md:w-4/5">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold  flex items-center justify-center uppercase rounded-full text-pink-600 bg-[#ECEBE9] w-[70px] h-[70px] mr-3">
                        <img src={"public/img/rice.png"} />
                      </span>
                    </div>
                    <div>
                      <h2 className="text-black text-xl font-bold">Bonuses</h2>
                      <p className="text-[#605B47] md:w-4/5">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="bg-white p-8 lg:px-40 w-full lg:mt-28 lg:max-w-[1920px] ">
          <div className="lg:flex flex-wrap text-center justify-center lg:px-40">
            <div className="w-full  px-4">
              <h2 className="lg:text-5xl text-4xl font-semibold text-black">
                <span className="text-[#FBCF09]">Career</span><br/> Opportunities
              </h2>
              
            </div>
          </div>
          <div className="flex flex-col items-center lg:mx-auto lg:grid lg:grid-cols-2 lg:gap-12 lg:py-8 lg:px-40">
            <div className="flex ">
              <ul className="list-none mt-6 space-y-10 accordion items-center ">
                <li className="py-2">
                <input
                type="checkbox"
                name="panel"
                id="panel-1"
                className="hidden"
              />
              <label
                htmlFor="panel-1"
                className="relative flex flex-col bg-white text-2xl font-semibold  text-[#FF8B1F] pt-4 pb-10 px-4 shadow border-b border-[#B0AEA4]"
              >
                <span className='pb-7'>Volunteers</span>
                <span className='text-sm text-black'>Onsite - Lagos</span>
              </label>
              <div className="accordion__content overflow-hidden bg-grey-lighter">
                <h2 className="accordion__header pt-4 pl-4">Header</h2>
                <p className="accordion__body p-4" id="panel1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iusto possimus at a cum saepe molestias modi illo facere
                  ducimus voluptatibus praesentium deleniti fugiat ab error quia
                  sit perspiciatis velit necessitatibus.Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Lorem ipsum dolor sit
                  amet.
                </p>
              </div>
                </li>
                <li className="py-2">
                <input
                type="checkbox"
                name="panel"
                id="panel-2"
                className="hidden"
              />
               <label
                htmlFor="panel-2"
                className="relative flex flex-col bg-white text-2xl font-semibold  text-[#FF8B1F] pt-4 pb-10 px-4 shadow border-b border-[#B0AEA4]"
              >
                <span className='pb-7'>Cheffuer</span>
                <span className='text-sm text-black'>Onsite - Lagos</span>
              </label>
              <div className="accordion__content overflow-hidden bg-grey-lighter">
                <h2 className="accordion__header pt-4 pl-4">Header</h2>
                <p className="accordion__body p-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iusto possimus at a cum saepe molestias modi illo facere
                  ducimus voluptatibus praesentium deleniti fugiat ab error quia
                  sit perspiciatis velit necessitatibus.Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Lorem ipsum dolor sit
                  amet.
                </p>
              </div>
                </li>
                <li className="py-2">
                <input
                type="checkbox"
                name="panel"
                id="panel-3"
                className="hidden"
              />
               <label
                htmlFor="panel-3"
                className="relative flex flex-col bg-white text-2xl font-semibold  text-[#FF8B1F] pt-4 pb-10 px-4 shadow border-b border-[#B0AEA4]"
              >
                <span className='pb-7'>Driver</span>
                <span className='text-sm text-black'>Onsite - Lagos</span>
              </label>
              <div className="accordion__content overflow-hidden bg-grey-lighter">
                <h2 className="accordion__header pt-4 pl-4">Header</h2>
                <p className="accordion__body p-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iusto possimus at a cum saepe molestias modi illo facere
                  ducimus voluptatibus praesentium deleniti fugiat ab error quia
                  sit perspiciatis velit necessitatibus.Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Lorem ipsum dolor sit
                  amet.
                </p>
              </div>
                </li>
              </ul>
            </div>
            <div className="flex w">
              <ul className="list-none mt-6 space-y-10 accordion items-center">
                <li className="py-2">
                <input
                type="checkbox"
                name="panel"
                id="panel-4"
                className="hidden"
              />
               <label
                htmlFor="panel-4"
                className="relative flex flex-col bg-white text-2xl font-semibold  text-[#FF8B1F] pt-4 pb-10 px-4 shadow border-b border-[#B0AEA4]"
              >
                <span className='pb-7'>Volunteers</span>
                <span className='text-sm text-black'>Onsite - Lagos</span>
              </label>
              <div className="accordion__content overflow-hidden bg-grey-lighter">
                <h2 className="accordion__header pt-4 pl-4">Header</h2>
                <p className="accordion__body p-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iusto possimus at a cum saepe molestias modi illo facere
                  ducimus voluptatibus praesentium deleniti fugiat ab error quia
                  sit perspiciatis velit necessitatibus.Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Lorem ipsum dolor sit
                  amet.
                </p>
              </div>
                </li>
                <li className="py-2">
                <input
                type="checkbox"
                name="panel"
                id="panel-5"
                className="hidden"
              />
               <label
                htmlFor="panel-5"
                className="relative flex flex-col bg-white text-2xl font-semibold  text-[#FF8B1F] pt-4 pb-10 px-4 shadow border-b border-[#B0AEA4]"
              >
                <span className='pb-7'>Secretary</span>
                <span className='text-sm text-black'>Onsite - Lagos</span>
              </label>
              <div className="accordion__content overflow-hidden bg-grey-lighter">
                <h2 className="accordion__header pt-4 pl-4">Header</h2>
                <p className="accordion__body p-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iusto possimus at a cum saepe molestias modi illo facere
                  ducimus voluptatibus praesentium deleniti fugiat ab error quia
                  sit perspiciatis velit necessitatibus.Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Lorem ipsum dolor sit
                  amet.
                </p>
              </div>
                </li>
                <li className="py-2">
                <input
                type="checkbox"
                name="panel"
                id="panel-6"
                className="hidden"
              />
               <label
                htmlFor="panel-6"
                className="relative flex flex-col bg-white text-2xl font-semibold  text-[#FF8B1F] pt-4 pb-10 px-4 shadow border-b border-[#B0AEA4]"
              >
                <span className='pb-7'>Program Officer</span>
                <span className='text-sm text-black'>Onsite - Lagos</span>
              </label>
              <div className="accordion__content overflow-hidden bg-grey-lighter">
                <h2 className="accordion__header pt-4 pl-4">Header</h2>
                <p className="accordion__body p-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iusto possimus at a cum saepe molestias modi illo facere
                  ducimus voluptatibus praesentium deleniti fugiat ab error quia
                  sit perspiciatis velit necessitatibus.Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Lorem ipsum dolor sit
                  amet.
                </p>
              </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* <section>
          <div className="accordion flex flex-col items-center ">
            <div className="w-1/2 ">
              <input
                type="checkbox"
                name="panel"
                id="panel-1"
                className="hidden"
              />
              <label
                htmlFor="panel-1"
                className="relative flex flex-col bg-white text-2xl font-semibold  text-[#FF8B1F] pt-4 pb-10 px-4 shadow border-b border-[#B0AEA4]"
              >
                <span className='pb-7'>Volunteers</span>
                <span className='text-sm text-black'>Onsite - Lagos</span>
              </label>
              <div className="accordion__content overflow-hidden bg-grey-lighter">
                <h2 className="accordion__header pt-4 pl-4">Header</h2>
                <p className="accordion__body p-4" id="panel1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iusto possimus at a cum saepe molestias modi illo facere
                  ducimus voluptatibus praesentium deleniti fugiat ab error quia
                  sit perspiciatis velit necessitatibus.Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Lorem ipsum dolor sit
                  amet.
                </p>
              </div>
            </div>

            <div className="w-1/2">
              <input
                type="checkbox"
                name="panel"
                id="panel-2"
                className="hidden"
              />
               <label
                htmlFor="panel-1"
                className="relative flex flex-col bg-white text-2xl font-semibold  text-[#FF8B1F] pt-4 pb-10 px-4 shadow border-b border-[#B0AEA4]"
              >
                <span className='pb-7'>Volunteers</span>
                <span className='text-sm text-black'>Onsite - Lagos</span>
              </label>
              <div className="accordion__content overflow-hidden bg-grey-lighter">
                <h2 className="accordion__header pt-4 pl-4">Header</h2>
                <p className="accordion__body p-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iusto possimus at a cum saepe molestias modi illo facere
                  ducimus voluptatibus praesentium deleniti fugiat ab error quia
                  sit perspiciatis velit necessitatibus.Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Lorem ipsum dolor sit
                  amet.
                </p>
              </div>
            </div>

            <div className="w-1/2">
              <input
                type="checkbox"
                name="panel"
                id="panel-2"
                className="hidden"
              />
               <label
                htmlFor="panel-3"
                className="relative flex flex-col bg-white text-2xl font-semibold  text-[#FF8B1F] pt-4 pb-10 px-4 shadow border-b border-[#B0AEA4]"
              >
                <span className='pb-7'>Volunteers</span>
                <span className='text-sm text-black'>Onsite - Lagos</span>
              </label>
              <div className="accordion__content overflow-hidden bg-grey-lighter">
                <h2 className="accordion__header pt-4 pl-4">Header</h2>
                <p className="accordion__body p-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iusto possimus at a cum saepe molestias modi illo facere
                  ducimus voluptatibus praesentium deleniti fugiat ab error quia
                  sit perspiciatis velit necessitatibus.Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Lorem ipsum dolor sit
                  amet.
                </p>
              </div>
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
    </>
  );
}

export default Career
