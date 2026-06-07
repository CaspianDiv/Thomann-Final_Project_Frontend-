import { HiXMark } from "react-icons/hi2"

function FeedBackSlider({feedbackStatus, setFeedBackSideBar}) {

    
  return (
    <>  
        <div onClick={() => setFeedBackSideBar(false)} className={`${feedbackStatus  ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} bg-black/50 inset-0 fixed z-10 transition-all duration-700`}>
            <div onClick={(e) => e.stopPropagation()} className={` ${feedbackStatus ? 'translate-x-0' : 'translate-x-full'} bg-white dark:text-[#1ad1da] fixed right-0 h-full w-[700px] dark:bg-gray-800  lg:w-[500px] px-10 transition-all ease-in-out duration-700`}>
                <div className="flex justify-between items-center pt-10">
                    <h4 className="capitalize text-[#1f1f1f] dark:text-[#1ad1da] font-bold text-[2rem] lg:text-xl xl:text-xl">your feedback</h4>
                    <HiXMark onClick={() => setFeedBackSideBar(false)}  className="cursor-pointer text-[3rem] lg:text-[4rem] hover:bg-gray-200/50 p-4 rounded-full hover:text-[#7E00F3] dark:hover:text-gray-800 transition-colors"  />
                </div>
                <div className="lg:p-[30px_10px] pt-5">
                      <p className="text-[#1f1f1f] dark:text-[#1ad1da] text-[1.7rem] lg:text-lg xl:text-lg">Found an error or want to give us feedback about this page?</p>
                </div>
                <div className="lg:p-[10px_10px] pt-5">
                    <textarea placeholder="Comment*" rows={4} cols={43} className="w-full dark:text-[#1ad1da] dark:placeholder:text-[#1ad1da]  lg:text-lg xl:text-lg dark:bg-gray-700  placeholder:text-gray-500 rounded   transition-colors hover:outline-[#7E00F3] dark:hover:outline-[#1ad1da] dark:hover:outline-2 focus:outline-0 focus:ring-[#7E00F3] text-black dark:focus:ring-[#1ad1da] dark:focus:ring-2 focus:ring-2  hover:outline-2 text-[2rem] p-3" />
                </div>
                <div className="m-auto lg:p-[10px_10px] pt-5">
                    <input type="email" placeholder="Email Adress*" className="lg:w-full w-full p-4 dark:placeholder:text-[#1ad1da] dark:text-[#1ad1da] text-[2rem] lg:text-lg xl:text-lg dark:bg-gray-700 rounded hover:outline-[#7E00F3] dark:hover:outline-[#1ad1da] dark:hover:outline-2 focus:outline-0  focus:ring-[#7E00F3] focus:ring-2 text-black dark:focus:ring-[#1ad1da] dark:focus:ring-2 focus:ring-offset-0  hover:outline-2" />
                </div>
                <div className="lg:p-[10px_10px] pt-16 lg:text-center">
                    <button className="bg-gray-900 lg:w-[250px] w-full dark:bg-gray-700 dark:text-[#1ad1da] dark:hover:bg-[#1ad1da] dark:hover:text-gray-800 duration-300 hover:text-white cursor-pointer hover:bg-purple-900 transition-colors py-3 rounded-full lg:text-lg xl:text-lg  text-[1.8rem] text-white font-bold">Send</button>
                </div>
                <div className="m-auto lg:p-[10px_10px] pt-10">
                   <p className="text-[#1f1f1f] dark:text-[#1ad1da] text-2xl lg:text-lg xl:text-lg">We're looking forward to hearing from you and aim to solve any problems as soon as we can.</p>
                   <p className="text-[#1f1f1f] text-xl pt-5 dark:text-[#1ad1da] lg:text-lg xl:text-lg">*Required</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default FeedBackSlider