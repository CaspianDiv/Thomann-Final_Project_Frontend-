import {   useEffect,  useState } from "react";
import thomannLogo from "../assets/thomman_light_logo_.svg";
import thomannDarkLogo from "../assets/thomman_dark_logo.png";
import usaSvg from "../assets/us.svg";
import FlagSideBar from "./FlagsSideBar";
import { PiUserCircle, PiShoppingCartLight, PiMagnifyingGlassThin, PiSunLight, PiMoon } from "react-icons/pi";
import UserLoginSideBar from "./UserLoginSideBar";
import CatalogSideBar from "./CatalogSideBar";
import {IoMdHeartEmpty } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import HiEmojiSvg from "../assets/emoji-hug.svg";
import Slider from "./HeroSlider";
import moneyBackSvg from "../assets/money_back.svg";
import yearsWarranty from "../assets/warranty.svg";
import serviceRepair from "../assets/service_repair.svg";
import biggestWareHouse from "../assets/biggest_warehouse.svg";
import "../CSS/app.css";
import { Link, NavLink, useLocation, useParams } from "react-router";
import {  useThomman } from "../context/DataContext";





function Header({ status , setStatus, setSearchValue}) {

    const {products} = useThomman()
    
    const [flagStatus, setFLagStatusSideBar] = useState(false);
    const [userStatus, setUserStatusSideBar] = useState(false);
    const [catalogStatus, setCatalogSideBar] = useState(false);
    const [basketCount , setBasketCount] = useState(0);
    const [favCount , setFavCount] = useState(0);
    const [theme , setTheme] = useState(true);
    
    
    const location = useLocation();

    const {category} = useParams()
    const isDetailPage = location.pathname.startsWith("/details/");
    const isBaskePage = location.pathname.startsWith("/Basket");
    const isFavoruitePage = location.pathname.startsWith("/WishList");
    const isSignUpPage = location.pathname.startsWith("/register/sign-up");
    const isSignInPage = location.pathname.startsWith("/register/sign-in");
    const isUserDashboardPage = location.pathname.startsWith("/userDashboard");
    
    function updateBasketCount() {
        try {
            const basketLocal = localStorage.getItem("basketList")

            if (basketLocal) {
                const parsed = JSON.parse(localStorage.getItem("basketList")) || [];

                if (Array.isArray(parsed)) {
                    const totalCount = parsed.reduce((sum , item) => sum + (item.quantity || 1) , 0);
                    setBasketCount(totalCount)
                }else {
                    setBasketCount(0);
                }
            }else {
                setBasketCount(0);
            }

        } catch (error) {
            console.error("error loading cart number" , error);
        }
    };

    useEffect(() => {
        updateBasketCount();

        const handleBasketUpdate = () => {
            updateBasketCount();
        };

        window.addEventListener("basketUpdated" , handleBasketUpdate);

        window.addEventListener("storage" , handleBasketUpdate);

        return () => {
            window.removeEventListener("basketUpdated" , handleBasketUpdate);
            window.removeEventListener("storage" , handleBasketUpdate);
        }
    }, []);
    

      function updateFavCount() {
        try {
            const favLocal = localStorage.getItem("favList")

            if (favLocal) {
                const parsedFav = JSON.parse(localStorage.getItem("favList")) || [];

                if (Array.isArray(parsedFav)) {
                    const totalCount = parsedFav.reduce((sum , item) => sum + (item.quantity || 1) , 0);
                    setFavCount(totalCount)
                }else {
                    setFavCount(0);
                }
            }else {
                setFavCount(0);
            }

        } catch (error) {
            console.error("error loading cart number" , error);
        }
    };

    useEffect(() => {
        updateFavCount();

        const handleFavUpdate = () => {
            updateFavCount();
        };

        window.addEventListener("favListUpdated" , handleFavUpdate);

        window.addEventListener("storageFav" , handleFavUpdate);

        return () => {
            window.removeEventListener("favListUpdated" , handleFavUpdate);
            window.removeEventListener("storageFav" , handleFavUpdate);
        }
    }, []);



    useEffect(() => {   
        setTheme(localStorage.getItem("theme") || "light")
    }, []);

    if (theme && theme == "dark") {
        document.documentElement.classList.add("dark")
    }else if(theme && theme == "light") {
        document.documentElement.classList.remove("light")
    }

    function handleTheme(theme) {
        localStorage.setItem("theme" , theme);
        document.documentElement.classList.toggle('dark');
        setTheme(theme)
    };

    return (
        <>
            <FlagSideBar 
                flagStatus={flagStatus}
                setFLagStatusSideBar={setFLagStatusSideBar}
            />
            <UserLoginSideBar  
                userStatus={userStatus}
                setUserStatusSideBar={setUserStatusSideBar}
              />
            <CatalogSideBar 
                catalogStatus={catalogStatus}
                setCatalogSideBar={setCatalogSideBar} 
            />
            <header className="p-5 bg-[#F3F3F3] dark:bg-gray-900   dark:text-[#01b4bc]">
                <div className="w-full max-w-full tab:hidden">
                    {/* Üst Logo və İconlar */}
                    <div className="justify-between m-auto flex items-center mb-2 sm:mb-3 min-w-0">
                       {
                            
                                theme === "light" ?  
                                <Link to={"/Thomann"}>
                                    <img src={thomannLogo} className="w-75  cursor-pointer xs:w-25 sm:w-39 sm:p-3  shrink-0 p-1" alt="Thomann Logo IMG" />
                                </Link> :  <Link to={"/Thomann"}>
                                    <img src={thomannDarkLogo} className="w-75  cursor-pointer  shrink-0 p-5" alt="Thomann Logo IMG" />
                                </Link>
            
                       }
                        <div className="flex gap-5 items-center  shrink-0">

                            <div className="p-4 cursor-pointer">
                                  {   
                                theme == "light" ? 
                                   <PiMoon onClick={() => handleTheme("dark")} size={50} /> :
                                    <PiSunLight onClick={() => handleTheme("light")} size={50} /> 
                            }
                            </div>
                            <p className="text-[0.7rem] xs:text-[0.8rem] smt:text-[1rem] font-semibold whitespace-nowrap hidden xs:block">EN - $</p>
                            <button className="cursor-pointer shrink-0" onClick={() => setFLagStatusSideBar(true)}>
                                <img src={usaSvg} className="w-10 h-10  object-cover bg-cover  rounded-[100%] border-2" alt="United States Image" />
                            </button>
                            <PiUserCircle className="cursor-pointer shrink-0" onClick={() => setUserStatusSideBar(true)} size={50} />
                            <NavLink to={"/WishList"}>
                                <div className="relative">
                                            <span className="absolute px-2 rounded-full text-lg dark:bg-[#01b4bc] dark:text-neutral-100 bg-violet-600 -top-2.5 -left-1.5 font-bold text-white">
                                            {favCount > 99 ? '99+' : favCount}
                                            </span><IoMdHeartEmpty className="cursor-pointer shrink-0" size={50} />
                                </div>   
                            </NavLink>
                            <NavLink to={"/Basket"}>
                                        <div className="relative">
                                             <span className="absolute px-2 rounded-full dark:bg-[#01b4bc] dark:text-neutral-100 bg-violet-600 -top-2.5 -left-2.5 font-bold text-white">
                                                  {
                                                        basketCount
                                                    }
                                             </span>
                                                    <PiShoppingCartLight className="cursor-pointer shrink-0" size={50} />
                                        </div>
                            </NavLink>
                        </div>
                    </div>
                    <div className="w-full flex items-center min-w-0 relative">
                        <input onChange={(e) => setSearchValue(e.target.value)} type="search" placeholder="Search" className="placeholder:text-gray-400 dark:bg-gray-700 placeholder:font-semibold w-full h-16 rounded-full px-14 py-2 placeholder:text-2xl text-4xl sm:text-base focus:outline-2 focus:outline-[#7E00F3]  sm:placeholder:text-lg placeholder:text-center border-0 outline-offset-0 p-5 outline-0 ring-0" />
                        <div className="absolute -top-1.25 transform translate-y-1/2 left-2 sm:left-3">
                            <PiMagnifyingGlassThin  onClick={() => setStatus(!status)} size={40} className="sm:w-6 sm:h-6e cursor-pointer" />
                        </div>
                        <div className="p-2 cursor-pointer" >
                            <RxHamburgerMenu size={40} onClick={() => setCatalogSideBar(true)} />
                        </div>
                    </div>
                </div>
                    <div className="ex-sm:hidden dl:hidden nm:hidden tab:flex tab:justify-between relative extra-sm:hidden extra-sm2:hidden">
                        <div className="tab:flex tab:gap-3 tab:justify-start tab:items-center tab:px-10">
                                <p className="text-[0.8rem] xl:text-[1rem] cursor-pointer hover:text-[#7E00F3] transition-colors">Service</p>
                                <p className="text-[0.8rem] xl:text-[1rem] cursor-pointer hover:text-[#7E00F3] transition-colors">Contact us</p>
                                <p className="text-[0.8rem] hidden tab2:block xl:text-[1rem] cursor-pointer hover:text-[#7E00F3] transition-colors">About Us</p>
                        </div>
                        <div className="tab:absolute top-[50%] left-[51%] translate-[-50%] transform hover:scale-110 transition-all">
                              {
                                     theme == "dark" ?  
                                     <NavLink to={"/Thomann"}>
                                        <img src={thomannDarkLogo} className="w-39 cursor-pointer p-2" alt="Thomann Logo IMG" />
                                     </NavLink> :  <Link to={"/Thomann"}>
                                        <img src={thomannLogo} className="w-39 cursor-pointer p-2" alt="Thomann Logo IMG" />
                                     </Link>
                               }    
                        </div>
                        <div className="flex gap-4 items-center justify-end">
                            <div className="p-4 cursor-pointer hover:text-[#7E00F3] transition-colors">
                            {   
                                theme == "light" ? 
                                   <PiMoon onClick={() => handleTheme("dark")} size={25} /> :
                                  <PiSunLight onClick={() => handleTheme("light")} size={30} /> 
                            }
                            </div>
                                <p className="text-[0.8rem] xl:text-[1rem] cursor-pointer hover:text-[#7E00F3] transition-colors">Repair Service</p>
                                <p className="text-[0.8rem] hidden xl:text-[1rem] cursor-pointer hover:text-[#7E00F3] transition-colors">Satisfaction Guarantee</p>
                                <p className="text-[0.8rem] hidden xl:text-[1rem] xl:block lg:block md:block cursor-pointer hover:text-[#7E00F3] transition-colors">3-Year Thomann Warranty</p>
                        </div>
                    </div>
                    <div className="tab:flex tab:justify-between tab:items-center ex-sm:hidden dl:hidden nm:hidden extra-sm:hidden  extra-sm2:hidden">
                        <div className="flex items-center justify-start py-5">
                            <div className="text-[1.5rem] hover:text-[#7E00F3] transition-colors duration-500 cursor-pointer pr-5" onClick={() => setCatalogSideBar(true)}>
                                ☰
                            </div>
                            <div className="flex gap-5">
                                    <p className="font-semibold hover:text-[#7E00F3] transition-colors cursor-pointer tab4:hidden" onClick={() => setCatalogSideBar(true)}>Categories</p>
                                    <p className="font-semibold hover:text-[#7E00F3] transition-colors cursor-pointer hidden md:block tab3:block">Hot Deals</p>
                                    <p className="font-semibold hover:text-[#7E00F3] transition-colors cursor-pointer hidden tab3:block">New</p>
                                    <p className="font-semibold hover:text-[#7E00F3] transition-colors cursor-pointer hidden tab4:block">Top-Seller</p>
                                    <p className="font-semibold hover:text-[#7E00F3] transition-colors cursor-pointer hidden lg:block">Bargains</p>
                            </div>
                        </div>
                        <div className="px-5 xl:absolute xl:left-[35%] lg:absolute relative">
                            <input  onChange={(e) => setSearchValue(e.target.value)} type="search" className="p-1  dark:bg-gray-700 focus:outline-2 focus:outline-[#7E00F3] rounded-full hover:outline-2 hover:outline-[#7E00F3]  dark:border-0 dark:hover:outline-[#01b4bc] dark:focus:outline-[#01b4bc]  hover:shadow-xl ring-0 border border-gray-300 px-7 placeholder:text-gray-400 text-black  xl:w-125 xl:px-10 xl:py-3 xl:placeholder:text-center placeholder:font-semibold tab:placeholder:text-center  dark:text-[#01b4bc]" placeholder="Search" />
                            <div className="absolute -top-1 transform translate-y-1/2 left-6 -sm:top-1.5 xl:top-0 xl:left-7 sm:left-6">
                                <PiMagnifyingGlassThin onClick={() => setStatus(!status)} size={20} className="sm:w-6 sm:h-6 cursor-pointer text-black dark:text-[#01b4bc]" />
                            </div>
                        </div>
                           <div>
                                <div className="xl:absolute tab:absolute xl:top-20  flex items-center sm:top-14 xl:gap-5 tab2:right-0 md:top-14 md:gap-2 sm:gap-2 xl:right-5 lg:right-0 md:right-0  xs:right-0 px-2 nm:top-14 dl:gap-2">
                                    <p className="text-[0.7rem] xs:text-[0.8rem] sm:hidden font-semibold whitespace-nowrap hidden xs:block md:hidden xl:block nm:hidden dl:hidden ex-sm:hidden">EN - $</p>
                                    <button className="cursor-pointer" onClick={() => setFLagStatusSideBar(true)}>
                                        <img src={usaSvg} className="w-4 xl:w-7.5 xl:h-7.5 lg:w-7.5 lg:h-7.5 h-4 xs:w-[1.2rem] xs:h-[1.2rem] sm:w-6 sm:h-6  object-cover bg-cover  rounded-[100%] border-2" alt="United States Image" />
                                    </button>
                                    <PiUserCircle  onClick={() => setUserStatusSideBar(true)} className="xl:text-[2.3rem] hover:text-[#7E00F3] transition-colors lg:text-[2.3rem] md:text-[1.4rem] cursor-pointer nm:gap-2 dl:text-[1.4rem]  sm:text-[1.5rem]" />
                                    <NavLink to={"/WishList"}>
                                        <div className="relative">
                                                <span className="absolute px-2 rounded-full text-lg dark:bg-[#01b4bc] dark:text-neutral-100 bg-violet-600 -top-2.5 -left-2.5 font-bold text-white">
                                                {favCount > 99 ? '99+' : favCount}
                                                </span><IoMdHeartEmpty  className="cursor-pointer hover:text-[#7E00F3] transition-colors xl:text-[2.3rem] lg:text-[2.3rem] md:text-[1.4rem] sm:text-[1.5rem] nm:gap-2 dl:text-[1.4rem] " />
                                        </div>   
                                    </NavLink>
                                    <NavLink to={"/Basket"}>
                                        <div className="relative">
                                             <span className="absolute px-2 rounded-full text-lg dark:bg-[#01b4bc] dark:text-neutral-100 bg-violet-600 -top-2.5 -left-2.5 font-bold text-white">
                                                {basketCount > 99 ? '99+' : basketCount}
                                             </span><PiShoppingCartLight className="cursor-pointer hover:text-[#7E00F3] transition-colors xl:text-[2.3rem] lg:text-[2.3rem] md:text-[1.4rem] sm:text-[1.5rem] nm:gap-2 dl:text-[1.4rem] "/>
                                        </div>
                                    </NavLink>
                                </div>
                           </div>
                    </div>
            </header>
      { 
        !isDetailPage && !isBaskePage && !isSignUpPage && !isSignInPage && !isUserDashboardPage &&
                 <div className="bg-[#1C1C1C] dark:bg-gray-800 dark:text-[#01b4bc]  hidden  md:flex p-3 text-white lg:flex xl:flex overflow-auto">
                        <NavLink end to={"/Thomann"} className="mx-2 px-5 rounded cursor-pointer">
                            <p>
                                All
                            </p>
                        </NavLink>
                        {
                            products && products
                            .filter((item , index , array) => 
                                array.findIndex(t => t.category === item.category) === index
                            )
                            .map((item , i) => 
                                <NavLink to={`/Thomann/${item.category}`} key={i} className="px-2 cursor-pointer text-white dark:hover:bg-gray-700 hover:bg-[#7E00F3] rounded">{item.head_categ}</NavLink>
                            )
                        }
                </div>
        }
           {
            !status && !category && !isDetailPage && !isBaskePage && !isFavoruitePage && !isSignUpPage && !isSignInPage && !isUserDashboardPage &&
            <>
                <div className="flex items-center gap-5 justify-center py-4 dark:bg-gray-900 dark:text-[#01b4bc]">
                <h3 className="xl:text-[1.8rem] text-[2rem] font-semibold">Welcome to Thomann</h3>
                <img src={HiEmojiSvg} className="w-10 hidden xl:block sm:block" alt="Thomann Hi Emoji"/>
            </div>
             <div className="h-[50vh] dark:bg-gray-900">
              <Slider />
                <div className="flex py-30 lg:py-10 xl:py-10 gap-2 items-center justify-center lg:justify-around xl:justify-around">
                    <div className="flex items-center gap-2 ex-sm:gap-4">
                        <img src={moneyBackSvg} className="w-17.5"  alt="money back svg img"/>
                        <p className="capitalize text-[1.8rem] hover:text-[#7E00F3] transition-colors cursor-pointer dark:text-[#01b4bc] tab:text-sm text-[#282828] xl:text-lg">days money-back</p>
                    </div>
                    <div className="flex items-center gap-2 ex-sm:gap-4">
                          <img src={yearsWarranty} className="w-17.5" alt="3 years warranty svg img"/>
                         <p className="text-[1.8rem] hover:text-[#7E00F3] transition-colors cursor-pointer text-[#282828]  dark:text-[#01b4bc] tab:text-sm xl:text-lg">Years warranty</p>
                    </div>
                    <div className="flex items-center gap-2 ex-sm:gap-4">
                        <img src={serviceRepair} className="w-17.5  nm:block" alt="Service Repair SVG img"/>
                        <p className="text-[1.8rem] hover:text-[#7E00F3] transition-colors cursor-pointer text-[#282828]  dark:text-[#01b4bc] tab:text-sm xl:text-lg  nm:block">Best service in Europe</p>
                    </div>
                    <div className="flex items-center gap-2 ex-sm:gap-4">
                        <img src={biggestWareHouse} className="w-17.5 ex-sm:hidden nm:block" alt="Service Repair SVG img"/>
                        <p className="ex-sm:text-[0.7rem] hover:text-[#7E00F3] transition-colors cursor-pointer text-[#282828] dark:text-[#01b4bc]  tab:text-sm xl:text-lg ex-sm:hidden nm:hidden capitalize tab:block">europe's largest warehouse</p>
                    </div>
                </div>
            </div>
            </>
            }
        </>
    )
}

export default Header