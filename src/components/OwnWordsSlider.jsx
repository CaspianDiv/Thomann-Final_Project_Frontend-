
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import "../CSS/highlightslider.css";
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';


// import required modules
import { Scrollbar , Navigation} from 'swiper/modules';
import {  useEffect, useState } from 'react';
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import { getOwnSliderThomman } from '../services/ThommanServices';



function OffersSlider() {
    
    const [ownSliderData , setOwnSLider] = useState([]);

    useEffect(() => {
        getOwnSliderThomman()
        .then(item => setOwnSLider(item))
    },[]);
    
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd , setIsEnd] = useState(false);

    const SwiperNavButtons = () => {
        const swiper = useSwiper();

        useEffect(() => {
            if (swiper) {
                const handleSlideChange = () => {
                    setIsBeginning(swiper.isBeginning)
                    setIsEnd(swiper.isEnd);
                };
                swiper.on('slideChange' , handleSlideChange);
            }
        }, [swiper]);

        return (
            <>
                <div className='swiper-nav-container  ex-sm:hidden xl:block hover:block'>
                    <div onClick={() => swiper.slidePrev()} className={`swiper-prev-custom ${isBeginning ? 'disabled' : ''}`}>
                        <TfiAngleLeft size={25} />
                    </div>
                    <div onClick={() => swiper.slideNext()} className={`swiper-next-custom ${isEnd ? 'disabled' : ''}`}>
                        <TfiAngleRight size={25} />
                    </div>
                </div>
            </>
        )
    }


  return (
    <>
        <div className='relative px-5 py-10  mySwiperContainer'>
            <Swiper
                scrollbar={{
                hide: false,
                draggable: true
                }}

                breakpoints={
                {   

                    200: {slidesPerView: 1,spaceBetween: 10},
                    320: {slidesPerView: 1,spaceBetween: 10},
                    768: {slidesPerView: 2,spaceBetween: 20},
                    1024: {slidesPerView: 3,spaceBetween: 50}
                }
            }
                modules={[Scrollbar , Navigation]}
                slidesPerView={5}
                
                className="swiper-nav-container"
                >   
                <SwiperNavButtons />

                {               
                    ownSliderData?.map((item , i) => 
                        <SwiperSlide key={i}>              
                                <div className='relative bg-[#F3F3F3]  m-auto my-10  rounded p-5 dark:bg-gray-800'>
                                    <div className='h-30 flex flex-col justify-around'>
                                                <div className='absolute -top-2.5 left-[50%] p-3 bg-[#fff] group dark:bg-gray-600 shadow-md rounded-full transform translate-[-50%]'>
                                                    <img src={item.img} className='w-7.5' alt='slider img' />
                                                </div>
                                                <p className='text-center pt-2 text-[1.6rem] text-[#1f1f1f] dark:text-[#1ad1da] xl:text-sm'>{item.content}</p>
                                                <p className='text-center font-bold pt-2 text-[1.5rem] text-md text-[#1f1f1f] dark:text-[#1ad1da] xl:text-sm'>{item.text}</p>
                                    </div>
                                </div>
                        </SwiperSlide>
                    )    
                    
                }
            </Swiper>
        </div>
    </>
  )
}

export default OffersSlider