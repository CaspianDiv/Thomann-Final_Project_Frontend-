
import { HiMiniXMark } from "react-icons/hi2";  
import { useEffect, useState } from "react";
import { getFlagsThomman } from "../services/ThommanServices";

function FlagsSideBar({ flagStatus , setFLagStatusSideBar }) {  
    
    const [flagsData , setFlagsData] = useState([]);

    useEffect(() => {
        getFlagsThomman()
        .then(item => setFlagsData(item))
    },[])

  return (
    <>
        <div onClick={() => setFLagStatusSideBar(false)} className={`${flagStatus ? 'opcity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} bg-black/50 fixed transition-all ease-in-out duration-500  inset-0 z-10`}>
            <div onClick={(e) => e.stopPropagation()} className={`
            ${flagStatus ? 'translate-x-0' : 'translate-x-full'}
            xl:w-[450px] right-0 top-0 w-[600px] 
            transform transition-transform    duration-700 z-50 ease-in-out   
                bg-[#fff] dark:bg-gray-800 dark:text-[#01b4bc] fixed h-full overflow-y-scroll`}>
                    <div className="flex justify-between  items-center p-5 border-b">
                        <h4 className="text-[2rem] lg:text-[1.7rem] xl:text-[1.7rem]  font-bold">Country and Language</h4>
                        <HiMiniXMark 
                            className="cursor-pointer hover:text-[#7E00F3] flex-shrink-0 text-[3rem] lg:text-4xl"
                            onClick={() => setFLagStatusSideBar(false)} 
                         />
                    </div>
                    <div className="pt-5">
                        <h5 className="font-bold text-center text-[2rem] lg:text-[1.4rem] xl:text-[1.4rem]  mb-5 ">Country ·  <span className="italic">Country</span></h5>
                        <div className="grid grid-cols-2  sm:grid-cols-2 gap-2 mb-6">
                            {
                                flagsData?.map((item , i) => 
                                    <div key={i} className="flex items-center p-4 dark:hover:bg-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
                                            <div  className="flex items-center gap-3 w-full">
                                                <img src={item.img_svg} 
                                                    className="w-8 h-6 object-cover rounded flex-shrink-0"
                                                        alt={item.name}  />
                                                <p className="hover:text-[#7E00F3] dark:hover:text-violet-500 transition-colors text-[2rem] lg:text-lg xl:text-lg">{item.name}</p>
                                            </div>
                                    </div>

                                )
                            }
                        </div>
                        <div className="text-center mb-6">
                            <div className="border-b-2 inline-block dark:hover:text-violet-500 hover:text-[#7E00F3] cursor-pointer transition-colors">
                                <p className="font-semibold pb-1 text-[2rem] lg:text-lg xl:text-lg">All · <span className="italic">All</span></p>
                            </div>
                        </div>
                        <hr className="my-6" />
                        <p className="text-center font-bold py-4 text-[2rem] lg:text-lg xl:text-lg">Language · <span className="italic">Language</span></p>
                            <div  className="grid grid-cols-2 sm:grid-cols-3  gap-4  px-4 mb-6">
                                {
                                    flagsData?.map((item ,i ) => 
                                        <p key={i} className="cursor-pointer text-[2rem] lg:text-lg xl:text-lg hover:text-[#7E00F3] dark:hover:text-violet-500 hover:bg-[#f1f1f1] text-center p-2 dark:hover:bg-gray-700 rounded transition-colors">{item.lang}</p>
                                    )
                                }
                            </div>
                    </div>
                    <hr className="my-5" /> 
                    <div>
                        <p className="font-bold text-center text-[2rem] lg:text-lg xl:text-lg">Currency · <span className="italic">Currency</span></p>
                    </div>
                                        
                <form className="max-w-sm mx-auto">
                    <label htmlFor="underline_select" className="sr-only">Underline select</label>
                    <select id="underline_select" className="block py-2.5 px-0 w-full text-[2rem] text-gray-500 bg-transparent border-0 border-b-2 lg:text-lg xl:text-lg border-gray-200 appearance-none dark:text-[#01b4bc] dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                        <option>Please Choose</option>
                        {
                            flagsData
                            ?.filter(item => item.currency && item.currency !== '')
                            .map((item,i) => 
                            <option key={i} className="text-2xl lg:text-lg xl:text-lg">{item.currency}</option>
                            )
                        } 
                    </select>
                </form>

            </div>
        </div>
    </>
  )
}

export default FlagsSideBar