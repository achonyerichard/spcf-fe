import { useEffect, useState } from "react";

// import './App.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

import { Pagination, Navigation, Autoplay } from "swiper";
import Nav from "../../components/navigation/Navigation";
import Footer from "../../components/footer";

function Home() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Nav />
      <main className="overflow-hidden">
        <section className="">
        <Swiper
          centeredSlides
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              className={` h-screen w-auto  flex items-center bg-[url('../img/hero.jpg')] bg-blend-multiply bg-[#FCD733]  justify-center text-center  z-10  bg-center  bg-no-repeat  `}
            >
              <main className=" sm:px-6  z-10    lg:mx-auto lg:px-20 flex lg:flex-row flex-col items-center justify-between pt-10">
                <div className="  lg:w-1/2 ">
                  <h2 className="lg:text-7xl tracking-tight leading-10 font-bold  text-left text-white sm:leading-none text-3xl md:text-[53px] ">
                    Join Hands To Make The Lives of An{" "}
                    <span className="text-[#9C5513]">Ordinary Citizen</span>{" "}
                    Counts
                  </h2>
                  <div className="lg:w-1/2 flex lg:justify-end justify-center lg:hidden ">
                    <img
                      alt="Hero Imge"
                      src={"/img/hero-slide-1.png"}
                      className="object-cover lg:w-[544px] lg:h-[489px]  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 "
                    />
                  </div>
                  <p className="mt-3 text-white sm:mt-5 text-lg sm:max-w-xl text-left md:mt-5 animate-typing">
                    Lets make the world a better place by contributing to the
                    lives of the needy in little ways.
                  </p>
                  <div className="mt-5 sm:mt-8">
                    <div className="rounded-md ">
                      <button className="w-[186px] h-[48px] flex items-center justify-center px-8 py-3  text-appWhite text-base leading-6 font-regular rounded-md text-white bg-[#FF8B1F] transition duration-150 ease-in-out md:py-4 md:px-10">
                        Get started
                      </button>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 lg:flex justify-end hidden">
                  <img
                    alt="Hero Imge"
                    src={"/img/hero-slide-1.png"}
                    className="object-cover lg:w-[544px] lg:h-[489px] "
                  />
                </div>
              </main>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`relative h-screen w-full flex items-center bg-[url('../img/hero.jpg')] bg-blend-multiply bg-[#FCD733]  justify-center text-center  z-10  bg-center  bg-no-repeat  `}
            >
              <main className=" sm:px-6  z-10 lg:max-w-[1920px] w-full px-4 lg:mx-auto lg:px-20 flex lg:flex-row flex-col items-center justify-between pt-10">
                <div className="  lg:w-1/2 ">
                  <h2 className="lg:text-7xl tracking-tight leading-10 font-bold  text-left text-white sm:leading-none text-3xl md:text-[53px] ">
                    Join Hands To Make The Lives of An{" "}
                    <span className="text-[#9C5513]">Ordinary Citizen</span>{" "}
                    Counts
                  </h2>
                  <div className="lg:w-1/2 flex lg:justify-end justify-center lg:hidden">
                    <img
                      alt="Hero Imge"
                      src={"/img/hero-slide-1.png"}
                      className="object-cover lg:w-[544px] lg:h-[489px] "
                    />
                  </div>
                  <p className="mt-3 text-white sm:mt-5 text-lg sm:max-w-xl text-left md:mt-5 ">
                    Lets make the world a better place by contributing to the
                    lives of the needy in little ways.
                  </p>
                  <div className="mt-5 sm:mt-8">
                    <div className="rounded-md ">
                      <button className="w-[186px] h-[48px] flex items-center justify-center px-8 py-3  text-appWhite text-base leading-6 font-regular rounded-md text-white bg-[#FF8B1F] transition duration-150 ease-in-out md:py-4 md:px-10">
                        Get started
                      </button>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 lg:flex justify-end hidden">
                  <img
                    alt="Hero Imge"
                    src={"/img/hero-slide-1.png"}
                    className="object-cover lg:w-[544px] lg:h-[489px] "
                  />
                </div>
              </main>
            </div>
          </SwiperSlide>
        </Swiper>
        </section>
      

        <section className="mt-10 mb-20">
          <div className="container mx-auto ">
            <div className="lg:flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-2/3 px-4">
                <span>
                  <p
                    className="text-sm font-bold leading-relaxed m-4 text-[#FF8B1F]
