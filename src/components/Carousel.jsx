import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation'
import img5 from '../assets/imgs/jwell5.jpg'
import img6 from '../assets/imgs/jwell6.jpg'
import img1 from '../assets/imgs/jwell7.jpg'
import img2 from '../assets/imgs/jwellery1.png'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Carousel = () => {
  return (
    <div className='w-full flex justify-center p-4 py-10'>
        <div className='relative w-[70%] md:w-[50%] lg-[30%]'>
            <Swiper spaceBetween={0} slidesPerView={1} loop={true} 
        modules={[Navigation, Pagination, Autoplay]} navigation pagination={{clickable: true}} autoplay={{delay:3000}}>
            <SwiperSlide>
                <img src={img5} className='w-full h-96 object-cover'></img>
            </SwiperSlide>
            <SwiperSlide>
                <img src={img6} className='w-full h-96 object-cover'></img>
            </SwiperSlide>
            <SwiperSlide>
                <img src={img2} className='w-full h-96 object-cover'></img>
            </SwiperSlide>
        </Swiper>
        </div>
    </div>
  )
}

export default Carousel