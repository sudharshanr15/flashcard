import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import FlashCard from '../components/FlashCard'
// import Swiper from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const topics = [
    {
      name: "Cybsersecurity",
      url: "",
    },
    {
      name: "Cybsersecurity",
      url: "",
    },
    {
      name: "Cybsersecurity",
      url: "",
    },
    {
      name: "Cybsersecurity",
      url: "",
    },
    {
      name: "Cybsersecurity",
      url: "",
    },
]

const Topic = ({ id }) => {

    const params = useParams()

    return (
        // <>
        // <FlashCard />
        // <FlashCard />
        // </>
        <Swiper
            slidesPerView={1}
            loop={false}
            navigation={true}
            modules={[Navigation]}
            draggable={false}
            keyboard={true}
            mousewheel={true}
            allowTouchMove={false}
        >
            <SwiperSlide>
                <FlashCard />
            </SwiperSlide>
            <SwiperSlide>
                <FlashCard />
            </SwiperSlide>
            <SwiperSlide>
                <FlashCard />
            </SwiperSlide>
        </Swiper>
    )
}

export default Topic