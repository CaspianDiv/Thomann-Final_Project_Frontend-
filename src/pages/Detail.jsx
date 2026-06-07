import { useParams } from "react-router"
import Error from "./Error";
import { IoIosStarHalf, IoMdStar } from "react-icons/io";
import {   useState } from "react";
import { TbArrowsExchange2 } from "react-icons/tb";
import { CiHeart, CiShare2 } from "react-icons/ci";
import { GoArrowUpRight } from "react-icons/go";
import { PiMedalThin } from "react-icons/pi";
import { FaBoxOpen } from "react-icons/fa";
import {  useThomman } from "../context/DataContext";
import Loader from "../components/Loader";



function Detail() {

    const {products} = useThomman();
    const { brand } = useParams();
    const [counter , setCounter] = useState(1);
    const [thumb , setThumb] = useState(false);


    
    function handleCounter(x){
        if (x == 1 ||  counter > 0) {
            setCounter(counter + x)
        }
    };

    // Xüsusiyyətləri formatlayan funksiya 

    const formatCharactericsKey = (key) => {
        return key 
        .replace(/([A-Z])/g , ' $1') // Data da olan characterics obyektinin camelCase ilə yazılmış key lərinin hamısını normal yazıya çevrilməsi RegExp ilə.
        .replace(/^./, str => str.toUpperCase()) // Sətr başlayır ^ daha sonra . istənilən simvol 1 ədəd onu böyük hərfə çevirir. 
        .replace(/In([A-Z])/g , ' (in $1)') // regexp / başlayır In sözünü tapır və A-Z yə gələn böyük hərfi qruplaşdırıb yadda saxlayır g hamısını seçir (in $1) = In + böyük hərf + boşluq.
        .replace(/\b([A-Z]{2,})\b/g , word => word.toUpperCase()); // \b söz sərhədi başladı di ([A-Z]) {2 ,} 2 və daha çox böyük hərf götür \b söz sərhədi bitdi word.toUpperCase() = bütün sözü böyük hərfə çevir.
    };

    const formatCharacteristicsValue = (value) => {
        if (typeof value === 'boolean') {
            return value ? 'Yes' : 'No';
        };

        if (typeof value === 'number') {
            return value.toString();
        };
        return value
    };  
        
    
    
    if (!products || !products) {
        return <Loader />
    };
    
    
    const dataObj = products.find(item => item.brand === brand);

    if (!dataObj) {
        return <Error />
    };    
    
      function addBasket(id) {

            try {
            let basketArr = [];

            const savedBasket = localStorage.getItem("basketList");


            if (savedBasket) {
                const parsed = JSON.parse(savedBasket);
                basketArr = Array.isArray(parsed) ? parsed : []
            };

            const basketElement = products.find(item => item.id === id);

            if (!basketElement) {
                console.error("Product Not Found!");
                return
            };

            const existingItemIndex = basketArr.findIndex(basketItem => basketItem.id === id);

            if (existingItemIndex > -1) {
                basketArr[existingItemIndex].quantity = basketArr[existingItemIndex].quantity ?
                basketArr[existingItemIndex].quantity + 1 : 2
            }else {
                const newItem = {
                ...basketElement ,
                quantity: 1,
                addedAt: new Date().toISOString()
                }
                basketArr.push(newItem)
            };

            localStorage.setItem("basketList" , JSON.stringify(basketArr));

            window.dispatchEvent(new CustomEvent("basketUpdated"))
            
            } catch (error) {
            console.error("Error adding to cart!" , error);
            }
    
  };

    return (
        <>
        <div className="py-10 flex xl:justify-around lg:justify-around ex-sm:justify-center md:justify-center sm:justify-center flex-wrap dark:bg-gray-900 dark:text-[#01b4bc]">
            <div>
                <h3 className="font-semibold text-[2rem]">{dataObj.name}</h3>
                    <div className='flex gap-1 items-center py-3'>
                        <IoMdStar size={40} />
                        <IoMdStar size={40} />
                        <IoMdStar size={40} />
                        <IoMdStar size={40} />
                        <IoIosStarHalf size={40} />
                        <div className='text-gray-400 font-semibold text-2xl'>
                            {dataObj.rating}
                        </div>
                    </div>
                    <div>
                        <img src={dataObj.brand_img} className="w-25"  alt={dataObj.name} />
                    </div>
                    <div className="py-10"> 
                        {
                            thumb ? <img src={thumb}  alt={dataObj.name} className="w-150 h-150" /> : <img src={dataObj.image} className="w-150 h-150" alt={dataObj.name} /> 
                        }
                    </div>
                         <div className="bg-[#F3F3F3] dark:bg-gray-800 p-5">
                            <div className="flex flex-wrap">
                                <img src={dataObj.thumb_img_1} onClick={() => setThumb(dataObj.thumb_img_1)} className={`w-32.5 cursor-pointer ${thumb === dataObj.thumb_img_1 ?  'border-t-2 border-t-violet-600 ' : ''} p-5`} alt={dataObj.name} />
                                <img src={dataObj.thumb_img_2} onClick={() => setThumb(dataObj.thumb_img_2)} className={`w-32.5 cursor-pointer ${thumb === dataObj.thumb_img_2 ?'border-t-2 border-t-violet-600 ' : ''} p-5`} alt={dataObj.name} />
                                <img src={dataObj.thumb_img_3} onClick={() => setThumb(dataObj.thumb_img_3)} className={`w-32.5 cursor-pointer ${thumb === dataObj.thumb_img_3 ?'border-t-2 border-t-violet-600 ' : ''} p-5`} alt={dataObj.name} />
                                <img src={dataObj.thumb_img_4} onClick={() => setThumb(dataObj.thumb_img_4)} className={`w-32.5 cursor-pointer ${thumb === dataObj.thumb_img_4 ?'border-t-2 border-t-violet-600 ' : ''} p-5`} alt={dataObj.name} />
                                <img src={dataObj.thumb_img_5} onClick={() => setThumb(dataObj.thumb_img_5)} className={`w-32.5 cursor-pointer ${thumb === dataObj.thumb_img_5 ?'border-t-2 border-t-violet-600 ' : ''} p-5`} alt={dataObj.name} />
                                <img src={dataObj.thumb_img_6} onClick={() => setThumb(dataObj.thumb_img_6)} className={`w-32.5 cursor-pointer ${thumb === dataObj.thumb_img_6 ?'border-t-2 border-t-violet-600 ' : ''} p-5`} alt={dataObj.name} />
                            </div>
                       </div>
            {/* Məhsul Xarekterikasına uyğun cədvəlin yaradılması */}
                <div className="py-20">
                    {
                        dataObj.characterics && Object.keys(dataObj.characterics).length > 0 && (
                            <div className="mt-8"> 
                                <h4 className="text-4xl font-bold mb-4 text-gray-800 py-10 dark:text-[#01b4bc] dark:decoration-[#01b4bc] underline underline-offset-10 decoration-violet-600">Product Features</h4>
                                <div className="overflow-x-auto shadow rounded-lg">
                                    <table className="w-full bg-white dark:bg-gray-800 border-collapse">
                                        <tbody>
                                            {
                                                Object.entries(dataObj.characterics).map(([key , value] , index) => (
                                                    <tr key={key} className={`${index % 2 === 0 ? 'bg-gray-50  dark:bg-gray-800' : 'bg-white  dark:bg-gray-800'} border-b border-gray-200  transition-colors duration-200`}>
                                                        <td className="px-6 py-4 font-medium text-gray-700 dark:text-[#01b4bc] ex-sm:text-[1.3rem] md:text-[1.3rem] sm:text-[1.3rem] lg:text-base xl:text-base">
                                                            {formatCharactericsKey(key)}
                                                        </td>
                                                        <td className="px-6 py-4 font-medium text-gray-700 dark:text-[#01b4bc] ex-sm:text-[1.3rem] md:text-[1.3rem] sm:text-[1.3rem] lg:text-base xl:text-base">
                                                            {formatCharacteristicsValue(value)}
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                </div>
            </div>
               <div className="flex flex-col lg:p-0 ex-sm:pr-20 ex-sm:pt-20 xs:pr-20 md:pr-20 sm:pr-20">
                    <div>
                        <h2 className="text-[2rem] font-bold text-[#1f1f1f] dark:text-[#01b4bc]">{dataObj.currency_symbl}{dataObj.price}</h2>
                        <p className="ex-sm:text-[2rem] md:text-[2rem] sm:text-[2rem] ex-sm:py-5 lg:text-lg xl:text-lg">The shipping costs are calculated on the checkout page.</p>
                        <p className="text-green-700 font-semibold ex-sm:text-[2rem] md:text-[2rem] sm:text-[2rem] lg:text-lg dark:text-[#01b4bc]">{dataObj.availability}</p>
                    </div>
                    <div className="flex items-center gap-5 py-5">
                        <button onClick={() => handleCounter(-1)} className="bg-violet-600 p-3 rounded cursor-pointer text-2xl dark:bg-gray-800 dark:hover:bg-[#01b4bc] transition-colors dark:hover:text-gray-800  text-white">-</button>
                            <div className="ex-sm:text-[2rem] md:text-[2rem] sm:text-[2rem] font-bold lg:text-lg xl:text-xl">{counter}</div>
                        <button onClick={() => handleCounter(1)} className="bg-violet-600 p-3 rounded cursor-pointer text-2xl dark:bg-gray-800 dark:hover:bg-[#01b4bc]  transition-colors dark:hover:text-gray-800 text-white">+</button>
                        <button onClick={() => addBasket(dataObj.id)} className="uppercase bg-black hover:bg-violet-700 transition-colors  p-3 cursor-pointer text-neutral-300 w-full rounded-full ex-sm:text-[1.7rem] md:text-[1.7rem] lg:text-lg xl:text-lg sm:text-[1.7rem] dark:bg-gray-800 dark:hover:bg-[#01b4bc] dark:hover:text-gray-800 font-medium">
                            add to basket
                        </button>
                    </div>
                    <div className="flex  gap-10 py-5">
                        <div className="flex items-center gap-2 cursor-pointer hover:text-violet-600">
                            <CiHeart className="ex-sm:text-[2rem] md:text-[2rem] sm:text-[2rem]" />
                            <p className="ex-sm:text-[2rem] md:text-[2rem] sm:text-[2rem] lg:text-lg xl:text-lg">List</p>
                        </div>
                        <div className="flex items-center gap-2 cursor-pointer hover:text-violet-600">
                            <TbArrowsExchange2 className="ex-sm:text-[2rem] md:text-[2rem] sm:text-[2rem]" />
                            <p className="ex-sm:text-[2rem] md:text-[2rem] sm:text-[2rem] lg:text-lg xl:text-lg">Compare</p>
                        </div>
                        <div className="flex items-center gap-2 cursor-pointer hover:text-violet-600">
                            <CiShare2 className="ex-sm:text-[2rem] md:text-[2rem] sm:text-[2rem]" />
                            <p className="ex-sm:text-[2rem] md:text-[2rem] sm:text-[2rem] lg:text-lg xl:text-lg">Share</p>
                        </div>
                    </div>
                    <div className="border border-neutral-200 dark:border-[#01b4bc]  rounded w-125 my-10">
                        <div className="flex gap-5 p-3">
                            <FaBoxOpen size={60} />
                            <div>
                                <p className="font-semibold ex-sm:text-[2rem] md:text-[2rem] sm:text-[2rem] lg:text-lg xl:text-lg">Standart delivery</p>
                                <p className="ex-sm:text-[1.5rem] md:text-[1.5rem] sm:text-[1.5rem] lg:text-lg xl:text-lg">This item is in stock and can be dispatched immediatly</p>
                            </div>
                        </div>
                        <div className="bg-[#f5f5f5] dark:bg-gray-800 flex w-full mt-5 p-3 gap-2 items-center hover:text-violet-600 cursor-pointer">
                                <p className="ex-sm:text-[2rem] md:text-[2rem] sm:text-[2rem] lg:text-lg xl:text-lg">Shipping information</p>
                                <GoArrowUpRight className="ex-sm:text-[2rem] md:text-[2rem] sm:text-[2rem] lg:text-lg xl:text-lg"/>
                        </div>
                    </div>
                    <div className="flex gap-2 hover:text-violet-600 cursor-pointer">
                        <div>
                            <PiMedalThin className="ex-sm:text-[4rem] md:text-[4rem] sm:text-[4rem]" />
                        </div>
                        <div>
                            <p className="italic font-bold text-[2rem] lg:text-4xl xl:text-4xl">24</p>
                        </div>
                        <div>
                            <p className="uppercase ex-sm:text-[2rem] md:text-[2rem] sm:text-[2rem] lg:text-lg xl:text-lg">sales rank</p>
                            <p className="ex-sm:text-[1.5rem] md:text-[2rem] sm:text-[2rem] lg:text-lg xl:text-lg">in Alternative Design Guitars</p>
                        </div>
                    </div>
                    <hr className="mt-5 text-neutral-300" />
               </div>
            </div>
        </>
    )
}

export default Detail