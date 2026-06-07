import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import "../CSS/highlightslider.css";
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";

// import required modules
import { Scrollbar , Navigation} from 'swiper/modules';
import {   useEffect, useState } from 'react';
import {  useThomman } from '../context/DataContext';

function TopBrandsSlider() {

    const {products} = useThomman();

    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd , setIsEnd] = useState(false);
    const brandsArr = products
    ?.filter((item , index , array) => 
        array.findIndex(t => t.brand_img === item.brand_img) === index
    )
    .map(item => item.brand_img).slice(0 ,40)
    

    const SwiperNavButtons = () => {
        const swiper = useSwiper();

        useEffect(() => {
            const handleSlideChange = () => {
                setIsBeginning(swiper.isBeginning)
                setIsEnd(swiper.isEnd);
            };
            swiper.on('slideChange' , handleSlideChange);
        }, [swiper]);

        return (
            <>
                <div className='swiper-nav-container'>
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
        <div className='py-10'>
            
           <Swiper
                scrollbar={{
                hide: false,
                draggable: true
                }}

                breakpoints={
                {   

                    200: {slidesPerView: 1,spaceBetween: 0},
                    320: {slidesPerView: 1,spaceBetween: 0},
                    768: {slidesPerView: 3,spaceBetween: 0},
                    1024: {slidesPerView: 5,spaceBetween: 0}
                }
            }
                modules={[Scrollbar , Navigation]}
                slidesPerView={5}
                
                className="swiper-nav-container"
                >   
                <SwiperNavButtons />
                {   
                    brandsArr?.map((item , i) => 
                        <SwiperSlide key={i}>
                            <div className='p-10 my-4   border m-auto rounded w-[270px]'>
                                <img src={item} className='h-[100px] transition-all hover:scale-110 duration-300 m-auto object-center' alt="brand logo" />
                            </div>        
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    </>
  )
}

export default TopBrandsSlider