"
                  >
                    We at SPCF
                  </p>
                </span>
                <h2 className="text-xl font-semibold text-black">
                  We Make A Difference
                </h2>
                <p className="text-lg font-medium leading-relaxed m-4 text-[#605B47]">
                  {" "}
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
            <div className="lg:flex gap-y-2 px-4 gap-8 items-center justify-center  font-medium container mx-auto pt-20">
              <div
                className=" px-4 bg-white rounded-lg shadow-lg lg:w-1/4 pb-20"
                data-aos="fade-right"
                data-aos-duration="3000"
              >
                <div className="flex flex-col  items-center justify-center mb-6">
                  <div className="text-gray-900 mb-2 p-3 w-[70px] h-[70px] shadow-lg rounded-full bg-[#FFFAE6] inline-flex items-center justify-center bg-appOrange">
                    <img
                      className="w-full"
                      alt="fries"
                      src={"/img/fries.png"}
                    />
                  </div>
                  <h2 className="text-black text-2xl font-semibol">
                    Supermarket
                  </h2>
                </div>
                <div>
                  <div className="flex items-center justify-center">
                    <div>
                      <h4 className="text-appTextGray  text-[#908D7E] text-center">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit.
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className=" px-4 bg-white rounded-lg shadow-lg lg:w-1/4 pb-20"
                data-aos="fade-right"
                data-aos-duration="3000"
              >
                <div className="flex flex-col  items-center justify-center mb-6">
                  <div className="text-gray-900 mb-2 p-3 w-[70px] h-[70px] shadow-lg rounded-full bg-[#FFFAE6] inline-flex items-center justify-center bg-appOrange">
                    <img className="w-full" alt="fries" src={"/img/bowl.png"} />
                  </div>
                  <h2 className="text-black text-2xl font-semibol">Feeding</h2>
                </div>
                <div>
                  <div className="flex items-center justify-center">
                    <div>
                      <h4 className="text-appTextGray  text-[#908D7E] text-center">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit.
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className=" px-4 bg-white rounded-lg shadow-lg lg:w-1/4 pb-20"
                data-aos="fade-left"
                data-aos-duration="3000"
              >
                <div className="flex flex-col  items-center justify-center mb-6">
                  <div className="text-gray-900 mb-2 p-3 w-[70px] h-[70px] shadow-lg rounded-full bg-[#EBFDE6] inline-flex items-center justify-center bg-appOrange">
                    <img
                      className="w-full"
                      alt="fries"
                      src={"/img/orange.png"}
                    />
                  </div>
                  <h2 className="text-black text-2xl font-semibol">Barcodes</h2>
                </div>
                <div>
                  <div className="flex items-center justify-center">
                    <div>
                      <h4 className="text-appTextGray  text-[#908D7E] text-center">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit.
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className=" px-4 bg-white rounded-lg shadow-lg lg:w-1/4 pb-20"
                data-aos="fade-left"
                data-aos-duration="3000"
              >
                <div className="flex flex-col  items-center justify-center mb-6">
                  <div className="text-gray-900 mb-2 p-3 w-[70px] h-[70px] shadow-lg rounded-full bg-[#FFFAE6] inline-flex items-center justify-center bg-appOrange">
                    <img className="w-full" alt="fries" src={"/img/rice.png"} />
                  </div>
                  <h2 className="text-black text-2xl font-semibol">
                    Verification
                  </h2>
                </div>
                <div>
                  <div className="flex items-center justify-center">
                    <div>
                      <h4 className="text-appTextGray  text-[#908D7E] text-center">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit.
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white p-8 lg:px-40 w-full lg:mt-28">
          <div className="flex flex-col items-center lg:max-w-[1920px] lg:mx-auto lg:grid lg:grid-cols-2 lg:gap-12 lg:py-8">
            <div>
              <img src={"/img/hero-2.png"} alt="What's happening" />
            </div>
            <div
              className="my-8 lg:flex lg:flex-col  -center  "
              data-aos="zoom-in-up"
              data-aos-duration="3000"
            >
              <span>
                <p
                  className="text-sm font-bold leading-relaxed m-4 text-[#FF8B1F]
