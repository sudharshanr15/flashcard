import React, { useEffect, useState } from 'react'
import { redirect, useParams, Redirect } from 'react-router-dom'
import FlashCard from '../components/FlashCard'
// import Swiper from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'
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
      <div className='h-[80vh] flex items-center justify-center'>
        <div className='w-full'>
          <h1 className='text-center text-2xl underline font-bold mb-12'>{params.id}</h1>
          <Swiper
              slidesPerView={1}
              loop={false}
              navigation={true}
              modules={[Navigation, Pagination]}
              keyboard={true}
              mousewheel={true}
              pagination={{
                clickable: true,
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
          <p className='text-center text-sm text-gray-200'>Click on the card to Flip</p>
          <Link to={"/"} className='underline text-md mt-4 block text-center'>
              Go back
          </Link>
        </div>
      </div>
    )
}

export default Topic