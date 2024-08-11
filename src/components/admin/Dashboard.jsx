import React, { useEffect, useState } from 'react'
import TopicCard from './TopicCard'
import AddCardModal from '../AddCardModal'

const topics = [
    {
      name: "Cybsersecurity",
      url: "",
    },
    {
      name: "Cybsersecurity2",
      url: "",
    },
    {
      name: "Cybsersecurit3",
      url: "",
    },
    {
      name: "Cybsersecurity4",
      url: "",
    },
    {
      name: "Cybsersecurity5",
      url: "",
    },
]

const Dashboard = () => {
    const [isAddModelOpen, setIsAddModalOpen] = useState(true)

    const TopicMenu = ({ name }) => {
        return (
            <button className="border bg-red-900 p-2 rounded" onClick={() => onTopicChange(name)}>
                {name}
            </button>
        )
    }

    useEffect(() => {
        document.querySelector(".section-topic").classList.remove("hidden")
    }, [])

    function onTopicChange(name){
        document.querySelectorAll(".section-topic").forEach((e) => {
            e.classList.add("hidden")
        })

        document.querySelector(`#${name}-section`).classList.remove("hidden")
    }

  return (
    <main>
        <h1>Dashboard</h1>
        <div>
            <h2>Topics</h2>
            <div className="flex gap-4">
                {topics.map((item, index) => (
                    <TopicMenu name={item.name} key={index} />
                ))}
                <button>Add Topic</button>
            </div>
        </div>
        <hr className='my-4' />
        {topics.map((topic, index) => (
            <section className='hidden section-topic' key={index} id={topic.name + "-section"}>
                <div className="flex justify-between">
                    <h2>{topic.name} Topic</h2>
                    <button>New Card</button>
                </div>

                <div className="grid grid-cols-4 gap-4 mt-4">
                    {Array(10).fill(0).map((item, index) => (
                        <TopicCard />
                    ))}
                </div>
            </section>
        ))}
        {isAddModelOpen && <AddCardModal onClose={() => setIsAddModalOpen(prev => !prev)} />}
    </main>
  )
}

export default Dashboard