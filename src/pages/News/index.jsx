import { useEffect, useState } from "react";
import getBlogs from "../../data/blogData";

// import './App.css'

import { Link, NavLink } from "react-router-dom";

import Nav from "../../components/navigation/Navigation";
import Footer from "../../components/footer";
import { BsSearch } from "react-icons/bs";
import { FaEye, FaFilter } from "react-icons/fa";

function News() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const copyData = getBlogs();
    console.log(copyData);
    setData(copyData);
  }, []);
  console.log("ffgfgf", data);
  return (
    <>
      <Nav />
      <main>
        <div className="">
          <section className="mb-20 mt-20">
            <div className=" md:h-[329px] h-60 w-full flex flex-col items-center justify-center text-center bg-white ">
              <div className="px-4 sm:px-6 lg:px-8 z-10 ">
                <div className="text-center">
                  <h2 className="lg:text-7xl tracking-tight leading-10 font-bold  text-center text-[#FBCF09] sm:leading-none text-3xl md:text-[53px] ">
                    News
                  </h2>
                </div>
              </div>
            </div>
            <div className="md:mx-20 mx-5   bg-white  -mt-12 z-20  px-5 md:py-10 py-5  rounded-lg">
              <div className="md:flex items-center justify-center gap-12 ">
                <div className="md:w-1/3">
                  <div className="relative flex items-center justify-center mb-5 md:mb-0">
                    <input
                      id="twitter"
                      type="text"
                      className="appearance-none  px-3 py-4 block w-full md:w-[291px]  text-base text-appBlack bg-[#F5F5F5]  focus:bg-white peer relative h-10 leading-tight focus:outline-none   pl-8 pr-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg"
                    />
                    <span className="flex items-center material-symbols-outlined absolute left-2 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                      {" "}
                      <BsSearch className={`text-xl text-[#908D7E] mr-2`} />
                    </span>
                  </div>
                </div>
                <div className="md:w-1/3  flex justify-center mb-5 md:mb-0">
                  <div className=" flex items-center gap-6 ">
                    <h1 className="text-lg text-[#FBCF09]">All</h1>
                    <h1 className="text-lg text-black">Recent</h1>
                    <h1 className="text-lg text-black">Featured</h1>
                    <h1 className="text-lg text-black">Older</h1>
                  </div>
                </div>
                <div className="md:w-1/3  flex md:justify-end justify-center">
                  <div className="flex items-center gap-2">
                    <div>
                      <img alt="grid " src="img/news-grid-1.png" />
                    </div>
                    <div>
                      <img alt="grid " src="img/news-grid-2.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="mt-20 mb-20 items-center">
            <div className="container md:mx-auto px-5">
              <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 md:gap-10">
                {data.map((news) => (
                  <div
                    className="rounded  shadow-lg"
                    key={news.id}
                  >
                    
                      <div className="">
                        <img
                          className="md:w-[382px] w-96 md:h-[164px] rounded-t-lg md:object-cover"
                          src={news?.img}
                          alt="Sunset in the mountains"
                        />
                     
                      </div>
                   
                    <div className="px-6 py-4 bg-white">
                      <a
                        href="#"
                        className="font-semibold text-2xl inline-block text-[#908D7E] transition duration-500 ease-in-out"
                      >
                        {news?.title}
                      </a>
                      <p className="text-black text-lg font-semibold pt-5">
                        {news?.author}
                      </p>
                      <p className="text-[#908D7E] text-md pt-5">
                        {`${news?.content.slice(0, 100)} ...`}
                      </p>
                    </div>
                    <div className="px-6 py-4 flex flex-row items-center justify-end">
                      <Link to={`/news/${news?.id}`}>
                        <span
                          href="#"
                          className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center"
                        >
                          <FaEye className="text-lg fill-[#908D7E]" />

                          <span className="ml-1 text-[#FBCF09]">View</span>
                        </span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default News;
