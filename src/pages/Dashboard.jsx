import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getTopicsList } from '../server_api';

// const topics = [
//     {
//       name: "Cybsersecurity",
//       url: "",
//     },
//     {
//       name: "Cybsersecurity",
//       url: "",
//     },
//     {
//       name: "Cybsersecurity",
//       url: "",
//     },
//     {
//       name: "Cybsersecurity",
//       url: "",
//     },
//     {
//       name: "Cybsersecurity",
//       url: "",
//     },
// ]

const Dashboard = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopicsList().then(res => {
      setTopics(res)
    })
  }, [])

  return (
    <>
        <div className="flex justify-end mb-8">
          <Link to={"/admin"} className='border border-white p-2 rounded'>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-person inline" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
            </svg>
            <span className='ms-2'>Administrator</span>
          </Link>
        </div>
        <h1 className='text-center text-2xl'>Choose a Topic and test your knowledge with Flashcards</h1>
        <div className="my-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {topics.map((item, index) => (
                  <Link to={"/" + item.name} className="border p-4 border-gray-700 rounded-md bg-bluegray bg-opacity-50 hover:border-gray-500 text-lg" key={index}>
                      {item.name}
                  </Link>
                ))}
            </div>
        </div>
    </>
  )
}

export default Dashboard