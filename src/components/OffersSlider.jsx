import { useThomman } from "../context/DataContext"
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import "../CSS/highlightslider.css";
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';


// import required modules
import { Scrollbar , Navigation} from 'swiper/modules';
import {   useEffect, useState } from 'react';
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";



function OffersSlider() {


    const {products} = useThomman();
    
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd , setIsEnd] = useState(false);
    const [activeFilter,setActiveFilter] = useState('hotdeals');
    const [productsToDisplay,setProductsToDisplay] = useState([])

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

    useEffect(() => {

        if(!products || products.length === 0) return;

        let filteredProducts = [...products]

        switch(activeFilter) {
            case 'bargains': 
            filteredProducts.sort((a , b) => b.price - a.price);
            setProductsToDisplay(filteredProducts.slice(0 , 10));
            break;
            default: 
            case 'hotdeals': 
            filteredProducts.sort((a , b) =>  a.price - b.price);
            setProductsToDisplay(filteredProducts.slice(0 , 10));
        };
    }, [activeFilter, products]);
    
  return (
    <>
        <div className='relative px-5 py-10 mySwiperContainer'>
            <div className="flex justify-center py-5 gap-5 text-lg">
                <p onClick={() => setActiveFilter('hotdeals')} className={` ${activeFilter === 'hotdeals' ? ' border-b-2 border-b-[#7E00F3] text-[#7E00F3] font-semibold' : ''} hover:text-[#7E00F3] cursor-pointer text-4xl xl:text-2xl lg:text-2xl`}>Hot Deals</p>
                <p onClick={() => setActiveFilter('bargains')} className={` ${activeFilter === 'bargains' ? 'border-b-2 border-b-[#7E00F3] text-[#7E00F3] font-semibold' : ''} hover:text-[#7E00F3] cursor-pointer text-4xl xl:text-2xl lg:text-2xl`}>Bargains</p>
            </div>   
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
                    productsToDisplay.map((item , i) => 
                        <SwiperSlide key={i} style={{padding: '20px 0'}}>
                            <div className='p-7'>
                                <img src={item.image} className='transition-all hover:scale-110 duration-300'  alt={item.name}/>
                            </div>
                            <div className='py-4 px-3'>
                                <p className='hover:text-[#7E00F3] transition-colors text-4xl xl:text-xl lg:text-xl leading-10'>{item.name}</p>
                                <p className='font-bold text-4xl xl:text-xl lg:text-xl leading-10'>{item.currency_symbl}{item.price}</p>   
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