"
                >
                  About SPCF
                </p>
              </span>
              <h2 className="text-[#2C2917] text-left font-semibold text-3xl md:text-5xl">
                <span className="text-[#FBCF09]">Senior</span> Citizens <br/>Are Not
                Left behind
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
        <section className="bg-white p-8 lg:px-40 w-full lg:mt-20">
          <div className="flex flex-col items-center lg:max-w-[1920px] lg:mx-auto lg:grid lg:grid-cols-2 lg:gap-12 lg:py-8">
            <div
              className="my-8 lg:flex lg:flex-col  -center "
              data-aos-duration="3000"
              data-aos="zoom-in-down"
            >
              <h2 className="text-[#2C2917] text-left font-semibold text-3xl md:text-5xl">
                <span className="text-[#FBCF09]">Children</span><br/> are a key
                player to sustainable growth.
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
            <div className="flex justify-end">
              <img src={"/img/hero-3.png"} alt="What's happening" />
            </div>
          </div>
        </section>
        <section className="bg-white  w-full lg:mt-28 mb-20  ">
          <div
            className={`lg:px-40  h-full w-full flex items-center justify-center text-center bg-cover bg-blend-overlay bg-center bg-no-repeat  bg-[url('../public/img/section-2.jpg')]`}
          >
            <main
              className="px-4 sm:px-6 lg:px-8 z-10"
              data-aos="zoom-out-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className="text-center py-20 flex flex-col justify-center">
                <p className="mt-3 text-[#FBCF09] sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5 lg:w-2/3 pb-5">
                  We are committed in reaching to feed thousands of vulnerables
                  and reach a wider audience by 2030.
                </p>
                <h2 className="lg:text-8xl tracking-tight leading-10 font-bold sm:text-5xl text-white sm:leading-none text-3xl md:text-6xl animate-typing whitespace-nowrap overflow-hidden">
                  785,500
                </h2>
                <p className="mt-3 text-white sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5 ">
                  People we target to reach.
                </p>

                <div className="mt-5 sm:mt-8 flex justify-center items-center">
                  <div className="rounded-md shadow">
                    <Link href="auth/login">
                      <button className="h-[48px] flex w-[186px] items-center justify-center px-8 py-3 text-appWhite text-base leading-6 font-regular rounded-md text-white bg-[#FF8B1F]  focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:px-10">
                        Get started
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="relative pt-20">
                  <img alt="video" src={"img/video-bg.png"} />
                  <div className="absolute top-44 left-[250px]">
                    <img alt="player" src={"img/player.png"} />
                  </div>
                </div>
              </div>
            </main>
          </div>
        </section>
        <section className="py-8 lg:px-40 mb-20 px-4">
          <div className="flex flex-col justify-center items-center mb-6 ">
            <span>
              <p className="text-md font-bold leading-relaxed pb-2 text-[#FF8B1F] ">
                Our Gallery
              </p>
            </span>
            <p className="text-lg text=[#605B47] text-center">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.{" "}
            </p>
          </div>
          <div className="flex flex-wrap -mx-4 -mb-8">
            <div className="md:w-1/4 px-4 mb-8">
              <img
                className="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div className="md:w-1/4 px-4 mb-8">
              <img
                className="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div className="md:w-1/4 px-4 mb-8">
              <img
                className="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div className="md:w-1/4 px-4 mb-8">
              <img
                className="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div className="md:w-1/4 px-4 mb-8">
              <img
                className="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div className="md:w-1/4 px-4 mb-8">
              <img
                className="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div className="md:w-1/4 px-4 mb-8">
              <img
                className="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div className="md:w-1/4 px-4 mb-8">
              <img
                className="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
