import { useEffect, useState } from "react"
import { getNewsCardsThomman } from "../services/ThommanServices";

function NewsCards() {

    const [newsData , setNewsData] = useState([]);

    useEffect(() => {
        getNewsCardsThomman()
        .then(item => setNewsData(item))
    },[]);

  return (
    <>
        {
            newsData?.map((item , i) => 
            <div key={i} className="max-w-md h-[450px]  rounded-md shadow-md bg-[#F3F3F3] dark:bg-gray-800 cursor-pointer hover:text-[#7E00F3] transition-colors">
                <img src={item.img} alt="news image" className="object-cover object-center w-full rounded-t-md h-74" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="">
                        <p className="font-bold text-[1.6rem]">{item.description}</p>
                    </div>
                </div>
            </div>
            )
        }         
    </>
  )
}

export default NewsCards