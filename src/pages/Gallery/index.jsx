import { useState } from 'react'


import Nav from '../../components/navigation/Navigation';
import Footer from "../../components/footer";

function Gallery() {
  const [count, setCount] = useState(0)

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
              <div className='md:w-2/3 justify-end flex'>
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
            <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
              <img src="https://source.unsplash.com/bYuI23mnmDQ" alt="" />
              <img src="https://source.unsplash.com/Nllx4R-2c3o" alt="" />
              <img src="https://source.unsplash.com/lp40q07DIe0" alt="" />
              <img src="https://source.unsplash.com/wfalq01jJuU" alt="" />
              <img src="https://source.unsplash.com/rMHNK_skwwU" alt="" />
              <img src="https://source.unsplash.com/WBMjuGpbrCQ" alt="" />
              <img src="https://source.unsplash.com/nCUZ5BYBL_o" alt="" />
              <img src="https://source.unsplash.com/3u4fzMQZhjc" alt="" />
              <img src="https://source.unsplash.com/haOIqIPSwps" alt="" />
              <img src="https://source.unsplash.com/3UrYD7NNVxk" alt="" />
              <img src="https://source.unsplash.com/fm1JKDItlVM" alt="" />
              <img src="https://source.unsplash.com/qPpq1EVs8vw" alt="" />
              <img src="https://source.unsplash.com/xRyL63AwZFE" alt="" />
              <img src="https://source.unsplash.com/XeNKWTiCPNw" alt="" />
              <img src="https://source.unsplash.com/DFt3T5r_4FE" alt="" />
              <img src="https://source.unsplash.com/Ebwp2-6BG8E" alt="" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Gallery
