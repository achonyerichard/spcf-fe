import { useEffect, useState } from "react";
import getBlogs from "../../data/blogData";

import Nav from "../../components/navigation/Navigation";
import Footer from "../../components/footer";
import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";

function NewsDetails() {
  const { id } = useParams();
  const [data, isLoading, error] = useApi(
    "https://spcf-api.onrender.com/news/public"
  );
  const [filteredData, setFilteredData] = useState([]);


useEffect(()=>{
  const filteredBlogs = data?.news?.filter(
    (news) => news?._id === id
  );
 
  setFilteredData(filteredBlogs);

},[])
  
  return (
    <>
      <Nav />
      <main>
        <section className="mb-20 mt-20">
          <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
          {isLoading &&  <section className="text-gray-700 body-font text-center overflow-hidden flex justify-center max-w-2xl mx-auto">
                <div className="container px-5 py-24 mx-auto">

                  <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-full">
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
              </section>}
            <div
              className={`text-center overflow-hidden flex justify-center max-w-2xl mx-auto`}
              title="Blog"
            >
              <img
                alt="blog-img"
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
                className="object-cover "
              />
            </div>
            <div className="max-w-2xl mx-auto">
              <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                <div className="">
                  <h1
                    href="#"
                    className="text-gray-900 font-bold text-3xl mb-2 text-center"
                  >
                    {filteredData?.[0]?.title}
                  </h1>

                  <p className="text-[#908D7E] leading-8 my-5 text-center">
                    {filteredData?.[0]?.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default NewsDetails;
