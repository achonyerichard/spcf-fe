import { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";

import Nav from "../../components/navigation/Navigation";
import Footer from "../../components/footer";

function Gallery() {
  const [data, isLoading, error] = useApi(
    "http://spcf-api.onrender.com/images/public"
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Nav />
      <main>
        <section className="relative h-[489px] w-full flex items-center justify-center text-center bg-cover bg-center bg-[url('../public/img/gallery-bg.png')] mb-20">
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-800/10 opacity-75"></div>

          <div className="px-4 sm:px-6 lg:px-8 z-10">
            <div className="text-center">
              <h2 className="text-4xl tracking-tight leading-10  sm:text-5xl text-white sm:leading-none md:text-6xl font-bold">
                Our Photo Gallery
              </h2>

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
        <section>
          <div className="md:px-20 px-4">
            <div className="md:flex items-center pb-10">
              <div className="md:w-1/3">
                <input
                  className="appearance-none block w-full border border-gray-400  bg-[#F5F5F5] text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Search..."
                />
              </div>
              <div className="md:w-2/3 justify-end flex">
                <div className=" flex flex-col justify-center items-center">
                  <div className="flex space-x-2 space-y-2 flex-wrap justify-center items-baseline">
                    <div className="bg-gray-200 text-gray-900 py-3 px-6 rounded-full text-lg font-medium hover:bg-[#FCD733] hover:text-white">
                      All
                    </div>
                    <div className="bg-gray-200 text-gray-900 py-3 px-6 rounded-full text-lg font-medium hover:bg-[#FCD733] hover:text-white">
                      Pending
                    </div>
                    <div className="bg-gray-200 text-gray-900 py-3 px-6 rounded-full text-lg font-medium hover:bg-[#FCD733] hover:text-white">
                      Health Care
                    </div>
                    <div className="bg-gray-200 text-gray-900 py-3 px-6 rounded-full text-lg font-medium hover:bg-[#FCD733] hover:text-white">
                      Videos
                    </div>
                    <div className="bg-gray-200 text-gray-900 py-3 px-6 rounded-full text-lg font-medium hover:bg-[#FCD733] hover:text-white">
                      Nutrition
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {isLoading && (
              <section className="text-gray-700 body-font">
                <div className="container px-5 py-24 mx-auto">
              
                  <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/3">
                      <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                        <div className="lg:h-48 bg-gray-400 md:h-36 w-full object-cover object-center"></div>
                        <div className="p-6">
                          <h2 className="bg-gray-400 animate-pulse h-4 w-1/4 mb-2"></h2>
                          <h1 className="w-1/2 mb-4 h-6 animate-pulse bg-gray-500"></h1>
                          <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></p>
                          <p className="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400"></p>
                          <p className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400"></p>
                          <div className="flex items-center flex-wrap ">
                            <a className="bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0"></a>
                            <span className="bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                      <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                        <div className="lg:h-48 bg-gray-400 md:h-36 w-full object-cover object-center"></div>
                        <div className="p-6">
                          <h2 className="bg-gray-400 animate-pulse h-4 w-1/4 mb-2"></h2>
                          <h1 className="w-1/2 mb-4 h-6 animate-pulse bg-gray-500"></h1>
                          <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></p>
                          <p className="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400"></p>
                          <p className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400"></p>
                          <div className="flex items-center flex-wrap ">
                            <a className="bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0"></a>
                            <span className="bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                      <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                        <div className="lg:h-48 bg-gray-400 md:h-36 w-full object-cover object-center"></div>
                        <div className="p-6">
                          <h2 className="bg-gray-400 animate-pulse h-4 w-1/4 mb-2"></h2>
                          <h1 className="w-1/2 mb-4 h-6 animate-pulse bg-gray-500"></h1>
                          <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></p>
                          <p className="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400"></p>
                          <p className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400"></p>
                          <div className="flex items-center flex-wrap ">
                            <a className="bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0"></a>
                            <span className="bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}
            <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
              {error && (
                <div className="flex justify-center items-center mx-auto text-red-600">
                  <h1 className="text-2xl">Error: {error}</h1>
                </div>
              )}

              {data?.images?.map((datas) => (
                <img
                  key={datas?._id}
                  src={`http://spcf-api.onrender.com/static/gallery/${datas?._id}.webp`}
                  alt=""
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Gallery;
