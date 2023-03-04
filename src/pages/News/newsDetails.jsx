import { useEffect, useState } from "react";
import getBlogs from "../../data/blogData";

import Nav from "../../components/navigation/Navigation";
import Footer from "../../components/footer";
import { useParams } from "react-router-dom";

function NewsDetails() {
  const { id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    const copyData = getBlogs();
    console.log(id);
    console.log("data", copyData);
    const filteredBlogs = copyData.filter((news) => news?.id === parseInt(id));
    console.log("ffgfgf", filteredBlogs);
    setData(filteredBlogs);
  }, []);
  console.log(data[0]?.img);
  return (
    <>
      <Nav />
      <main>
        <section className="mb-20 mt-20">
          <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
            <div
              className={`text-center overflow-hidden flex justify-center max-w-2xl mx-auto`}
              title="Blog"
            ><img alt="blog-img" src={data[0]?.img} className="object-cover "/></div>
            <div className="max-w-2xl mx-auto">
              <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                <div className="">
                 
                  <h1
                    href="#"
                    className="text-gray-900 font-bold text-3xl mb-2"
                  >
                   {data[0]?.title}
                  </h1>
                
                  <p className="text-[#908D7E] leading-8 my-5">
                  {data[0]?.content}
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
