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

function Donation() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <main className='mb-20'>
        <div className="px-5 relative h-screen w-full flex md:px-40 flex-col md:flex-row items-center bg-blend-multiply bg-gray-600 justify-center md:justify-start text-center md:text-left bg-cover bg-center bg-[url('../public/img/donate-bg.png')]">
          {/* <div className="absolute top-0 right-0 bottom-0 left-0 bg-gr opacity-75"></div> */}

          <main className=" z-10 md:w-1/2">
            <div className="flex flex-col justify-center">
              <h2 className="lg:text-4xl tracking-tight leading-10 font-bold  text-left md:text-left  text-white sm:leading-none text-3xl md:text-[53px]  capitalize ">
                We Need Your Support <br/> To 
                <span className="text-[#FBCF09]">Feed</span> the vulnerable.
              </h2>
              <p className="mt-3 text-white sm:mt-5 text-md font-normal sm:max-w-xl md:text-left text-center md:mt-5 ">
              You can make charitable donations to our organization by filling out the form below. We accept debit/credit cards as well as Paypal.
              </p>
            </div>
          </main>

          <div className="bg-white px-10 py-10 rounded-lg shadow  mx-auto lg:w-2/5 flex flex-col justify-end">
            <div className="py-3">
              <h2 className="lg:text-3xl tracking-tight leading-10 font-bold  text-left text-black sm:leading-none text-3xl md:text-[53px] ">
                Make Your <span className="text-[#FBCF09]">Donations</span>{" "}
                Today
              </h2>
            </div>

            <form action="">
              <div className="mb-5">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="First Name."
                  className=" shadow p-3 w-full rounded mb- bg-[#EEEEEE]"
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Last Name"
                  className=" shadow p-3 w-full rounded mb- bg-[#EEEEEE]"
                />
              </div>

              <div className="mb-5">
                <input
                  type="text"
                  id="twitter"
                  name="twitter"
                  placeholder="Email Address"
                  className=" shadow p-3 w-full rounded mb- bg-[#EEEEEE]"
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  id="twitter"
                  name="twitter"
                  placeholder="Amount"
                  className=" shadow p-3 w-full rounded mb- bg-[#EEEEEE]"
                />
              </div>
              <button className="block w-full bg-[#FF8B1F] text-white font-bold px-4 py-3 rounded-lg">
                Donate Now
              </button>
            </form>
          </div>
        </div>
        <section className="bg-white p-8 lg:px-40 w-full lg:mt-28">
            <div className="flex flex-col items-center lg:max-w-[1920px] lg:mx-auto lg:grid lg:grid-cols-2 lg:gap-12 lg:py-8">
              <div className=" lg:flex lg:flex-col  lg:w-4/5">
                <h2 className="text-[#2C2917] text-left font-semibold text-2xl md:text-3xl">
                We assist thousands of vulnerable including senior citizens in alleviating hunger.
                </h2>
                <p className="text-[#605B47] text-md leading-[1.875rem] lg:mt-5">
                Partner with us, government agencies and corporate organizations tp facilitate the provision of financial assistance to the less privileged for economic empowerment and poverty eradication.
                </p>

               
              </div>
              <div className="flex justify-end">
              <ul className="list-none ">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold  flex items-center justify-center uppercase rounded-lg text-pink-600 bg-[#57ED31] w-[70px] h-[70px] mr-3">
                            <img src={"public/img/coin.png"}/>
                          </span>
                        </div>
                        <div>
                        <h2 className='text-black text-xl font-bold'>Make Donations</h2>
                          <h4 className="text-[#605B47]">
                          Donate now to feed the less privileged
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold  flex items-center justify-center uppercase rounded-lg text-pink-600 bg-[#57ED31] w-[70px] h-[70px] mr-3">
                          <img src={"public/img/city.png"}/>
                          </span>
                        </div>
                        <div>
                            <h2 className='text-black text-xl font-bold'>Health Care</h2>
                          <p className="text-[#605B47]">
                          Support families with children who are under stress by providing healthcare and social work support
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold  flex items-center justify-center uppercase rounded-lg text-pink-600 bg-[#57ED31] w-[70px] h-[70px] mr-3">
                          <img src={"public/img/wheels.png"}/>
                          </span>
                        </div>
                        <div>
                        <h2 className='text-black text-xl font-bold'>Senior Citizens</h2>
                          <p className="text-[#605B47]">
                          Provide welfare packages of the elderly in the society.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
              </div>
            </div>
          </section>
      </main>
      <Footer />
    </>
  );
}

export default Donation
