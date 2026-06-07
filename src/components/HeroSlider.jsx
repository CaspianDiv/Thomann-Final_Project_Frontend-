// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "../CSS/app.css"
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination , Autoplay, Navigation} from 'swiper/modules';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import { useEffect, useState } from 'react';
import { getSLiderThomman } from '../services/ThommanServices';

function Slider() {

    const [sliderData , setSLiderData] = useState([]);

    useEffect(() =>{
        getSLiderThomman()
        .then(item => setSLiderData(item))
    },[]);

  return (
    <>
    <div className='relative slider-container'>
        <Swiper 
            slidesPerView={2.5}
            spaceBetween={0}
            loop={true}
            pagination={{
                clickable: true,
                enabled: true,
            }}
            navigation={
                {
                    nextEl: '.swiper-button-nxt-custom',
                    prevEl: '.swiper-button-prv-custom',
                }
            }
            autoplay={
                {
                    delay: 1000, 
                    disableOnInteraction: false, 
                    pauseOnMouseEnter: true,
                    reverseDirection: false
                }
            }
            speed={800}
            breakpoints={
                {   
                    
                    // Daha kiçik ekranlar 
                    200: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                        pagination: {
                        clickable: false,
                        enabled: false
                        }
                    },
                    // Mobile 320 px yuxarı
                    320: {
                        slidesPerView: 1.2,
                        spaceBetween: 0,
                        pagination: {
                            clickable: false,
                            enabled: false
                        },
                        navigation: false,
                    },
                    // Tablet və 768 px yuxarı
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                        pagination: {
                            clickable: false,
                            enabled: false
                        },
                        navigation: false
                    },
                    1024: {
                        slidesPerView: 2.5,
                        spaceBetween: 0,
                        pagination: {
                            clickable: true,
                            enabled: false
                        }
                    }
                }
            }
            modules={[Pagination , Autoplay, Navigation]}
            className="mySwiper"
        >
                    {
                        sliderData?.map((item , i) => <SwiperSlide key={i}>
                            <div className='slide-container aspect-[9/3.90] overflow-hidden rounded-lg'>
                                 <img src={item.img} className='object-cover  w-full h-full'  alt="Slide IMG"/>
                            </div>
                        </SwiperSlide>
                    )
                    }
        </Swiper>
        {/* Custom Navigation Arrows */}
        <div  className='swiper-button-prv-custom'>
            <IoIosArrowRoundBack  size={35} />
        </div>
        <div className='swiper-button-nxt-custom'>
            <IoIosArrowRoundForward size={35}  />
        </div>
    </div>
    </>
  )
}

export default Slider