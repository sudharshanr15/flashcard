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