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
import Footer from "../../components/footer"

function About() {


  return (
    <>
      <Nav />
      <main>
        <div className="">
          <div
            className={`relative h-screen w-full flex items-center bg-white bg-blend-multiply  justify-center text-center  z-10 bg-cover bg-center bg-fixed  `}
          >
            <main className=" sm:px-6  z-10 max-w-[1920px] w-full px-4 mx-auto lg:px-20 flex lg:flex-row flex-col items-center justify-between pt-10">
              <div className="  lg:w-1/2 ">
                <h2 className="lg:text-8xl tracking-tight leading-10 font-bold  text-left text-HomeWhite sm:leading-none text-3xl md:text-[53px] ">
                  We Pride <span className="text-[#9C5513]">Ourselves</span> in
                  giving back to the vulnerable.
                </h2>
                <div className="lg:w-1/2 flex justify-end lg:hidden">
                  <img
                    alt="Hero Imge"
                    src={"/img/about-img.png"}
                    className="object-cover lg:w-[544px] lg:h-[489px] "
                  />
                </div>
                <p className="mt-3 text-appWhite sm:mt-5 text-lg sm:max-w-xl text-left md:mt-5 ">
                  Lets make the world a better place by contributing to the
                  lives of the needy in little ways.
                </p>
                <div className="mt-5 sm:mt-8">
                  <div className="rounded-md ">
                    <Link href="auth/login">
                      <button
                        href="#"
                        className="w-[186px] h-[48px] flex items-center justify-center px-8 py-3  text-appWhite text-base leading-6 font-regular rounded-md text-white bg-[#FF8B1F] transition duration-150 ease-in-out md:py-4 md:px-10"
                      >
                        Get started
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 lg:flex justify-end hidden bg-[url('../public/img/about-hero.jpg')]">
                <img
                  alt="Hero Imge"
                  src={"/img/about-img.png"}
                  className="object-cover lg:w-[544px] lg:h-[489px] "
                />
              </div>
            </main>
          </div>
        </div>
        <section className="bg-[#FFF3E9] p-8 lg:px-40 w-full lg:mt-28">
          <div className="flex flex-col items-center lg:max-w-[1920px] lg:mx-auto lg:grid lg:grid-cols-2 lg:gap-12 lg:py-8">
            <div>
              <img src={"/img/about-hero-1.png"} alt="What's happening" />
            </div>
            <div className="my-8 lg:flex lg:flex-col  -center lg:w-4/5">
              <span>
                <p
                  className="text-sm font-bold leading-relaxed m-4 text-[#FF8B1F]
"
                >
                  Our Vision
                </p>
              </span>
              <h2 className="text-[#2C2917] text-left font-semibold text-3xl md:text-6xl">
                To build a place where people can come to find and discover
                anything they might want to buy online
              </h2>
              <p className="text-[#605B47] leading-[1.875rem] lg:mt-5">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>

              <div className="py-4 items-start">
                <Link href="/coming-soon">
                  <button className="bg-[#FF8B1F] text-white p-2 lg:bg-appOrange lg:rounded-[5px] lg:w-[186px] lg:h-[45px] lg:text-xl">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center lg:max-w-[1920px] lg:mx-auto lg:grid lg:grid-cols-2 lg:gap-12 lg:py-8">
            <div className="my-8 lg:flex lg:flex-col  -center lg:w-4/5">
              <span>
                <p
                  className="text-sm font-bold leading-relaxed m-4 text-[#FF8B1F]
"
                >
                  Our Mission
                </p>
              </span>
              <h2 className="text-[#2C2917] text-left font-semibold text-3xl md:text-4xl">
                To build a place where people can come to find and discover
                anything they might want to buy online
              </h2>
              <p className="text-[#605B47] leading-[1.875rem] lg:mt-5">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>

              <div className="py-4 items-start">
                <Link href="/coming-soon">
                  <button className="bg-[#FF8B1F] text-white p-2 lg:bg-appOrange lg:rounded-[5px] lg:w-[186px] lg:h-[45px] lg:text-xl">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex justify-start">
              <img src={"/img/hero-3.png"} alt="What's happening" />
            </div>
          </div>
        </section>
        <section className="bg-white p-8 lg:px-40 w-full lg:mt-28">
          <span className="flex justify-center">
            <p
              className="text-lg font-bold leading-relaxed m-4 text-[#FF8B1F]
"
            >
              Our Features
            </p>
          </span>
          <div className="flex flex-col items-center lg:max-w-[1920px] lg:mx-auto lg:grid lg:grid-cols-2 lg:gap-12 lg:py-8">
            <div className="lg:relative ">
              <div className="z-0 lg:block hidden">
                <img src={"/img/rect.png"} className="" alt="What's happening" />
              </div>
              <div className="lg:absolute z-10 lg:top-20 lg:left-36  lg:w-auto w-full ">
                <Swiper
                  pagination={true}
                  autoplay={{
                    delay: 7000,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay, Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img src={"/img/abs.png"} alt="What's happening" className='w-auto' />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="my-8 lg:flex lg:flex-col  -center lg:w-4/5">
              <h2 className="text-[#2C2917] text-left font-semibold text-3xl md:text-4xl">
                To build a place where people can come to find and discover
                anything they might want to buy online
              </h2>
              <p className="text-[#605B47] leading-[1.875rem] lg:mt-5">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>

              <div className="py-4 items-start">
                <Link href="/coming-soon">
                  <button className="bg-[#FF8B1F] text-white p-2 lg:bg-appOrange lg:rounded-[5px] lg:w-[186px] lg:h-[45px] lg:text-xl">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default About
