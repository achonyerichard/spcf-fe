import { useState } from "react";

// import './App.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";
import {
  FaBook,
  FaExchangeAlt,
  FaEye,
  FaFistRaised,
  FaFlagUsa,
  FaGlobe,
  FaGlobeAfrica,
  FaGlobeAmericas,
  FaPeopleArrows,
  FaRegHandshake,
  FaRunning,
  FaVoteYea,
} from "react-icons/fa";
import { BiDonateHeart } from "react-icons/bi";
import { MdFormatListBulleted, MdSettingsVoice } from "react-icons/md";
import { AiOutlineRise } from "react-icons/ai";
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import Nav from "../../components/navigation/Navigation";
import Footer from "../../components/footer";

function Career() {
  const [count, setCount] = useState(0);

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
                We aim to to connect job seekers with meaningful employment opportunities to support them in achieving their career goals.
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
              <h2 className="lg:text-4xl text-2xl font-semibold text-black">
                <span className="text-[#FBCF09]">Benefits</span>
                <br /> of working with Us
              </h2>
              <p className="md:text-md text-sm font-medium leading-relaxed m-4 text-[#605B47]">
                {" "}
                Through job placement services, skill-building programs, and
                partnerships with local businesses, we strive to create a strong
                and inclusive job market that benefits both employers and
                employees, and helps build thriving communities.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center lg:mx-auto lg:grid lg:grid-cols-2 lg:gap-12 lg:py-8 ">
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
                        Career Empowerment
                      </h2>
                      <p className="text-[#605B47] md:w-4/5 ">
                        We intend to shortlist individuals who are then admitted
                        into our training sessions which focuses on office and
                        work ethics, CV writing, and digital skills.
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
                        Poverty Eradication 
                      </h2>
                      <p className="text-[#605B47] md:w-4/5">
                      The scheme goes on to the inevitable
                        eventuality of eradicating poverty among youths of the
                        society by granting them financial power through what
                        they have known.
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
                      <span className="text-xs font-semibold  flex items-center justify-center uppercase rounded-full text-pink-600 bg-[#EBFDE6] w-[70px] h-[70px] mr-3">
                        <img src={"public/img/rice.png"} />
                      </span>
                    </div>
                    <div>
                      <h2 className="text-black text-xl font-bold">
                        Job Creation
                      </h2>
                      <p className="text-[#605B47] md:w-4/5">
                        Our charity organisation has taken it upon itself to
                        provide jobs for youths in the community, towards the
                        goal of financial empowerment.
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
                      <h2 className="text-black text-xl font-bold">
                        Self-reliance Trainings
                      </h2>
                      <p className="text-[#605B47] md:w-4/5">
                        Trainings offered at the job training section of the
                        facility will assist in building these young individuals
                        into self-reliant citizens
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="bg-white p-8 lg:px-40 w-full lg:mt-28 lg:max-w-[1920px] ">
          <div className="lg:flex flex-wrap text-center justify-center ">
            <div className="w-full  px-4">
              <h2 className="lg:text-5xl text-4xl font-semibold text-black">
                <span className="text-[#FBCF09]">Career</span>
                <br /> Opportunities
              </h2>
            </div>
          </div>
          <div className="flex flex-col items-center lg:mx-auto lg:grid lg:grid-cols-2 lg:gap-12 lg:py-8 ">
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
                    <span className="pb-7">Volunteers</span>
                    <span className="text-sm text-black">Onsite - Lagos</span>
                  </label>
                  <div className="accordion__content overflow-hidden bg-grey-lighter">
                    <h2 className="accordion__header pt-4 pl-4">Header</h2>
                    <p className="accordion__body p-4" id="panel1">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Iusto possimus at a cum saepe molestias modi illo facere
                      ducimus voluptatibus praesentium deleniti fugiat ab error
                      quia sit perspiciatis velit necessitatibus.Lorem ipsum
                      dolor sit amet, consectetur adipisicing elit. Lorem ipsum
                      dolor sit amet.
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
                    <span className="pb-7">Cheffuer</span>
                    <span className="text-sm text-black">Onsite - Lagos</span>
                  </label>
                  <div className="accordion__content overflow-hidden bg-grey-lighter">
                    <h2 className="accordion__header pt-4 pl-4">Header</h2>
                    <p className="accordion__body p-4">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Iusto possimus at a cum saepe molestias modi illo facere
                      ducimus voluptatibus praesentium deleniti fugiat ab error
                      quia sit perspiciatis velit necessitatibus.Lorem ipsum
                      dolor sit amet, consectetur adipisicing elit. Lorem ipsum
                      dolor sit amet.
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
                    <span className="pb-7">Driver</span>
                    <span className="text-sm text-black">Onsite - Lagos</span>
                  </label>
                  <div className="accordion__content overflow-hidden bg-grey-lighter">
                    <h2 className="accordion__header pt-4 pl-4">Header</h2>
                    <p className="accordion__body p-4">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Iusto possimus at a cum saepe molestias modi illo facere
                      ducimus voluptatibus praesentium deleniti fugiat ab error
                      quia sit perspiciatis velit necessitatibus.Lorem ipsum
                      dolor sit amet, consectetur adipisicing elit. Lorem ipsum
                      dolor sit amet.
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
                    <span className="pb-7">Volunteers</span>
                    <span className="text-sm text-black">Onsite - Lagos</span>
                  </label>
                  <div className="accordion__content overflow-hidden bg-grey-lighter">
                    <h2 className="accordion__header pt-4 pl-4">Header</h2>
                    <p className="accordion__body p-4">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Iusto possimus at a cum saepe molestias modi illo facere
                      ducimus voluptatibus praesentium deleniti fugiat ab error
                      quia sit perspiciatis velit necessitatibus.Lorem ipsum
                      dolor sit amet, consectetur adipisicing elit. Lorem ipsum
                      dolor sit amet.
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
                    <span className="pb-7">Secretary</span>
                    <span className="text-sm text-black">Onsite - Lagos</span>
                  </label>
                  <div className="accordion__content overflow-hidden bg-grey-lighter">
                    <h2 className="accordion__header pt-4 pl-4">Header</h2>
                    <p className="accordion__body p-4">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Iusto possimus at a cum saepe molestias modi illo facere
                      ducimus voluptatibus praesentium deleniti fugiat ab error
                      quia sit perspiciatis velit necessitatibus.Lorem ipsum
                      dolor sit amet, consectetur adipisicing elit. Lorem ipsum
                      dolor sit amet.
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
                    <span className="pb-7">Program Officer</span>
                    <span className="text-sm text-black">Onsite - Lagos</span>
                  </label>
                  <div className="accordion__content overflow-hidden bg-grey-lighter">
                    <h2 className="accordion__header pt-4 pl-4">Header</h2>
                    <p className="accordion__body p-4">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Iusto possimus at a cum saepe molestias modi illo facere
                      ducimus voluptatibus praesentium deleniti fugiat ab error
                      quia sit perspiciatis velit necessitatibus.Lorem ipsum
                      dolor sit amet, consectetur adipisicing elit. Lorem ipsum
                      dolor sit amet.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="flex flex-col md:justify-center md:items-center md:mx-auto p-5 mb-20">
          <div className="text-center mb-16">
            <p className="mt-4 text-sm leading-7 text-gray-500 font-regular uppercase">
              Job Form
            </p>
            <h3 className="text-xl sm:text-2xl leading-normal font-extrabold tracking-tight text-gray-900">
              Regsiter with Us
            </h3>
            <p className="mt-3 text-gray-900 sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5">
            Fill out the form below to register your interest with us.
            </p>
          </div>

          <form className="flex flex-col md:justify-center md:items-center space-y-4 bg-white shadow-lg">
            <div className="w-full  px-3 mb-6 md:mb-0">
              <label
                className="block  tracking-wide text-gray-700 text-md font-bold mb-2"
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
              <div className="flex flex-col ">
                <label
                  htmlFor="gender"
                  className="block  tracking-wide text-gray-700 text-md font-bold mb-2"
                >
                  Gender:
                </label>
                <select
                  name="gender"
                  id=""
                  className="appearance-none block w-full md:w-[388px] bg-[#F5F5F5] text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  
                >
                  <option value="">Select your Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
            <div className="w-full  px-3 mb-6 md:mb-0">
              <div className="flex flex-col">
                <label
                  htmlFor="dob"
                  className="block  tracking-wide text-gray-700 text-md font-bold mb-2"
                >
                  Date of Birth:
                </label>
                <input
                  name="dob"
                  type="date"
          
                  className="appearance-none block w-full md:w-[388px] bg-[#F5F5F5] text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  
                />
              </div>
            </div>
            <div className="w-full px-3">
              <label
               className="block  tracking-wide text-gray-700 text-md font-bold mb-2"
                htmlFor="grid-password"
              >
                 Address
              </label>
              <input
                className="appearance-none block w-full md:w-[388px] bg-[#F5F5F5] text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-email"
                type="text"
                placeholder="Input Address"
              />
            </div>
            <div className="w-full px-3">
              <label
               className="block  tracking-wide text-gray-700 text-md font-bold mb-2"
                htmlFor="grid-password"
              >
                 Phone Number
              </label>
              <input
                className="appearance-none block w-full md:w-[388px] bg-[#F5F5F5] text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-email"
                type="number"
                placeholder="Input Phone Number"
              />
            </div>
            <div className="w-full  px-3 mb-6 md:mb-0">
              <div className="flex flex-col ">
                <label
                  htmlFor="gender"
                  className="block  tracking-wide text-gray-700 text-md font-bold mb-2"
                >
                  Job Status:
                </label>
                <select
                  name="stats"
                  id=""
                  className="appearance-none block w-full md:w-[388px] bg-[#F5F5F5] text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  
                >
                  <option value="">Select your Job Status</option>
                  <option value="employed">Employed</option>
                  <option value="unemployed">Unemployed</option>
                  <option value="self-employed">Self-Employed</option>
                </select>
              </div>
            </div>
            <div className="w-full  px-3 mb-6 md:mb-0">
              <label
               className="block  tracking-wide text-gray-700 text-md font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Last Type of Job
              </label>
              <input
                className="appearance-none block w-full md:w-[388px] bg-[#F5F5F5] text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Subject"
              />
            </div>
            <div className="w-full  px-3 mb-6 md:mb-0">
              <div className="flex flex-col ">
                <label
                  htmlFor="gender"
                  className="block  tracking-wide text-gray-700 text-md font-bold mb-2"
                >
                  Years of Experience:
                </label>
                <select
                  name="stats"
                  id=""
                  className="appearance-none block w-full md:w-[388px] bg-[#F5F5F5] text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  
                >
                  <option value="">Select your Experience Length</option>
                  <option value="one">1</option>
                  <option value="two">2</option>
                  <option value="three">3</option>
                  <option value="four">4</option>
                  <option value="five">5</option>
                </select>
              </div>
            </div>
            <div className="w-full  px-3 mb-6 md:mb-0">
              <div className="flex flex-col ">
                <label
                  htmlFor="gender"
                  className="block  tracking-wide text-gray-700 text-md font-bold mb-2"
                >
                 Most Recet Qualifications:
                </label>
                <select
                  name="stats"
                  id=""
                  className="appearance-none block w-full md:w-[388px] bg-[#F5F5F5] text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  
                >
                  <option value="">Select your Last Qualification</option>
                  <option value="School Cert">School Cert </option>
                  <option value="WASSCE">WASSCE or equivalent</option>
                  <option value="B.Sc">B.Sc</option>
                  <option value="M.Sc">M.Sc</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="w-full  px-3 mb-6 md:mb-0">
              <label
               className="block  tracking-wide text-gray-700 text-md font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Preferred Career
              </label>
              <input
                className="appearance-none block w-full md:w-[388px] bg-[#F5F5F5] text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Subject"
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
      </main>
      <Footer />
    </>
  );
}

export default Career;
