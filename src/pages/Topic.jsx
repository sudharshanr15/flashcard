import React, { useEffect, useState } from 'react'
import { redirect, useParams, Redirect } from 'react-router-dom'
import FlashCard from '../components/FlashCard'
// import Swiper from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
    const [topicCards, setTopicCards] = useState([])

    const params = useParams()

    useEffect(() => {
      fetch("https://portfolio.selfmade.one/api/topic/get_card.php?topic=" + params.id, {mode: "cors"}).then((res) => {
        return res.json()
      }).then(res => {
        if(res.status){
          setTopicCards(res.message)
        }
      }).catch(err => {
        console.error(err)
      })
    }, [])

    return (
      // <>
        // <FlashCard />
        // <FlashCard />
        // </>
        <Swiper
            slidesPerView={1}
            loop={false}
            navigation={true}
            modules={[Navigation, Pagination]}
            draggable={false}
            keyboard={true}
            mousewheel={true}
            allowTouchMove={false}
            pagination={{
              type: 'fraction',
            }}
        >
            {
              topicCards.map((item, index) => (
                <SwiperSlide key={index} className='mb-10'>
                    <FlashCard item={item} />
                </SwiperSlide>
              ))
            }
        </Swiper>
    )
}

export default Topic