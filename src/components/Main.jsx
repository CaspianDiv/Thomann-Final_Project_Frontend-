import HighlightSlider from "./HighLightSlider"
import { TfiAngleUp } from "react-icons/tfi";
import TopBrandsSlider from "./TopBrandsSlider";
import OffersSlider from "./OffersSlider";
import OwnWordsSlider from "./OwnWordsSlider"
import NewsCards from "./NewsCards";
import { MdOutlineFacebook } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { GoMegaphone } from "react-icons/go";
import thomannNewsLetter from "../assets/50x50-envelope-newsletter-contest-english.png"
import { IoCheckmark } from "react-icons/io5";
import FeedBackSlider from "./FeedBackSlider";
import ProductsCard from "./ProductsCard";
import {  useEffect, useState } from "react";
import { useParams } from "react-router";
import {  useThomman } from "../context/DataContext";



function Main({ status , searchInpValue}) {

  const {products} = useThomman()
    
  const [feedbackStatus, setFeedBackSideBar] = useState(false);
  const [visibleProducts , setVisibleProducts] = useState(12)
  const [showScrollButton , setShowScrollButton] = useState(false);

  const {category} = useParams();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScrollButton(false)
      }else {
        setShowScrollButton(true)
      }
    }
    window.addEventListener('scroll' , handleScroll)

    return () => window.removeEventListener('scroll' , handleScroll)
  } , []);

  
  function goUp() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
  }

  function handleShowMore() {
    setVisibleProducts(prev => prev + 12)
  };

  function handleShowLess() {
    setVisibleProducts(12)
  };



  return (
    <>  
    {/* Our Categories Section Start */}
     {   
      !status && !category && 
      <section className="py-5 px-5 dark:bg-gray-900 dark:text-[#01b4bc]"> 
          <h2 className="text-[2rem] text-[#1F1F1F] font-bold capitalize text-center dark:text-[#01b4bc]">our categories</h2>
          <div className="xl:grid xl:grid-cols-3 tab:grid tab:grid-cols-2 lg:grid lg:grid-cols-3 ex-sm:grid ex-sm:content-around ex-sm:grid-cols-3 ex-sm:gap-10 content-center p-5 m-auto">
              {
                products
                ?.filter((item , index , array) => 
                  array.findIndex(item => category === item.category) === index
                )
                 .map((item ,i) => 
                  <div key={i} className="flex items-center flex-wrap gap-5 py-5  lg:justify-around xl:justify-around">
                      <img src={item.cat_img} className="w-[80%] lg:w-[30%]" alt={item.category}/>
                      <p  className="xl:text-lg lg:text-lg text-[1.8rem] cursor-pointer hover:text-[#7E00F3]">{item.category}</p>
                  </div>
                )
              }
          </div>
      </section>
      }
         {  
     !showScrollButton &&
       <div onClick={() => goUp()} className="fixed z-10 right-10 bottom-20 dark:hover:bg-[#01b4bc] dark:bg-gray-700  dark:hover:text-black bg-black p-5 rounded-full text-white transition-all  hover:bg-[#7E00F3] cursor-pointer">
          <TfiAngleUp className="text-[3rem] lg:text-xl xl:text-xl"  />
      </div>
    }
    {/* Our Categories Section End */}
    {/* Products Maping Area  Start */}
             { 
            
              <>
                  <h4 className="text-center text-[2rem] font-bold underline underline-offset-6 pt-20 lg:p-0 xl:p-0 decoration-[#7E00F3] dark:bg-gray-900 dark:text-[#01b4bc]">Products</h4>
                  <div className="flex justify-center flex-wrap gap-5 py-5 dark:bg-gray-900 px-5">
                    {
                      products
                      ?.filter(item => item.name.toLowerCase().includes(searchInpValue.toLowerCase()))
                      ?.filter(item => !category || item.category === category)
                      ?.slice(0 , visibleProducts)
                      ?.map((item , i) => <ProductsCard key={i} item={item}  products={products}  />)
                        
                    }
                  </div>
                  
                  {
                    products?.length > 12 && (
                      <div className="text-center py-5 dark:bg-gray-900">

                        { !status &&
                          visibleProducts < products.length && (
                          <button onClick={handleShowMore} className="bg-[#7e00f3] text-white font-bold px-8 py-3 rounded-full cursor-pointer hover:bg-[#470188] transition-all duration-300 dark:bg-gray-800 dark:hover:bg-[#01b4bc] dark:text-[#01b4bc] dark:hover:text-gray-800 mr-3 text-2xl">
                            Show More ({products.length - visibleProducts}more)
                          </button>
                        )}
                        { !status && 
                          visibleProducts > 12 && (
                          <button onClick={handleShowLess} className="bg-gray-600 text-white font-bold px-8 py-3 rounded-full cursor-pointer hover:bg-gray-700 transition-all duration-300 dark:bg-gray-800 dark:text-[#01b4bc] dark:hover:bg-gray-700 text-2xl">
                            Show Less
                          </button>
                        )}

                      </div>
                    )
                  }

             </>}
    {/* Products Maping Area  End */}
    {/* Product Highlights Section Start  */}
    <section className="dark:bg-gray-900 dark:text-[#01b4bc]">
          <h2 className="text-[2rem]   text-[#1F1F1F] font-bold capitalize text-center underline dark:text-[#01b4bc] decoration-[7px] pt-10 decoration-[#7E00F3] underline-offset-8">product highlights</h2>
          <HighlightSlider  />
    </section>
    {/* Product Highlights Section End  */}
    {/* Top Brands Section Start */}
        <section className="dark:bg-gray-900 dark:text-[#01b4bc]"> 
              <h2 className="capitalize font-bold underline decoration-8 underline-offset-8 dark:decoration-[#7E00F3] decoration-cyan-400 text-center text-[2rem]">top brands</h2>
              <TopBrandsSlider />
              <div className="text-center">
                <button className="bg-black text-white font-bold px-10 py-3 rounded-full cursor-pointer hover:bg-[#7E00F3] transition-all duration-300 dark:text-[#01b4bc] dark:hover:bg-[#01b4bc] dark:bg-gray-800 dark:hover:text-gray-800 text-2xl">All Brands</button>
              </div>
        </section>
    {/* Top Brands Section End */}
    {/* Offers Section Start */}
          <section className="dark:bg-gray-900 dark:text-[#01b4bc]">
              <h2 className="capitalize text-center text-[2rem] dark:text-[#01b4bc] text-black font-bold underline underline-offset-8 decoration-8 pt-20 decoration-[#7E00F3]">offers</h2>
              <OffersSlider />
          </section>
    {/* Offers Section End */}
    {/*  In Own Words Section Start */}
              <section className="dark:bg-gray-900 dark:text-[#01b4bc]">
                  <h2 className="capitalize text-[2rem] font-bold text-center py-5">in your own words</h2>
                  <OwnWordsSlider  />
              </section>
    {/* In Own Words Section End */}
    {/* Thomann News Section  Start*/}
                <section className="dark:bg-gray-900 dark:text-[#01b4bc]">
                    <h2 className="capitalize font-bold text-[2rem] text-center">thomann news</h2>
                    <div className="flex flex-wrap justify-center items-center p-10 gap-5 m-auto">
                          <NewsCards />
                    </div>
                </section>
    {/* Thomann News Section End */}
    {/* Give Feedback and Sign Up Bottom Section Start */}
                <section className="dark:bg-gray-900 dark:text-[#01b4bc]">
                      <hr className="border-2 border-gray-100 dark:border-gray-700" />
                      <h2 className="text-center tab:text-[1.25rem] text-[2rem] font-bold text-[#1F1F1F] dark:text-[#01b4bc] py-5">Do you like what you're seeing?</h2>
                      <div className="ex-sm:flex ex-sm:justify-center ex-sm:items-center gap-2 ex-sm:flex-wrap ">
                        <a target="_blank" rel="noopenner noreferrer" href="https://www.facebook.com/share.php?u=https%3A%2F%2Fwww.thomannmusic.com%2F" className="capitalize flex items-center gap-3 bg-gray-200 duration-300 ex-sm:px-3 ex-sm:py-2 dark:bg-gray-800  dark:text-[#01b4bc] dark:hover:bg-[#01b4bc] dark:hover:text-gray-800  tab:px-8 tab:py-3 px-8 py-3 hover:bg-gray-300 transition-colors cursor-pointer rounded-full font-bold tab:text-lg lg:text-lg xl:text-lg">
                          <MdOutlineFacebook size={40} />
                          <p className="text-2xl">share</p>
                        </a>
                        <a className="capitalize flex items-center gap-3 bg-gray-200 dark:bg-gray-800 dark:hover:text-gray-800 dark:hover:bg-[#01b4bc] px-8 py-3 ex-sm:px-3 ex-sm:py-2 tab:px-8 tab:py-3 tab:text-lg hover:bg-gray-300 transition-colors cursor-pointer rounded-full font-bold lg:text-lg xl:text-lg">
                            <AiOutlineMail size={40} />
                          <p className="text-2xl">email</p>
                        </a>
                        <a onClick={() => setFeedBackSideBar(true)} className="capitalize flex items-center gap-3 bg-gray-900 dark:bg-gray-800 dark:text-[#01b4bc] dark:hover:bg-[#01b4bc] dark:hover:text-gray-800 text-white px-8 py-3 ex-sm:px-3 ex-sm:py-2 tab:px-8 tab:py-3 tab:text-lg transition-colors cursor-pointer hover:bg-[#470188]  rounded-full font-bold lg:text-lg xl:text-lg">
                            <GoMegaphone size={40} />
                            <p className="text-2xl">give feedback</p>
                        </a>
                      </div>
                 <div className="lg:flex lg:justify-around  xl:justify-around px-5 py-5">
                          <div className="py-5 lg:flex lg:gap-5 xl:flex xl:gap-5">
                          <div>
                                <img src={thomannNewsLetter} className="w-25 m-auto" alt="Thomann Newsletter image"/>
                          </div>
                           <div>
                            <h5 className="capitalize font-bold text-[#1f1f1f] dark:text-[#01b4bc] text-[2rem] leading-10 ex:sm:text-center tab:text-center dl:text-center nm:text-center lg:text-start xl:text-start tab:text-[1.37rem] tab-md:text-[1.5rem] ex-sm:text-center">thomann newsletter</h5>
                            <p className="text-[#1f1f1f] text-[1.8rem] py-10 dark:text-[#01b4bc]  tab:text-[1rem] md:text-center tab-md:text-[1.1rem] lg:text-start xl:text-start">Subscribe to the Thomann Newsletter and with a bit of luck win one of 50 vouchers worth €50 each!</p>
                            <ul className="ex-sm:flex ex-sm:flex-wrap ex-sm:justify-center py-3 ex-sm:items-center ex-sm:gap-3 lg:flex-col xl:flex-col lg:justify-start xl:justify-start lg:items-start xl:items-start">
                              <li className="flex items-center  gap-1">
                                  <IoCheckmark size={30}  />
                                  <p className="text-2xl tab-md:text-[1rem]">Inspirational contributions</p>
                              </li>
                              <li className="flex items-center gap-1 flex-wrap">
                                  <IoCheckmark  size={30}/>
                                  <p className="text-2xl tab-md:text-[1rem]">Deals</p>
                              </li>
                              <li className="flex items-center gap-1 flex-wrap">
                                  <IoCheckmark  size={30}/>
                                  <p className="text-2xl tab-md:text-[1rem]">Thomann Insights</p>
                              </li>
                            </ul>
                           </div>
                          </div>
                          <div className="py-5 lg:w-1/2">
                            <div className="flex flex-col items-center lg:items-end gap-3">
                                <div className="flex justify-center items-center w-full  lg:justify-end gap-3">
                                    <input  className="w-full lg:w-75 xl:w-100 outline-0 ring-0 hover:ring-[#7E00F3] dark:outline-2 dark:focus:ring-2 dark:placeholder:text-[#01b4bc] dark:focus:ring-[#01b4bc] dark:hover:ring-[#01b4bc] dark:bg-gray-700 dark:text-[#01b4bc] p-4 rounded-full dark:outline-[#01b4bc] transition-colors dark:hover:ring-2 text-black focus:ring-1 text-2xl lg:text-xl xl:text-xl focus:ring-[#7E00F3]  hover:ring-1" placeholder="Email addres*" type="email"/>
                                    <button className="bg-gray-900 text-white font-bold dl:w-full nm:w-full tab:w-50  ex-sm:w-full py-3 dark:bg-gray-800 dark:text-[#01b4bc] dark:hover:bg-[#01b4bc] dark:hover:text-gray-800 rounded-full my-4 cursor-pointer hover:bg-[#470188] transition-colors text-2xl lg:text-xl xl:text-xl">Sign up now</button>
                                </div>
                            </div>
                               <div className="py-4">
                                    <p className="text-gray-500 text-[1.5rem] dark:text-[#01b4bc]   text-center lg:text-end xl:text-end xl:text-sm lg:text-sm">By clicking on "Sign up now", you agree to receiving e-mail advertising. You can unsubscribe at any time. You can find further information on the newsletter in our <span className="underline cursor-pointer hover:text-[#7E00F3]">data protection guideline.</span></p>
                                    <p className="text-[1.6rem] text-center pt-5 dark:text-[#01b4bc]  text-gray-500 lg:text-start xl:text-end xl:text-sm lg:text-sm">* Required</p>
                               </div>
                          </div>
                   </div>
                   <FeedBackSlider feedbackStatus={feedbackStatus} setFeedBackSideBar={setFeedBackSideBar} />
                </section>
    {/* Give Feedback and Sign Up Bottom Section End */}
    </>
  )
}

export default Main